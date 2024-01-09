"use client"
import { mockQuestions } from "../entities/question/question";
import Questions from "../components/Questions";
import { useEffect } from "react";
import { query } from "firebase/database";
import { useDispatch, useSelector } from 'react-redux';
import { collection, onSnapshot } from "firebase/firestore";
import { setFrontEndQuestions } from "../store/categoriesSlice";
import {DragDropContext, Droppable} from "react-beautiful-dnd"


const Page = () => {




/*   const questionsList = mockQuestions; // Получаю  массив вопросов, либо потом через селектор из стора буду получать вопросы
 */  

const onDragEnd = (result: any) => {
  // Обработка перетаскивания элементов
  //  логика обновления порядка элементов в questionsList
};

return (
  <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="questions">
      {(provided, snapshot) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {questionsList.map((question, index) => (
            <Draggable key={question.id} draggableId={question.id} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {/* Здесь вам нужно отобразить вашу карточку */}
                  <Questions
                    key={question.id}
                    question={question}
                    categorySlug={categorySlug}
                    collectionSlug={collectionSlug}
                  />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
);
};

export default Page;