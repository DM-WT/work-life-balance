import { Pool } from 'pg';

const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL_NON_POOLING,
  ssl: isProduction
    ? { rejectUnauthorized: true }  // In Production (z.B. Vercel): SSL Zertifikate vollständig prüfen
    : { rejectUnauthorized: false }, // Lokal (development): Self-signed Zertifikate erlauben
});

export async function GET() {
  try {
    const client = await pool.connect();
    const { rows } = await client.query('SELECT * FROM journal_entries ORDER BY created_at DESC;');
    client.release();
    return Response.json(rows, { status: 200 });
  } catch (error) {
    console.error('Fehler beim Abrufen der Einträge:', error.message);
    return Response.json({ error: 'Fehler beim Abrufen der Einträge' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { text } = await request.json();
    if (!text || text.trim() === '') {
      return new Response('Fehlender oder leerer Text', { status: 400 });
    }

    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO journal_entries (text) VALUES ($1) RETURNING id, text, created_at',
      [text]
    );
    client.release();

    console.log('Gespeichert:', result.rows[0]);
    return Response.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Fehler beim Speichern:', error.message);
    return Response.json({ error: 'Fehler beim Speichern' }, { status: 500 });
  }
}
