import axios from "axios"
import React from "react"
import ReactPlayer from "react-player"
import { CardUsuario, CardMusicas, ContainerMusic, DysplayList } from "./viewPlayliststyle"



export class ViewPlaylist extends React.Component {
    state = {
        list: [],
        id: "",
        listTrack: [],
        name: "",
        artist: "",
        link: "",
        showDetails: false,
        idAtual: ""
    }


    componentDidMount() {
        this.seePlaylist()
    }

    componentDidUpdate = () => {
        this.seePlaylist()
    }


    //==================================== seePlaylist ====================================//  
    seePlaylist = async () => {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        const headers = {
            headers: {
                Authorization: "Max-Ranholi-Hooks"
            }
        }
        try {
            const response = await axios.get(url, headers)
            this.setState({ list: response.data.result.list })
            this.setState({ url: response.data.result })
        } catch (error) {
            alert("Algo deu errado")
        }
    }
    //==================================== deletePlaylist ================================//    
    deletePlaylist = async (id) => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        const headers = {
            headers: {
                Authorization: "Max-Ranholi-Hooks"
            }
        }

        try {
            await axios.delete(url, headers)
            alert("Playlist deletada com sucesso!")
            this.seePlaylist()
        } catch (error) {
            alert("deletado")
        }
    }
    //==================================== getMusic =====================================// 
    getMusic = async (id) => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        const headers = {
            headers: {
                Authorization: "Max-Ranholi-Hooks"
            }
        }
        try {
            const response = await axios.get(url, headers)
            this.setState({ listTrack: response.data.result.tracks })
        } catch (error) {
            console.log("detalhes")
        }

    }
    //==================================== addTrack =====================================// 
    addTrack = async (id) => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        const headers = {
            headers: {
                Authorization: "Max-Ranholi-Hooks"
            }
        }

        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.link
        }
        try {
            const response = await axios.post(url, body, headers)
            alert("Criado com sucesso")
            this.getMusic(id)
            this.setState({ name: "", artist: "", link: "" })
        } catch (error) {
            console.log("erro")
        }
    }
    //==================================== seeDetails ====================================//  
    seeDetais = (id) => {
        this.getMusic(id)
        this.setState({ showDetails: true, idAtual: id })

    }

    //==================================== onChange =====================================// 

    onChangeName = (event) => {
        this.setState({ name: event.target.value })
    }

    onChangeArtist = (event) => {
        this.setState({ artist: event.target.value })
    }

    onChangeLink = (event) => {
        this.setState({ link: event.target.value })
    }

    //==================================== renderList =====================================// 
    render() {
        const showList = this.state.list.map((playlist) => {
            return (

                <CardUsuario key={playlist.id}>
                    {playlist.name}
                    <button onClick={() => this.seeDetais(playlist.id)}>Ver playlist</button>
                    <button onClick={() => this.deletePlaylist(playlist.id)} >deletar</button>                 
                </CardUsuario>

            )
        })
        //==================================== renderTrack =====================================//        
        const showTracks = this.state.listTrack.map((tracks) => {
            return (
                <CardMusicas key={tracks.id}>
                    Música: {tracks.name}
                    Artista: {tracks.artist}                 
                                <ReactPlayer
                                    url=  {tracks.url}
                                    width="300px"
                                    height="50px"
                                    playing={false}
                                    controls={true}
                                />
                </CardMusicas>
            )
        })
        return (
            <ContainerMusic>
                <h3>playlist:</h3>
                {showList}

                <DysplayList>{this.state.showDetails ?
                    <>{showTracks}
                        <CardMusicas>
                            <h4>Adicionar Música</h4>
                            <input onChange={this.onChangeName} value={this.state.name} placeholder="nome" />
                            <input onChange={this.onChangeArtist} value={this.state.artist} placeholder="artista" />
                            <input onChange={this.onChangeLink} value={this.state.link} placeholder="link" />
                            <button onClick={() => this.addTrack(this.state.idAtual)} >adicionar</button>                            
                        </CardMusicas></>
                    : <></>}</DysplayList>

            </ContainerMusic>
        )

    }

}