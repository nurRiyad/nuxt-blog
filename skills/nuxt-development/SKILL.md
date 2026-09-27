---
name: nuxt-development
description: Implement, debug, or review this repository's Nuxt application using the matching Nuxt 4 APIs and official Nuxt documentation.
---

# Nuxt development for this repository

Use this skill for changes to Nuxt pages, layouts, components, composables, routing, data fetching, server routes, configuration, rendering, or Nuxt modules in this repository.

## Authority and version

- Treat the checked-in code, `package.json`, and `package-lock.json` as the authority for this project's installed versions and established patterns.
- This project uses Nuxt 4, Vue 3, TypeScript, Nuxt Content 3, and npm. Nuxt app code is under `app/`; server handlers are under `server/`.
- Before using an API or module option, verify it against the Nuxt documentation for the installed major version. Do not copy Nuxt 3 examples into this Nuxt 4 project without confirming compatibility.
- Prefer Nuxt's official documentation at <https://nuxt.com/docs/4.x>. Nuxt publishes Markdown docs and an MCP endpoint at <https://nuxt.com/mcp>; use them when available. For Vue, Nitro, UnJS, or a specific module API, consult that project's official documentation.
- Online docs can describe a newer release than the lockfile. When examples conflict, follow the installed version and local conventions; explain any required dependency upgrade separately instead of silently upgrading.

## Project conventions

- Put route pages in `app/pages/`, shared UI in `app/components/`, composables in `app/composables/`, shared app types in `app/types/`, and app utilities in `app/utils/`.
- Put HTTP/server handlers in `server/`. Keep browser-only APIs inside client lifecycle hooks or client-only components so server rendering remains safe.
- Reuse Nuxt auto-imports and existing Nuxt primitives where they fit. Keep data fetching SSR-aware; preserve the current `useAsyncData`/Nuxt Content query patterns unless the task calls for changing them.
- Follow the existing TypeScript strictness, component naming, and Prettier conventions. Do not edit generated `.nuxt/` or `.output/` files.
- Blog post schema and authoring rules live in [`../../content/README.md`](../../content/README.md). Check downstream archive, category, SEO, navigation, and RSS behavior when changing content fields or publication/date handling.
- Site identity and SEO data are in `app/data/index.ts`; the RSS handler currently has a separate base URL in `server/routes/rss.xml.ts`.

## Workflow

1. Inspect the relevant source files and the installed dependency versions before selecting Nuxt APIs.
2. For framework behavior, check the specific Nuxt 4 documentation page rather than relying on memory. Verify module-specific behavior in that module's official docs.
3. Make the smallest change that fits the request and the existing project structure. Preserve SSR and hydration behavior unless the task explicitly changes rendering behavior.
4. Run the checks appropriate to the change: `npm run lint` and `npm run format` for code changes; `npm run build` for application, configuration, module, or dependency changes. For content-only changes, follow the content guide and build when schema/rendering behavior is affected.
5. Summarize the files changed, verification run, and any docs/version uncertainty that remains.

## Official references

- [Nuxt 4 documentation](https://nuxt.com/docs/4.x)
- [Nuxt directory structure](https://nuxt.com/docs/4.x/directory-structure)
- [Nuxt API reference](https://nuxt.com/docs/4.x/api)
- [Nuxt Content documentation](https://content.nuxt.com/)
