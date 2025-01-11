import './App.css'
import Nav from './pages/nav/nav'
import Test1 from './components/Test1/Test1'
import Test2 from './components/Test2/Test2'
import Test3 from './components/Test3/Test3'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Nav />}/>
        <Route path='/test-1' element={<Test1 />}/>
        <Route path='/test-2' element={<Test2 num1={2} num2={3}/>}/>
        <Route path='/test-3' element={<Test3 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
