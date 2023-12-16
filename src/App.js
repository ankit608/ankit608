import { Login } from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/Signup';
import { TODOS } from './pages/TODOS';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
          <Route path='/TODOS' element={<TODOS></TODOS>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
