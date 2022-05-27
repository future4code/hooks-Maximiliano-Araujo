import axios from "axios"
import React from "react"
import styled from "styled-components"

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display:flex;
    justify-content: space-between;
    `

export class DetailsPlaylist extends React.Component {
    state = {
        list: []
    }

    componentDidMount(){
        this.playlistDetail()
    }

    playlistDetail = async (id) => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`

        const headers = {
            headers: {
                Authorization: "Max-Ranholi-Hooks"
            }
        }

        try {
            const response = await axios.get(url, headers)
            this.setState({list: response.data.result.list})
            console.log(this.state.list)
        } catch (error) {
            console.log("erro")
        }
    }
    render () {
        const ShowPlaylistDetail = this.state.list.map((playlistDetail) => {
            return(
            <CardUsuario key={playlistDetail.id}>
                {playlistDetail.name}
                <button onClick={() => this.playlistDetail(playlistDetail.id)} >Mostrar</button>
            </CardUsuario>
            )
        })
        return (
            <div>
                
                <h1>DetailsPlaylist</h1>
                {ShowPlaylistDetail}
                
            </div>
        )
    }
}