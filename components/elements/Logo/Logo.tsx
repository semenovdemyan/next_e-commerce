import Link from 'next/link'
import Image from 'next/image'

const Logo = () => (
  <Link className='logo' href='/'>
    <Image
      width={160}
      height={40}
      className='logo__img'
      src='/img/logo.svg'
      alt='Сытый\u00A0моряк Logo'
    />
  </Link>
)

export default Logo
