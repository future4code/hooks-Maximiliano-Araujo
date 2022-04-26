import './App.css';
import send from '../src/send.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body className="caixadeDeMensagem">
        <div className="container">
          <div className="buttons">
            <imput className="buttonUser">User</imput>
            <imput className="buttonMessage">Message</imput>
            <button className="buttonSend"><img src={send}></img></button>
          </div>
        </div>
      </body>
    </div>

  );
}

export default App;
