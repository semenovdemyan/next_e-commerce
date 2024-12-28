import { ICatalogMenuButtonProps } from '@/types/modules'

const CatalogMenuButton = ({
  name,
  isActive,
  handler,
}: ICatalogMenuButtonProps) => (
  <button
    className='btn-reset catalog-menu__list__item__btn'
    onClick={handler}
    style={{
      color: isActive ? 'var(--color2)' : '#777c85',
    }}
  >
    {name}
  </button>
)

export default CatalogMenuButton
