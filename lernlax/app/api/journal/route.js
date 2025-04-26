import { createClient } from '@vercel/postgres';

const client = createClient();

export async function GET() {
  try {
    await client.connect();
    const { rows } = await client.sql`SELECT * FROM journal_entries ORDER BY created_at DESC;`;
    return Response.json(rows);
  } catch (error) {
    console.error('Fehler beim Laden der Journal-Einträge:', error);
    return new Response('Interner Serverfehler', { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { text } = await request.json();

    if (!text) {
      return new Response('Fehlender Text', { status: 400 });
    }

    await client.connect();
    await client.sql`INSERT INTO journal_entries (text) VALUES (${text});`;

    return new Response('Eintrag gespeichert', { status: 201 });
  } catch (error) {
    console.error('Fehler beim Speichern des Journal-Eintrags:', error);
    return new Response('Interner Serverfehler', { status: 500 });
  }
}
