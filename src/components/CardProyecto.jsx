const CardProyecto = ({data}) => {
    return(
        <div className="card">
            <div class="image">
                <img src={data.imagen} alt={data.titulo} />
            </div>
            <div class="details">
                <div class="center">
                    <a href={data.imagen} > {data.titulo} </a>
                    <p> 
                        {data.descripcion}
                    </p>
                    {data.video ? <video src={data.videoLink} muted controls></video> : ""}
                    <ul>
                        {data.tecnologias.map((item)=>{
                            return(
                                <li><a href="#"> {item.isImage ? 
                                    <img src={item.icon} alt={item.icon} />
                                    : 
                                    <i className={item.icon}></i>
                                }</a></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <h3>{data.titulo}</h3>
        </div>
    )
}

export default CardProyecto