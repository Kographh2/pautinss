import { db } from "@/lib/supabase";

export type Stats = { links: number; clicks: number; pct: number };

// Mengembalikan null kalau database belum siap atau belum ada link.
export async function getStats(): Promise<Stats | null> {
  try {
    const { data, error } = await db().rpc("link_stats");
    const row = data?.[0];
    if (error || !row) return null;
    const links = Number(row.total_links);
    if (!links) return null;
    return {
      links,
      clicks: Number(row.total_clicks),
      pct: Math.round((Number(row.clicked_links) / links) * 100),
    };
  } catch {
    return null;
  }
}
