import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RedirectPage from './pages/RedirectPage';
import NotFoundPage from './pages/NotFoundPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":shortUrl" element={<RedirectPage />} />
        <Route path="not-found" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

