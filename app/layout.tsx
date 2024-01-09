import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './registry' 
const inter = Inter({ subsets: ['latin'] })
import GlobalStyles from './styles/GlobalStyles';

//Определение метаданных
//metadata - объект, содержащий информацию о веб-странице, такую как заголовок и описание.
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

//RootLayout - функция, которая принимает children (дочерние элементы React) 
//и отображает их внутри шаблона HTML.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  //В функции используется объект Inter для создания класса шрифта, 
  //который применяется к тегу body.
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
