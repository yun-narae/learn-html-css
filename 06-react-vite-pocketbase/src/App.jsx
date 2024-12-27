import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';
import RegistrationSuccess from './Auth/RegistrationSuccess';

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path="/registration-success" element={<RegistrationSuccess />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
