// import React, {Fragment} from "react";
import "./styles/style.scss"
import Curso from './Curso'
import Banner from './Banner'
const App = () => 
<>

<Banner/>
<div>Hola Mundo</div>
<div className="ed-grid m-grid-3" >

<Curso
nombre = "Curso Desarrollo Web Desde Cero"
curso = "Programacion"
profesor = "Benito Samuel"
price = "$ 1500 MXN"
/>

<Curso
nombre = "Curso Desarrollo Java Desde Cero"
curso = "Programacion"
profesor = "Ulises"
price = "$ 1000 MXN"
/>
<Curso/>

</div>


</>

export default App;
