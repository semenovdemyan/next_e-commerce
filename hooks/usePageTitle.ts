import { useEffect } from 'react'
import { useLang } from './useLang'

export const usePageTitle = (page: string, additionalText = '') => {
  const { lang, translations } = useLang()

  useEffect(() => {
    document.title = `${
      lang === 'ru' ? 'Сытый\u00A0моряк' : 'Сытый\u00A0моряк'
    } | ${
      (translations[lang].breadcrumbs as { [index: string]: string })[page]
    }${additionalText ? ` - ${additionalText}` : ''}`
  }, [additionalText, lang, page, translations])
}
