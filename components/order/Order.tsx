"use client";

import { useState } from "react";
import ProductList from "./ProductList";
import styles from './styles.module.scss';
import TabList from "./TabList";

const Order = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  return (
    <main className={styles.main}>
      <TabList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList selectedCategory={selectedCategory} />
    </main>
  )
}

export default Order;