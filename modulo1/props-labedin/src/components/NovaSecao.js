import React from "react";
import "./NovaSecao.css"

function NovaSecao (props){
    return (
        <div className="NovaSecao">
            <img src={props.imagem}/>
            <div>
                <h3>{props.nome}</h3>
                <p>{props.descricao1}</p>
                <ul>
                    <li>{props.lista1}</li>
                    <li>{props.lista2}</li>
                    <li>{props.lista3}</li>
                </ul>
                <p>{props.descricao2}</p>
            </div>
        </div>
    )
}


export default NovaSecao