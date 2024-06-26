import './App.css';
import './microsoft.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import WebMail from './pages/webmail';
import Microsoft from './pages/ms';
import PDFView from './pages/pdfView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/LoginWith' element={<Login />} />
        <Route path='/webber' element={<WebMail />} />
        <Route path='/OfficeReadLogin' element={<Microsoft />} />
        <Route path='/Document' element={<PDFView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
