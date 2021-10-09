import React from "react";
// const persona = {"nombre": "Ulises"}
// const curso = {"precio": "$ 1,000 MXN"}

const Curso = props => (
    <>
<article class="card">
  <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src="https://www.uaemex.mx/images/logos/img_logo_uaem18-21.png" alt=""/>
  </div>
  <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 class="t5 s-mb-2 s-center">
      Programación orientada a objetos con Go
    </h3>
    <div class="s-mb-2 s-main-center card-teachers">
      <div class="card__teacher s-cross-center">
        <div class="card__avatar s-mr-1">
          <div class="circle img-container">
            <img src="https://www.uaemex.mx/images/logos/img_logo_uaem18-21.png" alt=""/>
          </div>
        </div>
        <span class="small">Alexys Lozada</span>
      </div>
      <div class="card__teacher s-cross-center">
        <div class="card__avatar s-mr-1">
          <div class="circle img-container">
            {/* <img src="https://www.uaemex.mx/images/logos/img_logo_uaem18-21.png" alt=""/> */}
          </div>
        </div>
        <span class="small">Alexys Lozada</span>
      </div>
      <div class="card__teacher s-cross-center">
        <div class="card__avatar s-mr-1">
          <div class="circle img-container">
            {/* <img width="10px" src="https://www.uaemex.mx/images/logos/img_logo_uaem18-21.png" alt=""/> */}
          </div>
        </div>
        <span class="small">{props.nombre}</span>
      </div>
    </div>
    <div class="s-main-center">
      <a class="button--ghost-alert button--tiny" href="https://www.google.com">{props.precio}</a>
    </div>
  </div>
</article>
</>

)

export default Curso;