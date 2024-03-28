import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import UseJSX from './Component/usejsx'
import UseJavascriptinjsx from './Component/useJavascriptinjsx'
import CondisionalRendaring from './Component/condisionalRendaring'
import Loopinjsx from './Component/loopinjsx'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UseJSX/>
     <UseJavascriptinjsx/>
     <CondisionalRendaring/>
     <Loopinjsx/>
    </>
  )
}
