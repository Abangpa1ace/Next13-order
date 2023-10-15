"use client";

import { useEffect } from 'react';
import styles from './styles.module.scss';

async function getCategories() {
  const response = await fetch('/api/categories', {
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
    }
  });
  return response.json();
}

const CategoryTabList = () => {
  // const data = await getCategories();
  // console.log('data', data);

  useEffect(() => {
    fetch('/api/categories').then(res => res.json()).then(data => console.log('cate', data));
  }, [])

  return (
    <ul className={styles.tabList}>
      <li className={styles.tabItem}>커피</li>
      <li className={styles.tabItem}>밀크티</li>
    </ul>
  )
}

export default CategoryTabList;