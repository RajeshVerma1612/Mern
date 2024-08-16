import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Dashboard from './pages/Dashboard'
import Rankers from './pages/Rankers'
import SignIn from './pages/Signin'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/blogs'element={<Blogs/>} />
        <Route path='/signin'element={<SignIn/>} />
        <Route path='/signup'element={<SignUp/>} />
        <Route path='/rankers'element={<Rankers/>} />
        <Route element={<PrivateRoute/>}>
          <Route path='/dashboard'element={<Dashboard/>} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute/>}>
          <Route path='/create-post'element={<CreatePost/>} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
