import React from "react";

const Footer = (props) => {
    return (
        <footer>
        <div className="col">
            <div className="nombre">
                <h1>Secretos de Familia</h1>
            </div>
     {/*    <div className="contactos">
                <ul>
                    <li><i className="fa-solid fa-mobile-screen-button"></i> +54 9 11 3351-6293</li>
                    <li><i className="fa-solid fa-envelope"></i> secretosdefamilia@gmail.com</li>
                    <li><i className="fa-solid fa-location-dot"></i> Alfredo Lorenzo Palacio 2582</li>
                </ul>
            </div>   */}
            <div className="info">
                <h2 className="h2"><i className="fa-solid fa-bell"></i>HORARIOS DEPOSITO</h2>
                <ul>
                    <li>Viernes - de 9 a 12hs y de 13 a 16hs</li>
                    <li>Sabado - de 9 a 14hs</li>
                </ul>
            </div>
            <div className="ayuda">
                <h2 className="h2"><i className="fa-solid fa-bell"></i>HORARIOS WHATSAPP</h2>
                <ul>
                    <li>Lunes a Viernes</li>
                    <li>de 9 a 12hs y de 13 a 14hs</li>
                </ul>
            </div>
        </div>

        <div className="col">
            <div className="nombre">
            </div>
            <div className="contactos">
            </div>
        </div>

        <p>2024 <span>Secretos de Familia</span> by Lucas Varela</p>
    </footer>
    );
}

export default Footer;