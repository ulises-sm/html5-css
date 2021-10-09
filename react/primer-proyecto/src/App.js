// import React, {Fragment} from "react";
import "./styles/style.scss"
import Curso from './curso'
import Banner from './Banner';
const App = () => 
<>

<Banner/>
<div>Hola Mundo</div>
<div className="ed-grid m-grid-3" >

<Curso
nombre = "Curso Desarrollo Web Desde Cero"
curso = "Programacion"
persona = "Benito Samuel"
precio = "$ 1500 MXN"
/>

<Curso
nombre = "Curso Desarrollo Java Desde Cero"
curso = "Programacion"
persona = "Ulises"
precio = "$ 1000 MXN"
/>
</div>


</>

export default App;
