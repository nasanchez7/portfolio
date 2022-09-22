const InicioContainer = () => {
    return(
        <div className="inicioContainer">
            <div className="info animate__animated animate__fadeInDown">
                <h3>ReactJS Developer</h3>
                <div className="info-nombre">
                    <h2>Hola! Yo soy</h2>
                    <h2 className="nadir">Nadir Sanchez</h2>
                </div>
                <h4>
                    Soy un desarrollador React apasionado por el diseño, maquetado y desarrollo de paginas
                    web interactivas.
                </h4>
                <div className="redes">
                    <a href="https://www.linkedin.com/in/nadirsanchez/"><i className='bx bxl-linkedin-square'></i></a>
                    <a href="https://github.com/nasanchez7"><i className='bx bxl-github'></i></a>
                </div>
                <div className="descarga">
                    <i className='bx bxs-archive-in'></i>
                    <a download="Curriculum" href="/NadirSanchezCV.docx">Descarga mi cv</a>
                </div>
            </div>
            <div className="img animate__animated animate__fadeInRight">
                <img src="/foto.png" alt="" />
            </div>
        </div>
    )
}

export default InicioContainer;