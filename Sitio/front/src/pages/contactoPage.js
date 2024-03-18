import React from "react";

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" />
                    </p>
                    <p>
                        <label htmlFor="telefono">Teléfono</label>
                        <input type="text" name="telefono" />
                    </p>
                    <p>
                        <label htmlFor="mensaje">Mensaje</label>
                        <input type="text" name="mensaje" />
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar" /></p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras vías de comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li><i className="fa-solid fa-phone"></i> WhatsApp: 11 3351-6293</li>
                    <li><i className="fa-solid fa-envelope"></i> Email: secretosdefamilia@gmail.com</li>
                    <li><i className="fa-brands fa-instagram"></i> Instagram: secretosdefamiliagourmet</li>
                </ul>
                <h3><i className="fa-solid fa-house"></i> Alfredo Lorenzo Palacio 2582</h3>
            </div>
        </main> 
    );
}

export default ContactoPage;
