import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`





class App extends React.Component {



=======

=======

  state = {
    post: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "Márcio",
        fotoUsuario: "https://picsum.photos/49/49",
        fotoPost: "https://picsum.photos/200/149",
      },
      {

        nomeUsuario: "",
        fotoUsuario: "",
        fotoPost: "",
      }
    ]
  };

  render() {

    const listaPost = this.state.post.map((pessoa) => {
      
      return (
        <MainContainer>
          <Post>
            {pessoa.nomeUsuario} {pessoa.fotoUsuario} {pessoa.fotoPost}
          </Post>
        </MainContainer>
      )
    })

    // return (
    //   <MainContainer>
    //     <Post
    //       nomeUsuario={'Paulinha'}
    //       fotoUsuario={'https://picsum.photos/50/50'}
    //       fotoPost={'https://picsum.photos/200/150'}
    //     />
    //     <Post
    //       nomeUsuario={'Márcio'}
    //       fotoUsuario={'https://picsum.photos/49/49'}
    //       fotoPost={'https://picsum.photos/200/149'}
    //     />
    //     <Post
    //       nomeUsuario={'Mariana'}
    //       fotoUsuario={'https://picsum.photos/60/60'}
    //       fotoPost={'https://picsum.photos/200/160'} />
    //   </MainContainer>
    // );


  

        nomeUsuario: "Mariana",
        fotoUsuario: "https://picsum.photos/60/60",
        fotoPost: "https://picsum.photos/200/160",
      }
    ],

  }

  render() {
    const listaDeComponentes = this.state.pessoas.map((post) => {
      return (
        <p>
          {post.nomeUsuario} - {post.fotoUsuario} - {post.fotoPost}
        </p>
      )
    })
    return (
      {listaDeComponentes}
    )

  }
}




export default App;
