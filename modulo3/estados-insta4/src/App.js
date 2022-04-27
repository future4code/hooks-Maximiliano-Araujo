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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Márcio'}
          fotoUsuario={'https://picsum.photos/49/49'}
          fotoPost={'https://picsum.photos/200/149'}
        />
        <Post
        nomeUsuario={'Mariana'}
        fotoUsuario={'https://picsum.photos/60/60'}
        fotoPost={'https://picsum.photos/200/160'}/>
      </MainContainer>
    );
  }
}




export default App;
