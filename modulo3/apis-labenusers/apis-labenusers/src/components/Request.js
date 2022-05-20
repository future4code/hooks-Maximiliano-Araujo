import React from "react"
import axios from "axios"


const urlUser = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
    headers: {
        Authorization: "Max-Ranholi-Hooks"
    }
}



class Request extends React.Component {
    state = {
        user: [],
        nameInput: "",
        emailInput: ""
    }

    componentDidMount = () => {
        this.getUser();
    };




    getUser = () => {
        axios
            .get(urlUser, headers)
            .then((anwers) => {
                this.setState({ user: anwers.data })
            }).catch((error) => {
                console.log(error.message)
            })
    }





    catchUser = () => {
        const body = {
            name: this.state.nameInput,
            email: this.state.emailInput
        }
        axios
            .post(urlUser, body, headers)
            .then((anwser) => {
                
                console.log(this.state.user)
                alert("deu certo")
                this.setState({nameInput: "" , emailInput: ""})
                this.getUser()
            }).catch((error) => {
                console.log(error.message)
            })
    }

    //======================== onChange ============================//
    onChangeName = (event) => {
        this.setState({ nameInput: event.target.value })
    }

    onChangeEmail = (event) => {
        this.setState({ emailInput: event.target.value })
    }

    //======================== render ============================//

    render() {


        //======================== return ============================//
        return (
            <div>
                <h1>Labefy</h1>
                <input placeholder="Digite o seu nome" value={this.state.nameInput} onChange={this.onChangeName} />
                <input placeholder="Digite o seu e-mail" value={this.state.emailInput} onChange={this.onChangeEmail} />
                <button onClick={this.catchUser}>Enviar</button>
                <>{this.state.user.map(user => {
                    return <p key={user.id}>{user.name}</p>
                })}</>
            </div>

        )
    }
}

export default Request