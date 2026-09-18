import "server-only";

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { google } from "googleapis";

import { siteData } from "@/data/site";

export type Destination = {
  country: string;
  city: string;
  image: string;
  description: string;
  highlights: string[];
};

type SheetRow = {
  ordem?: string;
  ativo?: string;
  pais?: string;
  cidade?: string;
  imagem?: string;
  descricao?: string;
  destaques?: string;
};

type ServiceAccountCredentials = {
  client_email: string;
  private_key: string;
  project_id?: string;
};

const DEFAULT_SPREADSHEET_ID =
  "1t7va-n7oXrxIAvOqM3_6xayCaoBCykCtKiIa3RWMwjg";

const SHEET_RANGE = "Destinos!A:G";

function normalizeHeader(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function isActive(value: string | undefined): boolean {
  if (!value) return false;

  return [
    "true",
    "1",
    "sim",
    "s",
    "yes",
    "y",
    "ativo",
  ].includes(value.trim().toLowerCase());
}

function parseHighlights(value: string | undefined): string[] {
  if (!value) return [];

  return value
    .split(";")
    .map((highlight) => highlight.trim())
    .filter(Boolean);
}

function getFallbackDestinations(): Destination[] {
  return siteData.destinations.map((destination) => ({
    country: destination.country,
    city: destination.city,
    image: destination.image,
    description: destination.description,
    highlights: destination.highlights,
  }));
}

function getCredentialsFromEnvironment():
  | ServiceAccountCredentials
  | null {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    return null;
  }

  return {
    client_email: clientEmail,
    private_key: privateKey.replace(/\\n/g, "\n"),
  };
}

function getCredentialsFromFile():
  | ServiceAccountCredentials
  | null {
  const serviceAccountPath = join(
    process.cwd(),
    "google-service-account.json"
  );

  try {
    const fileContent = readFileSync(
      serviceAccountPath,
      "utf-8"
    );

    return JSON.parse(
      fileContent
    ) as ServiceAccountCredentials;
  } catch (error) {
    console.warn(
      "Google Sheets: arquivo de credenciais não encontrado ou inválido.",
      error
    );

    return null;
  }
}

function getCredentials(): ServiceAccountCredentials | null {
  const environmentCredentials =
    getCredentialsFromEnvironment();

  if (environmentCredentials) {
    return environmentCredentials;
  }

  return getCredentialsFromFile();
}

export async function getDestinations(): Promise<Destination[]> {
  const credentials = getCredentials();

  if (!credentials) {
    console.warn(
      "Google Sheets: credenciais não encontradas. Usando fallback."
    );

    return getFallbackDestinations();
  }

  const spreadsheetId =
    process.env.GOOGLE_SHEETS_SPREADSHEET_ID ||
    DEFAULT_SPREADSHEET_ID;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets.readonly",
      ],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: SHEET_RANGE,
    });

    const values = response.data.values;

    if (!values || values.length < 2) {
      console.warn(
        "Google Sheets: nenhuma linha de destino encontrada. Usando fallback."
      );

      return getFallbackDestinations();
    }

    const headers = values[0].map((header) =>
      normalizeHeader(String(header))
    );

    const rows: SheetRow[] = values.slice(1).map((row) => {
      const rowData: Record<string, string> = {};

      headers.forEach((header, index) => {
        rowData[header] = String(row[index] ?? "");
      });

      return {
        ordem: rowData.ordem,
        ativo: rowData.ativo,
        pais: rowData.pais,
        cidade: rowData.cidade,
        imagem: rowData.imagem,
        descricao: rowData.descricao,
        destaques: rowData.destaques,
      };
    });

    const destinations = rows
      .filter((row) => isActive(row.ativo))
      .filter(
        (row) =>
          row.pais &&
          row.cidade &&
          row.imagem &&
          row.descricao
      )
      .sort(
        (a, b) =>
          Number(a.ordem || 9999) -
          Number(b.ordem || 9999)
      )
      .map((row) => ({
        country: row.pais!.trim(),
        city: row.cidade!.trim(),
        image: row.imagem!.trim(),
        description: row.descricao!.trim(),
        highlights: parseHighlights(row.destaques),
      }));

    if (destinations.length === 0) {
      console.warn(
        "Google Sheets: nenhum destino ativo e válido encontrado. Usando fallback."
      );

      return getFallbackDestinations();
    }

    return destinations;
  } catch (error) {
    console.error(
      "Google Sheets: erro ao carregar destinos. Usando fallback.",
      error
    );

    return getFallbackDestinations();
  }
}