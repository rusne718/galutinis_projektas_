import Home from './src/pages/Home'
import Dashboard from './src/pages/Dashboard'
import NewUserForm from './src/pages/NewUserForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useCookies } from 'react-cookie'


const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const authToken = cookies.AuthToken

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              {authToken && <Route path="/dashboard" element={<Dashboard/>}/>}
              {authToken && <Route path="/newUserForm" element={<NewUserForm/>}/>}

          </Routes>
      </BrowserRouter>
  )
}

export default App
