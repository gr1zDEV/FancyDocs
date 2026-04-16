import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const dynamic = 'force-static';

const isStaticExport = process.env.GITHUB_PAGES === 'true';

const searchHandlers = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: 'english',
});

export async function GET(request: Request) {
  if (isStaticExport) {
    return Response.json(
      { error: 'Search API is unavailable in static export builds' },
      { status: 501 }
    );
  }

  return searchHandlers.GET(request);
}
