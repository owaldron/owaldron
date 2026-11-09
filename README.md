# owaldron.ca

Second iteration of my personal website. Built with Next.js (App Router); every page is statically generated.

## Development

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

PostHog analytics read `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` (e.g. from `.env.local`); without them analytics are skipped.

## Modifying Content

The `content` folder in `src` houses all the content for the page, and are sorted by their associated page.
Pages live in `src/app`, with each page's metadata (title, description, Open Graph) exported from its `page.tsx`.

## TODOs

- Add carousel for project photos.
- Add icons & links to education/work experience
