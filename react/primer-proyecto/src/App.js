// import React, {Fragment} from "react";
import "./styles/style.scss"
import Curso from './Curso'
import Banner from './Banner'
import { Switch } from "react-router"
import Formulario from "./Formulario"
import { BrowserRouter as Router, Route } from "react-router-dom"

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

const App = () => (
  <Router>

    <Switch>
      <Route path="/" exact component={Banner} />
      <Router path="/cursos" exact component={Curso} />
      <Router path="/formulario" exact component={Formulario} />
      <Route component={
() => (
  <div className="ed-grid">
<h1>Error 404</h1>
<span>Web Page not found!!</span>
  </div>
)
      } />
    </Switch>

    </Router>

    )





    export default App;
