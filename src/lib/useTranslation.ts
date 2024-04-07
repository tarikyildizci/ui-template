import { TOptions } from 'i18next'
import {
  useTranslation as translation,
  UseTranslationOptions,
  UseTranslationResponse,
} from 'react-i18next'

export type TranslationKey =
  | string
  | TemplateStringsArray
  | (string | TemplateStringsArray)[]
export type TranslationOptions = string | TOptions | undefined

export const useTranslation = (
  masterKey?: string,
  ns?: string | undefined,
  options?: UseTranslationOptions<string> | undefined,
): Omit<UseTranslationResponse<string, string>, 't'> & {
  t: (key: TranslationKey) => string
} => {
  const translationProps = translation(ns, options)
  const t = (key: TranslationKey) => {
    const mKey = masterKey ? `${masterKey}.${key}` : `${key}`
    return translationProps.t(mKey).toString()
  }
  return { ...translationProps, t }
}
