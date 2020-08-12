import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './components/styles/Global.css'
import Insignia from './components/Insignia.jsx'
import InsigniaNueva from './Pages/InsigniaNueva.jsx'

const container = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
  <InsigniaNueva/>
  </React.StrictMode>,
  container
);


//Codigo jsx

// const jsx = <h1>Hola, estudiantes de la media</h1>

// const container = document.getElementById('root');

// ReactDOM.render(
//   jsx,
//   container
// )

//ALTERNATIVA REACT JS

// const elemento = React.createElement('h1', {}, 'Hola estudiantes de la media')
// const container = document.getElementById('root');

// ReactDOM.render(
//   elemento,
//   container
// )

// const elemento = React.createElement('a', {href: 'https://github.com/'}, 'GitHub' )
// const container = document.getElementById('root');

// ReactDOM.render(
//   elemento,
//   container
// )

//Variabale con expresión - se evalua y arroja un resultado JSX

// const name = 'Valentina'
// const jsx = <h1>Hola soy (name)</h1>
// const container = document.getElementById('root')

// ReactDOM.render(
//   jsx,
//   container
// )

//nombre
// const name = 'valentina'
// const elemento = React.createElement ('h1', {},  `Hola, soy ${name} `);
// const container = document.getElementById('root')

// ReactDOM.render(
//   elemento,
//   container
// )

//jsx - operaciones

// const jsx = <h1>hola, el resultado de la suma es : {2+2}</h1>
// const container = document.getElementById('root')

// ReactDOM.render(
//   jsx,
//   container
// )
//operacion
// const suma = () => 3+3
// const jsx = <h1>Hola, el resultado de la suma es: {suma()}</h1>
// const container = document.getElementById('root');

// ReactDOM.render(
//   jsx,
//   container
// )

 // Contenedor con contenido

//  const jsx = <div>
//    <h1>
//      Hola mundo
//    </h1>
//    <p>
//      Soy desarrolladora FrontEnd
//    </p>
//  </div>

//  const container = document.getElementById('root');

//  ReactDOM.render(
//    jsx,
//    container
//  )

 //

//  const elemento = React.createElement(
//    'div',
//    {},
//    React.createElement('h1', {}, 'Hola mundo'),
//    React.createElement('p', {}, 'Soy desarrolladora FrontEnd'),
//  )
//  const container = document.getElementById('root')

//  ReactDOM.render(
//    elemento,
//    container
//  )


