import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Dashboard from './pages/Dashboard'
import Rankers from './pages/Rankers'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/blogs'element={<Blogs/>} />
        <Route path='/dashboard'element={<Dashboard/>} />
        <Route path='/rankers'element={<Rankers/>} />
        <Route path='/signin'element={<Signin/>} />
        <Route path='/signup'element={<SignUp/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
