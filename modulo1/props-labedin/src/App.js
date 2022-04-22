import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno';
import NovaSecao from './components/NovaSecao';
import styled from 'styled-components'
import fotoPerfil from "../src/fotoPerfil.jpg"
import Labenu from "../src/labenu.jpg"
import nasa from "../src/nasa.png"
import arrow from "../src/arrow-down.png"
import linkedin from "../src/linkedin.png"
import house from "../src/home.png"
import instagram from "../src/instagram.png"
import brasa from "../src/chama.png"



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={fotoPerfil}
          nome="Maximiliano"
          descricao="Oi, eu sou Maximiliano, aluno da Labenu."
        />

        <ImagemButton
          imagem={arrow}
          texto="Ver mais"
        />

        <div className="page-section-container">
          <CardPequeno
            imagem={linkedin}
            nome="linkedin"
            descricao="https://br.linkedin.com/school/labenu"
          />

          <CardPequeno
            imagem={house}
            nome="Endereco:"
            descricao="Rua Labenu"
          />
        </div>

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={Labenu}
          nome="Labenu"
          descricao="Desenvolvedor Full Stack em formação"
        />

        <CardGrande
          imagem={nasa}
          nome="NASA"
          descricao="Fui responsável pelas crateras na lua. A Nação Adoradora
          de Satélites Artificias (NASA) concluiu, por meio de cálculos matemáticos,
          de que a forma esférica lisa da Lua não contribuia para a visualização
          da constelação Três Marias. Sendo asim, fui enviado para resolver 
          esse assunto."
        />
      </div>

      <div className="page-section-container">
        <h2>Skill super necessária</h2>
        <NovaSecao
          imagem={brasa}
          nome="Faculdade Carvão Queimado"
          descricao1="Formado na faculdade de Churrasco pela Faculdade 
          federal do Rio Grande do sul com nota máxima em:"
          lista1="Acender de carvão"
          lista2="Pão de alho"
          lista3="Carne no ponto certo"
          descricao2="Só chegar com a cerveja!"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
        imagem={instagram} 
        texto="Instagram"
        />
      </div>
    </div>
  );
}

export default App;
