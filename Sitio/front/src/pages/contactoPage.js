import React from "react";

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <input type="text" name="" />
                    </p>
                    <p class="acciones"><input type="submit" value="Enviar" /></p>
                </form>
            </div >
            <div class="datos">
                <h2>Otras vias de comunicacación</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li><i class="fa-solid fa-phone"></i>  whatsapp: 11 3351-6293</li>
                    <li><i class="fa-solid fa-envelope"></i>  Email: secretosdefamilia@gmail.com</li>
                    <li><i class="fa-brands fa-instagram"></i>  Instagram: secretosdefamiliagourmet</li>
                </ul>
                <h3><i class="fa-solid fa-house"></i>  Alfredo Lorenzo Palacio 2582</h3>
            </div>
        </main>
    );
}

export default ContactoPage;