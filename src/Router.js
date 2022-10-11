import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';

import GlobalStyles from './Styles/GlobalStyles';

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
