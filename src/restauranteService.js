//import { async } from '@firebase/util';
//import { async } from '@firebase/util';
import {collection, doc, setDoc, getDoc, Firestore} from 'firebase/firestore/lite';
import {FirebaseFirestore} from './firebase';
const crearRestaurante= async (restaurante)=>{
  const nuevoD=doc(collection(FirebaseFirestore, '/restaur'));
 await setDoc(nuevoD, restaurante); // llamando asicrono
}
const listarRestaurante= async()=>{
    console.log('Listar restauarante');
 const restauranteRef=doc(collection(FirebaseFirestore, '/restaur'));
 const docs= await getDoc(restauranteRef);
 const restaurante =[];
 docs.forEach((document) => {
    
        console.log(document.nombre, document.data());
        restaurante.push({ nombre: document.nombre, 
            descripcion: document.data().descripcion,
            direccion: document.data().direccion,
            imagen: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        });
   

    return restaurante;
 })
}
export{
 crearRestaurante,
 listarRestaurante,
}