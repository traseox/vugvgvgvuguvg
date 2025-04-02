import {
  getGeneralDataHandler,
  getRootURL,
  getGeneralURL,
} from '@/shared/api/api'
import { HttpHandler } from 'msw'

export const handlers: HttpHandler[] = [
  getGeneralDataHandler,
  getRootURL,
  getGeneralURL,
]
