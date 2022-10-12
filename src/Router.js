import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Schedule from './Pages/Schedule';
import Register from './Pages/Register';
import Reservation from './Pages/Reservation';

import GlobalStyles from './Styles/GlobalStyles';

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
