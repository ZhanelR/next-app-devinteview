"use client"

import Questions from '@/app/components/Questions';
import { mockCategories } from '@/app/entities/category/category';
import { useParams } from 'next/navigation';
import React from 'react'


const SpecificPage = () => {
    const { categorySlug, collectionSlug, questionSlug } = useParams();

const currentCategory = mockCategories.find(category => category.slug === categorySlug)
const currentCollection = currentCategory?.collections.find(collection => collection.slug === collectionSlug) 
const currentQuestion = currentCollection?.questions.find(question => question.slug === questionSlug)


console.log(categorySlug, collectionSlug)
  return (currentCategory && currentCollection && currentQuestion) ? (
    <div>
        <p>
            {currentQuestion.title} 
        </p>
        <p>
             {currentQuestion.description} 
        </p>
        <p>
            {currentQuestion.id} 
        </p>
    </div>
    ) : <div>no data</div>
}

export default SpecificPage