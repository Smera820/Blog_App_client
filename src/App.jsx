import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './pages/Home'
import Signup from './components/signup'
import AddBlog from './components/addBlog'
import {Toaster} from 'react-hot-toast'

function App() {

  return (
    <>
      <Router>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/addBlog' element={<AddBlog/>}/>
          {/* step 1:create route for home */}
        </Routes>
      </Router>

    </>
  )
}

export default App
