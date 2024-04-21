import { useState, useEffect } from "react";
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            //
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <section className="holder">
            <h2>Novedades</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                        imagen={item.imagen} body={item.cuerpo} />)
                )
            }
        </section>



        /*
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
        */
    )
};

export default NovedadesPage;
