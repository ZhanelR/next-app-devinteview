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
import { useDispatch } from './lib/redux';


const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`;


export default function Home() {

  const dispatch = useDispatch();
/*   const categories: ICategory[] = useSelector(selectCategories);
 */


/*   useEffect(() => {
    const q = query(collection(db, 'collections')) //отпр запрос к базе
    const unsubscribe = onSnapshot(q, (querySnapshot) => {   //onSnapshot каждый раз (всегда!!!), когда что-то меняется в базе, присыл новый снэпшот
      console.log({...querySnapshot.docs[0].data()})
      dispatch(setFrontEndQuestions(Object.values({...querySnapshot.docs[0].data() })))
    })
    return () => unsubscribe() 
    }, []) */

    useEffect(() => {
      const q = query(collection(db, 'categories')) //отпр запрос к базе
      const unsubscribe = onSnapshot(q, (querySnapshot) => {   //onSnapshot каждый раз (всегда!!!), когда что-то меняется в базе, присыл новый снэпшот
        console.log({...querySnapshot.docs[0].data()})
        dispatch(fetchCategories(Object.values({...querySnapshot.docs[0].data() })))
      })
      return () => unsubscribe() 
      }, [])

    
/*       useEffect(() => {
        const q = query(collection(db, 'questions')) //отпр запрос к базе
        const unsubscribe = onSnapshot(q, (querySnapshot) => {   //onSnapshot каждый раз (всегда!!!), когда что-то меняется в базе, присыл новый снэпшот
          console.log({...querySnapshot.docs[0].data()})
          dispatch(setFrontEndQuestions(Object.values({...querySnapshot.docs[0].data() })))
        })
        return () => unsubscribe() 
        }, []) */

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