import Link from 'next/link'
import { useLang } from '@/hooks/useLang'

const ContactsListItems = () => {
  const { lang, translations } = useLang()

  return (
    <>
      <li className='nav-menu__accordeon__item'>
        <a
          href='tel:+79996683935'
          className='nav-menu__accordeon__item__link nav-menu__accordeon__item__title'
        >
          +7 (999) 668 39 35
        </a>
      </li>
      <li className='nav-menu__accordeon__item'>
        <a
          href='mailto:test@gmail.com'
          className='nav-menu__accordeon__item__link'
        >
          Email
        </a>
      </li>
      <li className='nav-menu__accordeon__item'>
        <Link
          href='https://t.me/demian_semenoff'
          className='nav-menu__accordeon__item__link'
        >
          {translations[lang].main_menu.tg}
        </Link>
      </li>
      <li className='nav-menu__accordeon__item'>
        <Link href='https://vk.com' className='nav-menu__accordeon__item__link'>
          {translations[lang].main_menu.vk}
        </Link>
      </li>
    </>
  )
}

export default ContactsListItems
