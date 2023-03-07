import { proyectosPersonales } from "../utils/data";
import CardProyecto from "../components/CardProyecto";

const PortafolioContainer = () => {
    return(
        <div className="portafolioContainer animate__animated animate__fadeInDown">
            <h3>Mis proyectos personales</h3>
            <div className="proyectos-list">
                {proyectosPersonales.map((p)=>{
                    return(
                        <CardProyecto data={p} key={p.titulo}/>
                    )
                })}
            </div>
        </div>
    )
}

export default PortafolioContainer;