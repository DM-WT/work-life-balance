import { sql } from '@vercel/postgres';

export async function GET() {
  try {
    const { rows } = await sql`SELECT * FROM journal_entries ORDER BY created_at DESC;`;
    return Response.json(rows, { status: 200 });
  } catch (error) {
    console.error('Fehler beim Laden der Journal-Einträge:', error);
    return new Response('Fehler beim Abrufen der Einträge', { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { text } = await request.json();

    if (!text || text.trim() === "") {
      return new Response('Fehlender oder leerer Text', { status: 400 });
    }

    await sql`INSERT INTO journal_entries (text) VALUES (${text});`;

    return new Response('Eintrag gespeichert', { status: 201 });
  } catch (error) {
    console.error('Fehler beim Speichern des Journal-Eintrags:', error);
    return new Response('Fehler beim Speichern des Eintrags', { status: 500 });
  }
}
