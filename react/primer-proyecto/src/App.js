// import React, {Fragment} from "react";
import "./styles/style.scss"
import Curso from './Curso'
import Banner from './Banner'
import Formulario from "./Formulario"

const cursos = [
  {
    "nombre": "Curso Desarrollo",
    "image": "https://www.uaemex.mx/images/logos/img_logo_uaem18-21.png",
    "price": "1200",
    "profesor": "Ulises",
    "location": "Online"
  },
  {
    "nombre": "Bases De datos",
    "image": "https://www.uaemex.mx/images/logos/img_logo_uaem18-21.png",
    "price": "1500",
    "profesor": "Fatima",
    "location": "Online"
  },
  {
    "nombre": "Curso Desarrollo",
    "image": "https://www.uaemex.mx/images/logos/img_logo_uaem18-21.png",
    "price": "1200",
    "profesor": "Ulises",
    "location": "Online"
  }
]

const App = () => 
<>

<Banner/>
<div>Hola Mundo</div>
<div className="ed-grid m-grid-3" >

{
  // cursos.map(c=><Curso nombre={c.nombre} price={c.price} profedor={c.profesor}/>)
}
<Formulario/>
</div>


</>

export default App;
