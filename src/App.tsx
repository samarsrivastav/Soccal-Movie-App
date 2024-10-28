import './App.css'
import Navbar from './components/Navbar'
import CategoryBar from './components/CategoryBar'
import CarouselComp from './components/Corousel'
import Movies from './components/Movies'
import Series from './components/Series'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Episode from './components/Episode'
import { useState } from 'react'
import Footer from './components/footer'
function App() {
  const [search,setSearch]=useState("")
  return (
    <>
    <Navbar setSearch={setSearch}/>
    <Router>
      <CategoryBar/>
      <CarouselComp/>
      <Routes>
        <Route path='/' element={<Movies search={search}/>}></Route>
        <Route path='/movie' element={<Movies search={search}/>}></Route>
        <Route path='/series' element={<Series search={search}/>}></Route>
        <Route path='/episode' element={<Episode search={search}/>}></Route>
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
