import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Produtos from './components/Produtos';

import './App.css';
import Contato from './components/Contato';
import Produto from './components/Produto';

const App = () => {
  return (
  <div className="App">
    <BrowserRouter>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Produtos />}/>
          <Route path="contato" element={<Contato />}/>
          <Route path="produto/:id" element={<Produto />}/>
        </Routes>
      </div>
      <Footer />
     </BrowserRouter>
  </div>
  );
}

export default App;
