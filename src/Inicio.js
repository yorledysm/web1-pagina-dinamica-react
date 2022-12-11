import React, { useState } from 'react';
import {listarRestaurante} from './restauranteService';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
//import { listaRestaurante } from './Restaurantes';


export const Inicio = () => {
  const [restaurantes, setRestaurantes] = useState([]);

  // se ejecuta una unica vez al cargar el componente
  useEffect(() => {
      getRestaurantes();
  }, []); // observador -> patron observer

  const getRestaurantes = async () => {
      try {
          Swal.fire({ allowOutsideClick: false, text: 'Cargando...' });
          Swal.showLoading();
          const restaurantesFirebase = await listarRestaurante();
          setRestaurantes(restaurantesFirebase);
          Swal.close();
      } catch (error) {
          Swal.close();
          console.log(error);
      }
  }

      return (
        <div className="container-fluid mt-3 mb-3">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {restaurantes.map((restaurante) => {
              return (
                <div className="col" key={restaurante.id}>
                  <div className="card">
                    <img
                      src={restaurante.imagen}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{restaurante.nombre}</h5>
                      <p className="card-text">{restaurante.direccion}</p>
                      <p className="card-text">{restaurante.descripcion}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );

   

}
