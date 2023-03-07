const SkillsContainer = () => {
    return(
        <div className="habilidadesContainer animate__animated animate__fadeInDown">
            <h3>Habilidades</h3>
            <div className="card-list">
                <div className="card">
                    <i className='bx bxl-html5'></i>
                    <h4>HTML</h4>
                </div>
                <div className="card">
                    <i className='bx bxl-css3' ></i>
                    <h4>CSS</h4>
                </div>
                <div className="card">
                    <i className='bx bxl-sass' ></i>
                    <h4>SASS</h4>
                </div>
                <div className="card">
                    <i className='bx bxl-javascript' ></i>
                    <h4>JavaScript</h4>
                </div>
                <div className="card">
                    <i className='bx bxl-typescript'></i>
                    <h4>TypeScript</h4>
                </div>
                <div className="card">
                    <i className='bx bxl-react' ></i>
                    <h4>ReactJS</h4>
                </div>
                <div className="card">
                    <i className='bx bxl-react' ></i>
                    <h4>React Native</h4>
                </div>
                <div className="card">
                    <i class='bx bxl-redux'></i>
                    <h4>Redux</h4>
                </div>
                <div className="card next">
                    <img src="./next.png" alt="nextjs"></img>
                </div>
                <div className="card next">
                    <img src="./nodejs.png" alt="nodejs"></img>
                </div>
                <div className="card next">
                    <img src="./expressVerde.png" alt="express"></img>
                    <h4>Express JS</h4>
                </div>
                <div className="card next">
                    <img src="./mongodbVerde.png" alt="mongodb"></img>
                </div>
                <div className="card">
                    <img src="/diseño.png" alt="diseño"/>
                    <h4>Herramientas de diseño.</h4>
                    <p>Conocimientos minimos</p>
                </div>
            </div>
        </div>
    )
}

export default SkillsContainer;