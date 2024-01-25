"use client"
import React from 'react'
import Collections from '../components/Collections'
import { useParams } from 'next/navigation'
import { mockCategories } from '../entities/category/category'
import { selectCategories } from '../entities/category/categorySlice'
import { useSelector } from 'react-redux'



const SpecificPage = () => {
  const { categorySlug } = useParams();
  const categoriesFromStore = useSelector(selectCategories);
  console.log(categoriesFromStore);
  const currentCategory = categoriesFromStore.find(category => category.slug === categorySlug)
  console.log(currentCategory)
  return currentCategory ? (
    <Collections categorySlug = {currentCategory.slug}  collectionsList = {currentCategory?.collections || []} />
  ) : <div>no category</div>
}

export default SpecificPage