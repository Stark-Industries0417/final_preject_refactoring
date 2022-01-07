import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUp from './routes/SignUp';
import Main from './routes/Main';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
