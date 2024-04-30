import React from 'react';
import '../../styles/components/pages/NovedadesPage.css'

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="novedades">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            {imagen && <img src={imagen} alt="Imagen de novedad"/>} 
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}

export default NovedadItem;