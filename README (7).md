# PointerScore 100

Vollständiges Entwicklungsprojekt für GitHub, Vercel und eine spätere Supabase-Anbindung. Die bestehende Website wurde in ein Vite-/TypeScript-Projekt überführt.

## Stack

- HTML5 und CSS3
- TypeScript
- Vite 8
- Supabase JavaScript Client (vorbereitet)
- Mehrseitiger Produktions-Build

## Start

```bash
npm install
npm run dev
```

Danach ist die Website unter `http://localhost:4173` erreichbar.

## Befehle

```bash
npm run dev
npm run typecheck
npm run build
npm run preview
```

## Supabase

Kopiere `.env.example` nach `.env.local` und trage später die Werte aus deinem Supabase-Projekt ein. Der Client liegt in `src/lib/supabase.ts`. Verwende im Frontend niemals einen Service-Role-Key.

## Vercel

Importiere das GitHub-Repository in Vercel. Das Framework wird als Vite erkannt. Build-Befehl ist `npm run build`, das Ausgabeverzeichnis ist `dist`.

## Struktur

```text
public/assets/       Logo, Icons, PDF und Cover
src/components/      Navigation, FAQ, Reveal und Formular
src/lib/             Vorbereiteter Supabase-Client
src/styles/          Bestehendes Designsystem
pages/               Impressum, Datenschutz und Kontakt
supabase/migrations/ Zukünftige Datenbankmigrationen
```

`node_modules` und `dist` sind bewusst nicht enthalten.
