import React from "react";
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.massage);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }




    return (
        <main className="holder contacto-container">
            <div className="contacto">
                <div className="formulario-container">
                    <h2>Contacto Rápido</h2>
                    <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                        <p>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </p>
                        <p>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} />
                        </p>
                        <p>
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                        </p>
                        <p>
                            <label htmlFor="mensaje">Mensaje</label>
                            <input type="text" name="mensaje" value={formData.mensaje} onChange={handleChange} />
                        </p>
                        <p className="acciones"><input type="submit" value="Enviar" /></p>
                    </form>

                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}

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
            </div>
        </main> 
    );
}

export default ContactoPage;
