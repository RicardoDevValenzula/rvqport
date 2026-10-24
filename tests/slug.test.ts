import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toSlug } from '../src/lib/slug.ts';

test('turns a project name into a lowercase, hyphenated slug', () => {
  assert.deepEqual(toSlug('Ledgerline Invoices'), { ok: true, slug: 'ledgerline-invoices' });
});

test('strips accents instead of dropping the letters', () => {
  assert.deepEqual(toSlug('Diseño Ágil'), { ok: true, slug: 'diseno-agil' });
});

test('collapses symbols and trims hyphens at both ends', () => {
  assert.deepEqual(toSlug('  --Hello, World!!--  '), { ok: true, slug: 'hello-world' });
});

test('rejects names shorter than 3 characters once slugged', () => {
  assert.deepEqual(toSlug('a!'), { ok: false, error: 'Use at least 3 letters or numbers' });
});

test('rejects slugs longer than 40 characters', () => {
  assert.deepEqual(toSlug('x'.repeat(41)), { ok: false, error: 'Keep it under 40 characters' });
});
