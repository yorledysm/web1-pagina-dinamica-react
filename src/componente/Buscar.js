import React, { useState } from 'react';
import {listaRestaurante} from '../data/Restaurantes';



const Buscar = () => {
    const [valoresFormulario, setValoresFormulario] = useState({});
    const { nombre = '' } = valoresFormulario;
    const [resultado, setResultado] = useState([]);
    const [filfirebase,setfilfirebase]= useState([]);

   const valueBusqueda=[ 
    { nombre}


   ]


    const handleOnChange = (e) => {
       
        console.log(e.target.name, e.target.value);
      
        if (e.target.name === 'nombre') {
            setValoresFormulario({ ...valoresFormulario, nombre: e.target.value });
        } else if (e.target.name === '') {
            console.log('Busqueda no encontrada');
        }
        console.log(valoresFormulario);
    }

    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('Mostrando resultado');
        const filtro =  listaRestaurante
            .filter(hshshs => hshshs.nombre.toUpperCase().includes(nombre.toUpperCase()));
        console.log(resultado);
        setResultado(filtro);

    }
    
    return (
        <div className="container-fluid mt-3">
            <div className='row'>
                <div className='col'>
                    <form onSubmit={(e) => handleOnSubmit(e)}>
                        <div className="mb-3">
                            <label className="form-label">Nombre del Restaurante</label>
                            <input required type="text" name="nombre" value={nombre}
                                className="form-control" onChange={(e) => { handleOnChange(e) }} />
                        </div>
                        
                        <button type="submit" className="btn btn-info">Buscar</button>
                    </form>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {
                            resultado.map(asasas => {
                                return (
                                    <div className="col" key={asasas.id}>
                                        <div className="card">
                                            <img src={asasas.imagen} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{asasas.nombre}</h5>
                                                <p className="card-text">{asasas.descripcion}</p>
                                                <p className="card-text">{asasas.direccion}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    Buscar
}