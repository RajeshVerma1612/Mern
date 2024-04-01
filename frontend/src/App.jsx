import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Header from './components/Header'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/about'element={<About/>} />
        <Route path='/dashboard'element={<Dashboard/>} />
        <Route path='/projects'element={<Projects/>} />
        <Route path='/signin'element={<Signin/>} />
        <Route path='/signup'element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
