import React, { Fragment } from "react";
import "./styles/style.scss"
import Curso from './Curso'
import Banner from './Banner'
import { Switch } from "react-router"
import Formulario from "./Formulario"
import { BrowserRouter as Router, Route } from "react-router-dom"

const App = () => (

  <Router>
    <Switch>
    <Route path="/" exact component={Banner} />
    <Route path="/cursos" exact component={Curso} />
    <Route path="/formulario" exact component={Formulario} />
    <Route component={() => (
      <div className="ed-grid">
        <h1>Error 404</h1>
        <span>Web Page not found!!</span>
      </div>
    )}/>
    </Switch>
  </Router>
  

)

export default App;
