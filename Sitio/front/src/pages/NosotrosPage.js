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

                <div className="persona">
                    <img src="img/RedesSociales.jpg" alt="Paula Burgos" />
                    <h5>Paula Burgos</h5>
                    <h6>Redes Sociales</h6>
                    <ul>
                        <li>Gestiona y promociona la presencia de la empresa en redes sociales.</li>
                        <li>Crea contenido creativo para aumentar la visibilidad y el engagement.</li>
                        <li>Interactúa con la comunidad para fortalecer la relación con los clientes.</li>
                    </ul>
                </div>

                <div className="persona">
                    <img src="img/empleado.jpg" alt="Juan Cruz Piccone" />
                    <h5>Juan Cruz Piccone</h5>
                    <h6>Empleado</h6>
                    <ul>
                        <li>Encargado de la producción y envasado de aceite de oliva.</li>
                        <li>Garantiza la calidad y frescura de cada botella.</li>
                        <li>Apasionado por mantener los estándares de excelencia en cada lote.</li>
                    </ul>
                </div>

                <div className="persona">
                    <img src="img/empleado2.jpg" alt="Federico Nahuel Piccone" />
                    <h5>Federico Nahuel Piccone</h5>
                    <h6>Empleado</h6>
                    <ul>
                        <li>Responsable del control de calidad de los productos.</li>
                        <li>Se encarga de la logística y distribución de los pedidos.</li>
                        <li>Comprometido con la satisfacción del cliente en cada entrega.</li>
                    </ul>
                </div> 
            </div>
        </div>
    </main>
    );
}

export default NosotrosPage;
