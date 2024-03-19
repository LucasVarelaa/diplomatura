import React from "react";

const Homepage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>
                        Bienvenido a Secretos de Familia, un lugar donde la pasión por el aceite de oliva se entrelaza con
                        una tradición arraigada en la cultura culinaria italiana y la exquisitez de los sabores argentinos.
                    </p>
                    <hr />
                    <p>
                        Desde 1998, Secretos de Familia ha sido un referente en la producción y comercialización de aceite
                        de oliva de la más alta calidad. Sin embargo, nuestra historia va más allá de la excelencia en la
                        producción de aceite; nos enorgullece ofrecer una amplia variedad de productos que representan lo
                        mejor de la gastronomía argentina e italiana.
                    </p>
                    <hr />
                    <p>
                        Nuestro compromiso con la calidad y la autenticidad se refleja en cada producto que ofrecemos. Desde
                        nuestras aceitunas hasta nuestras berenjenas al escabeche, nuestras calabresas protos con pimentón
                        ahumado y nuestros pickles al ajillo, cada artículo ha sido seleccionado y elaborado con el mismo
                        cuidado y atención al detalle que caracteriza a nuestra empresa.
                    </p>
                    <hr />
                    <p>
                        Además de nuestros productos gourmet, en Secretos de Familia también ofrecemos una selección de café
                        recién tostado, miel de la más alta calidad y lupines de sabor inigualable, brindando a nuestros
                        clientes una experiencia gastronómica completa y satisfactoria.
                    </p>
                    <hr />
                    <p>
                        Únete a nosotros en este viaje culinario donde la tradición, la calidad y la pasión se combinan para
                        ofrecerte lo mejor en cada bocado. ¡Bienvenido a Secretos de Familia!
                    </p>
                    
                </div>

                <div className="dias">
                    <img src="img/infoDias.jpg" alt="dias" />
                </div>
            </div>
        </main>
    );
}

export default Homepage;
