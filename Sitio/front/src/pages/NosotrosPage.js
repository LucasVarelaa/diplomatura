import React from "react";

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>
                    En el corazón de "El Secreto de Familia" yace una historia centenaria de pasión por el aceite de oliva.
                    Surgimos de la curiosidad de amigos y vecinos que buscaban descubrir cómo elaborábamos nuestro
                    excepcional aceite. Hoy, compartimos este legado culinario con el mundo, manteniendo viva la tradición
                    familiar en cada botella.
                </p>
            </div>

            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="img/FUNDADOR.jpg" alt="Pedro Grazioso" />
                        <h5>Pedro Grazioso</h5>
                        <h6>Fundador</h6>
                        <ul>
                            <li>Lidera la tradición familiar en la producción de aceite de oliva.</li>
                            <li>Guardián de los secretos ancestrales de la elaboración del aceite.</li>
                            <li>Transmite pasión y dedicación en cada paso del proceso de producción.</li>
                        </ul>
                    </div>

                    <div className="persona">
                        <img src="img/Gerente.jpg" alt="Claudia Maria Paty" />
                        <h5>Claudia Maria Paty</h5>
                        <h6>Gerente General</h6>
                        <ul>
                            <li>Supervisa y coordina todas las operaciones de la empresa.</li>
                            <li>Experta en estrategias de negocio y desarrollo empresarial.</li>
                            <li>Promueve un ambiente de trabajo colaborativo y motivador.</li>
                        </ul>
                    </div>

                    {/* Otros elementos de persona van aquí */}
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;
