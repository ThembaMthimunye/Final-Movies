
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Movies from './Components/Movies'
import MovieDetails from './Components/MovieDetails'


 

function App() {


  return (
       <>
         <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
             <Route path='/MovieDetails/:id' element={<MovieDetails />}/>

             <Route path='' element={<Movies ></Movies>}/>
             
           </Routes>

         </BrowserRouter>

        
       </>
        


  )
}

export default App
