import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  //Listado de productos
  const [ productos, guardarProductos ] = useState([
    { id:1, nombre:'Camisa ReactJS', precio: 50 },
    { id:2, nombre:'Camisa NodeJS', precio: 40 },
    { id:3, nombre:'Camisa VueJS', precio: 30 },
    { id:4, nombre:'Camisa Angular', precio: 20 },
  ]);

  const [carrito, agregarProducto ] = useState([]);

  //Obtener fecha actual
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
      
      titulo='Tienda Virtual'

      />

      <h1>Listado de productos</h1>
      {productos.map(producto => (
      <Producto 
      key={producto.id}
      producto={producto}
      carrito={carrito}
      productos={productos}
      agregarProducto={agregarProducto}

      />
      ))}

      <Carrito 
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer 
      
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
