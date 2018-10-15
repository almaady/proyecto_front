import React, {Component} from 'react'
// import axios from 'axios'
// import toastr from 'toastr'
import HomeDisplay from './HomeDisplay'


// const url = 'https://recordis.herokuapp.com/login'

class Home extends Component{

    // componentWillMount() {
    //     if(localStorage.getItem('token')) return this.props.history.push('/login')
    // }

    state={
    }



render() {
    return(
     <div>
         <HomeDisplay/>

     </div>
    )
}
}


export default Home