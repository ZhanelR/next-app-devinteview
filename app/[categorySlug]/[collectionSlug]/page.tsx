

"use client"

import Questions from '@/app/components/Questions';
import { mockCategories } from '@/app/entities/category/category';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import React from 'react'


const SpecificPage = () => {
    const { categorySlug, collectionSlug } = useParams();

const currentCategory = mockCategories.find(category => category.slug === categorySlug)
const currentCollection = currentCategory?.collections.find(collection => collection.slug === collectionSlug)


console.log(categorySlug, collectionSlug)
  return (currentCategory && currentCollection) ? (
    <Questions  questionsList = {currentCollection?.questions || []}  categorySlug={currentCategory.slug} collectionSlug={currentCollection.slug}/>
    ) : <div>no data</div>
}

export default SpecificPage