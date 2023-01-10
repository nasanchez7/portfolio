import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import './scss/styles.scss';
import InicioContainer from "./container/InicioContainer";
import SkillsContainer from "./container/SkillsContainer";
import PortafolioContainer from "./container/PortafolioContainer";
import ContactoContainer from "./container/ContactoContainer";
import ExperienciaContainer from './container/ExperienciaContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={"/"} element={<InicioContainer/>}/>
          <Route path={"/habilidades"} element={<SkillsContainer/>}/>
          <Route path={"/portafolio"} element={<PortafolioContainer/>}/>
          <Route path={"/contacto"} element={<ContactoContainer/>}/>
          <Route path={"/experiencia"} element={<ExperienciaContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
