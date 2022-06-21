import React from "react"
import { CreatePlaylistStyle, Container } from "./CreatePlaylistStyle"
import axios from "axios"
import { ViewPlaylist } from "../viewPlayllist/ViewPlaylist"




export class CreatePlaylist extends React.Component {
    state = {
        playlist: ""
    }

  
 //================== createPlaylist ==========================//

    createPlaylist = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        const body = {
            name: this.state.playlist
        }

        const headers = {
            headers: {
                Authorization: "Max-Ranholi-Hooks"
            }
        }

        try {
            const response = await axios.post(url, body, headers)                               
            alert("Playlist criada com sucesso!") 
            this.props.parentCallback()
            this.setState({ playlist: "" }) 
                            
        } catch (error) {
            alert(error.response.data.message)
            this.setState({ playlist: "" })
        }
    }

    //================== onChange ==========================//

    onChangePlaylist = (event) => {
        this.setState({ playlist: event.target.value })
    };

    //==================== Render ===========================//   

    render() {
        return (
            <Container>
                <CreatePlaylistStyle>
                    <h1>Criar playlist</h1>
                    <input
                        placeholder="Digite o nome da playlist:"
                       value={this.state.value}
                       onChange={this.onChangePlaylist}
                    />
                    <button onClick={this.createPlaylist} >Enviar</button>
                </CreatePlaylistStyle>
                <ViewPlaylist />
            </Container>
        )
    }
}