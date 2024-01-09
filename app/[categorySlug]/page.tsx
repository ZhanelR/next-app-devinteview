"use client"

import React from 'react'
import Collections from '../components/Collections'
import { mockCollections } from '../entities/collection/collection'
import { useParams } from 'next/navigation'
import { mockCategories } from '../entities/category/category'

const SpecificPage = () => {
  const { categorySlug } = useParams();
  const currentCategory = mockCategories.find(category => category.slug === categorySlug)
  console.log(currentCategory)
  return currentCategory ? (
    <Collections categorySlug = {currentCategory.slug}  collectionsList = {currentCategory?.collections || []} />
  ) : <div>no category</div>
}

export default SpecificPage