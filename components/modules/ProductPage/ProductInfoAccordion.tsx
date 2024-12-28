import { IProductInfoAccordeonProps } from '@/types/product'
import Accordeon from '../Accordeon/Accordeon'
import styles from '@/styles/product/index.module.scss'

const ProductInfoAccordeon = ({
  children,
  title,
}: IProductInfoAccordeonProps) => (
  <Accordeon
    title={`${title}:`}
    titleClass={styles.product__top__description__btn}
    rotateIconClass={styles.expanded}
  >
    {children}
  </Accordeon>
)

export default ProductInfoAccordeon
