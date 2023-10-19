import useGetCategories from '@/hooks/order/api/useGetCategories';
import { Children, useEffect } from 'react';
import styles from './styles.module.scss';

interface Props {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const TabList = ({ selectedCategory, setSelectedCategory }: Props) => {
  const { data: categories } = useGetCategories();

  useEffect(() => {
    if (!selectedCategory && categories?.length) setSelectedCategory(categories[0].id);
  }, [categories]);

  return (
    <ul className={styles.tabList}>
      {Children.toArray(categories.map(category => (
        <li
          className={`${styles.tabItem} ${category.id === selectedCategory ? styles.selectedTabItem : null}`}
          onClick={() => setSelectedCategory(category.id)}
        >
          {category.name}
        </li>
      )))}
    </ul>
  )
}

export default TabList;