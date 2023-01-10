const ExperienciaContainer = () => {
    return(
        <div className="experienciaContainer animate__animated animate__fadeInDown">
            <h3>Mi experiencia laboral y emulaciones</h3>
            <div className="experienciasList">
                <div className="experienciaCard">
                    <div className="cardTitle">
                        <i class='bx bx-code-alt'></i>
                        <h4>Freelancer en Fiverr</h4>
                    </div>
                    <h5> Diciembre 2022 hasta la actualidad </h5>
                    <a href="https://es.fiverr.com/nadirsanchez">https://es.fiverr.com/nadirsanchez</a>
                    <p>Ofrezco servicios de: </p>
                    <div className="servicesList">
                        <div className="service">
                            <i class='bx bxs-square-rounded'></i>
                            <small>Creacion de paginas web basadas en HTML, CSS y Bootstrap </small>
                        </div>
                        <div className="service">
                            <i class='bx bxs-square-rounded'></i>
                            <small>Traslado de diseños psd a una pagina web HTML, CSS, Bootstrap y JavaScript</small>
                        </div>
                        <div className="service">
                            <i class='bx bxs-square-rounded'></i>
                            <small>Solucion de errores de HTML, CSS, Bootstrap o JavaScript</small>
                        </div>
                    </div>
                </div>

                <div className="experienciaCard">
                    <div className="cardTitle">
                        <i class='bx bx-code-alt'></i>
                        <h4>Emulacion de entorno de trabajo en NoCountry</h4>
                    </div>
                    <h5> Noviembre 2022 hasta la actualidad </h5>
                    <p>En esta emulacion aprendi: </p>
                    <div className="servicesList">
                        <div className="service">
                            <i class='bx bxs-square-rounded'></i>
                            <small>De mis compañeros</small>
                        </div>
                        <div className="service">
                            <i class='bx bxs-square-rounded'></i>
                            <small>A trabajar en equipo </small>
                        </div>
                        <div className="service">
                            <i class='bx bxs-square-rounded'></i>
                            <small>A mejorar mi comunicacion</small>
                        </div>
                        <div className="service">
                            <i class='bx bxs-square-rounded'></i>
                            <small>A reunirme diariamente con el equipo y organizar las tareas del dia</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienciaContainer;