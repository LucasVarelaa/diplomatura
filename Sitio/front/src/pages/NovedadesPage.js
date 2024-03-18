import React from "react";

const NovedadesPage = (props) => {
    return (
        <main className="holder">
            <div className="novedades">
                <p>¡Nos complace anunciar el lanzamiento de nuestro último producto estrella: Café Tipo Italiano Gourmet
                    Bourbon Doble Crema! Sumérgete en una experiencia de café sin igual con nuestra exquisita mezcla de
                    granos 100% arábicos, cuidadosamente seleccionados para ofrecerte un sabor y una calidad incomparables.
                </p>
                <hr />
                <p>
                    Inspirado en la rica tradición del café italiano, nuestro Café Tipo Italiano Gourmet Bourbon Doble Crema
                    presenta una textura suave y cremosa, resaltando las notas aromáticas y el cuerpo completo de los granos
                    Bourbon. Tostados a la perfección para realzar su sabor único, cada taza de nuestro café ofrece una
                    experiencia indulgente que deleitará tus sentidos.
                </p>
                <img className="animacion" src="img/cafe.jpg" alt="cafe" />
                <p>
                    Disfruta de la auténtica pasión por el café italiano con cada sorbo de nuestro Café Tipo Italiano
                    Gourmet Bourbon Doble Crema. ¡Hazte con el tuyo hoy y descubre el verdadero placer del café de calidad
                    superior!
                </p>
                <hr />
            </div>
        </main>
    );
}

export default NovedadesPage;
