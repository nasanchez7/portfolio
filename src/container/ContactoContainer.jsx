import { useEffect } from "react";

const ContactoContainer = () => {

    useEffect(()=>{

    },[])

    return(
        <div className="contactoContainer animate__animated animate__fadeInDown">
            <h3>Contactame</h3>

            <div className="contactos">

                <div className="cardContacto">
                    <i className='bx bxs-phone' ></i>
                    <h4>+54 11 6903 5923</h4>
                </div>

                <div className="cardContacto">
                    <i className='bx bxs-envelope'></i>
                    <a href="mailto:nadirblanco02@gmail.com" id="email">nadirblanco02@gmail.com</a>
                </div>

                <div className="cardContacto">
                    <i className='bx bxl-linkedin-square'></i>
                    <a href="https://www.linkedin.com/in/nadirsanchez/">Nadir Sanchez</a>
                </div>

            </div>


        </div>
    )
}

export default ContactoContainer;