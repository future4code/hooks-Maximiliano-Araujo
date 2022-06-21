import React from "react"
import { NavBarStyled } from "./NavBarStyled"
import { Link } from "react-router-dom"


export class NavBar extends React.Component {
    render() {
        return (
            <NavBarStyled>
                <Link to="/Home">Labefy</Link> 
                <Link to="/CreatePlaylist">Criar Playlist</Link>
                {/* <Link to="/ViewPlaylist">Ver Playlist</Link>
                <Link to="/detailsPlaylist">Detalhes da Playlist</Link> */}
            </NavBarStyled>

        )
    }
}


















