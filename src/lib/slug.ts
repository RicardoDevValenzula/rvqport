export type SlugResult =
  | { ok: true; slug: string }
  | { ok: false; error: string };

export function toSlug(name: string): SlugResult {
  const slug = name
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  if (slug.length < 3) {
    return { ok: false, error: 'Use at least 3 letters or numbers' };
  }
  if (slug.length > 40) {
    return { ok: false, error: 'Keep it under 40 characters' };
  }
  return { ok: true, slug };
}
