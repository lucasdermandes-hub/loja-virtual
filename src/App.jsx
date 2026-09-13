import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Carrinho } from "./pages/Carrinho";
import { Pagamento } from "./pages/Pagamento";
import { Sucesso } from "./pages/Sucesso";
import { Falha} from "./pages/Falha";

import logoLoja from "./assets/logo.png";

export function App() {
  return (
    <>
    <header>
      <img src={logoLoja} alt="Logo Loja" />
    </header>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Carrinho />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/sucesso" element={<Sucesso />} />
        <Route path="/falha" element={<Falha />} />
      </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;