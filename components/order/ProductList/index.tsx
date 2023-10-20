import useGetProducts from "@/hooks/order/api/useGetProducts";
import { Children } from "react";
import ProductItem from "./ProductItem";
import styles from './styles.module.scss';

interface Props {
  selectedCategory: string;
}

const ProductList = ({ selectedCategory }: Props) => {
  const { data: productList } = useGetProducts({ category: selectedCategory });


  if (!productList?.length) <p className={styles.placeholder}>{'상품이 존재하지 않습니다.'}</p>

  return (
    <div className={styles.productList}>
      {Children.toArray(productList.map(product => <ProductItem product={product} />))}
    </div>
  )
}

export default ProductList;