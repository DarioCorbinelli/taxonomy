// Automatically generated by declarative-routing, do NOT edit
import { z } from 'zod'
import { makeRoute } from './makeRoute'

const defaultInfo = {
  search: z.object({}),
}

import * as HomeRoute from '@/app/[locale]/page.info'
import * as DocsRoute from '@/app/[locale]/docs/[[...slugs]]/page.info'

export const Home = makeRoute(HomeRoute.PATH, {
  ...defaultInfo,
  ...HomeRoute.Route,
})
export const Docs = makeRoute(DocsRoute.PATH, {
  ...defaultInfo,
  ...DocsRoute.Route,
})
