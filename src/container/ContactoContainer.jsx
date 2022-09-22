import { useEffect } from "react";

const ContactoContainer = () => {

    

    useEffect(()=>{

        const form = document.getElementById("form");
        const email = document.getElementById("email");

        
        const formSubmit = (event) => {
            event.preventDefault();
            const formData = new FormData(this);
            email.href = `mailto:nadirblanco02@gmail.com?subject=${formData.get('name')}${formData.get('email')}&body=${formData.get('mensaje')} `;
            email.click();

        }

        form.addEventListener("submit", formSubmit);



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

            <div className="form">

                <form action="" id="form">

                    <div className="form-1">
                        <input type="text" placeholder="Nombre y apellido" required name="name"/>
                        <input type="email" placeholder="Tu correo" required name="email"/>
                    </div>

                    <div className="form-2">
                        <textarea placeholder="Escribe tu mensaje" required name="mensaje" id="" cols="30" rows="10"></textarea>
                        <input type="submit" />
                    </div>

                </form>

            </div>
        </div>
    )
}

export default ContactoContainer;