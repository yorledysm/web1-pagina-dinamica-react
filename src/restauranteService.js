
import { collection, doc, setDoc, getDocs} from 'firebase/firestore/lite';
import { FirebaseFirestore } from './firebase';

const crearRestaurante = async (restaurante) => {  // va enviar el objeto de restaurante
    const nuevoDoc = doc(collection(FirebaseFirestore, '/restaur'));
    await setDoc(nuevoDoc, restaurante); // llamado asincrono a firebase para guardar
    console.log('restaurante creado');
}

const listarRestaurante = async () => {
    console.log('aqui');
    const restsRef = collection(FirebaseFirestore, '/restaur');
    // arreglo de documentos de la collecion de productos
    const docs = await getDocs(restsRef); // llamado a la base de datos firestore
    const restaurantes = [];
    docs.forEach(document => {
        console.log(document.id, document.data());
        restaurantes.push({ id: document.id, 
            nombre: document.data().nombre,
            direccion: document.data().direccion,
            descripcion: document.data().descripcion,
            imagen: document.data().imagen,
        });
    });
    console.log(restaurantes);
    return restaurantes;
}

export {
    crearRestaurante,
    listarRestaurante,
}
