
import Main from './components/main/main';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from './utils/const';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
