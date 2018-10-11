import React,{Component} from 'react'
import axios from 'axios'
import toastr from 'toastr'


class Profile extends Component{
    state={
        user:{}
    }


componentWillMount(){
    const user = JSON.parse(localStorage.getItem('user'))
    if(!user) return this.props.history.push('/login')
    this.setState({user})
}

getPrivateInfo = () =>{
    axios.get('http://localhost:3000/private',{
        headers:{
            "Authorization" : localStorage.getItem('token')
        }
    })
    .then(res=>{
        console.log(res)
    })
    .catch(e=>toastr.error('Algo salió mal', e.message))
}

render(){
    const {user} = this.state
    return(
        <div>
        <h1>{user.username}</h1>
        <p>{user.email}</p>
        <button onClick={this.getPrivateInfo}>Click</button>
        </div>
    )
}

}

export default Profile