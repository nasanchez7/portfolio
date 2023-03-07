import { proyectosFreeLance } from "../utils/data"
import CardProyecto from "../components/CardProyecto"

const ProyectosFreeLance = () => {
    return(
        <div className="portafolioContainer animate__animated animate__fadeInDown">
        <h3>Mis proyectos Freelance</h3>
        <div className="proyectos-list">
            {proyectosFreeLance.map((p)=>{
                return(
                    <CardProyecto data={p} key={p.titulo}/>
                )
            })}
        </div>
    </div>
    )

}

export default ProyectosFreeLance