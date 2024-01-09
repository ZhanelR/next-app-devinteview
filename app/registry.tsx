'use client' //делаю компон клиентским, чтобы оптимизир загрузку
//все, с чем взаим юзер, должен быть клиентским компонентом 
//в клиентские компон нельзя передавать серверные 

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) { //StyledComponentsRegistry - это я созд обертку,куда передаю компоненты (children)
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
  //тут я созд нов таблицу стилей, в ней все стили styled components. По сути
  //тут виртуальный CSS, куда будут прилетать стили

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  }) //тут показано, что я получаю все стили, сгенерир на серверн компонентах через ф-ю getStyleElement
//т.е тут показано, как я на клиентской части получаю стили от серверной 


  if (typeof window !== 'undefined') return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}