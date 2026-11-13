# Role-based product manager — Ionic + Angular + Supabase

Product management app with login and two roles, built with Ionic and standalone Angular (signals, zoneless) on top of Supabase Auth and Row Level Security.

| Role | Can do |
|---|---|
| `user` | Sign in and browse products |
| `admin` | Create, edit and delete products, and change other users' roles |

**Highlights:** signals for state, reactive forms with validation, route guards per role, RLS policies in PostgreSQL so permissions are enforced by the database (not only the UI), Capacitor config for mobile, Playwright end-to-end tests.

## Run it

1. Create a Supabase project, run the SQL in `datos-demo.sql` and create the demo users in Authentication.
2. Put your project URL and publishable key in `gestion-roles-app/src/environments/environment.ts`.
3. `cd gestion-roles-app && npm install && npm start`. E2E tests: `npx playwright test`.

Built during the *Interface Development* module (Multiplatform App Development, Nebrija, 2026). Original notes in Spanish: [README.es.md](README.es.md).
