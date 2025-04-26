import { createClient } from '@supabase/supabase-js';

// Supabase Client erstellen
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('journal_entries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Fehler beim Laden der Einträge:', error.message);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data, { status: 200 });
  } catch (error) {
    console.error('Fehler beim GET:', error.message);
    return Response.json({ error: 'Interner Serverfehler' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { text } = await request.json();

    if (!text || text.trim() === '') {
      return new Response('Fehlender oder leerer Text', { status: 400 });
    }

    const { data, error } = await supabase
      .from('journal_entries')
      .insert([{ text }])
      .select()
      .single();

    if (error) {
      console.error('Fehler beim Speichern:', error.message);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data, { status: 201 });
  } catch (error) {
    console.error('Fehler beim POST:', error.message);
    return Response.json({ error: 'Interner Serverfehler' }, { status: 500 });
  }
}
