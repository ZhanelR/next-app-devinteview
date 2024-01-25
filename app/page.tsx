"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import Banner from './src/Banner';
import styled from 'styled-components';
import Header from './components/Header';
import Head from 'next/head';
import Categories from './components/Categories';
import { ICategory, mockCategories } from './entities/category/category';
import { onSnapshot, collection, query } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { fetchCategories, selectCategories } from './entities/category/categorySlice';
import { fetchCollections } from './entities/collection/collectionSlice';
import { useDispatch } from 'react-redux';



const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`;


export default function Home() {

  const dispatch = useDispatch();
/*   const categories: ICategory[] = useSelector(selectCategories);
 */




     useEffect(() => {
      const q = query(collection(db, 'categories')) //отпр запрос к базе
      const unsubscribe = onSnapshot(q, (querySnapshot) => {   //onSnapshot каждый раз (всегда!!!), когда что-то меняется в базе, присыл новый снэпшот
/*         console.log({...querySnapshot.docs.data()})
 */     let categories = [];
        categories = querySnapshot.docs.map((category) => {
          console.log(category.data())
          return category.data()
        })
        //@ts-ignore
        dispatch(fetchCategories(categories))
      })
      return () => unsubscribe() 
      }, [])


      useEffect(() => {
        const q = query(collection(db, 'collections')) //отпр запрос к базе
        const unsubscribe = onSnapshot(q, (querySnapshot) => {   //onSnapshot каждый раз (всегда!!!), когда что-то меняется в базе, присыл новый снэпшот
        let collections = [];
        collections = querySnapshot.docs.map((collection) => {
            return collection.data()
          })
          //@ts-ignore
          dispatch(fetchCollections(collections))
        })
        return () => unsubscribe() 
        }, [])


        useEffect(() => {
          const q = query(collection(db, 'questions')) //отпр запрос к базе
          const unsubscribe = onSnapshot(q, (querySnapshot) => {   //onSnapshot каждый раз (всегда!!!), когда что-то меняется в базе, присыл новый снэпшот
          let questions = [];
          questions = querySnapshot.docs.map((question) => {
              return question.data()
            })
            //@ts-ignore
            dispatch(fetchQuestions(questions))
          })
          return () => unsubscribe() 
          }, [])

  return (
    <>
      <Head children={undefined}>
{/*       Сюда можно встав тэги аналитики, фб и др*/}    
      </Head>
      <MainContainer>
        <Header />
        <h1>Hello</h1>
        <Banner />
        <Categories categoriesList={mockCategories} />
    </MainContainer>
   </>
  );
}