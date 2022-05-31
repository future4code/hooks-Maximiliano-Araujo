import React from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ReactPlayer from "react-player";
import { NavBar } from "./components/navBar/NavBar";
import { Home } from "./components/home/Home"
import { CreatePlaylist } from "./components/createPlaylist/CreatePlaylist"
import { ViewPlaylist } from "./components/viewPlayllist/ViewPlaylist";
import { DetailsPlaylist } from "./components/detailsPlaylist/DetailsPlaylist";



class App extends React.Component {
  state = {
    atualiza: false
  }

  handleCallback = () => {
    this.setState({atualiza: true})
  }
  render() {
    return (
      <div>
      <Router>
        <GlobalStyle />
        <NavBar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/ViewPlaylist" element={<ViewPlaylist />} />
          <Route path="/DetailsPlaylist" element={<DetailsPlaylist />} />         
        </Routes>
      </Router>
      <CreatePlaylist parentCallback = {this.handleCallback} />
      </div>
    )
  }
}

export default App;
