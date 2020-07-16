import React, { Component } from 'react'
import axios from 'axios'

Class SearchResult extends Component {
    state = {
        users: [],
    }


search = async (event) => {
    event.preventDefault()
    let query = event.target.query.value 
    let response = await axios.get('/users', {
        params: { query: query }
    })
    this.setState({
        users: response.data.items
    })

render () {
    let users;
    users = this.state.users.map((user) => {
     return (
         <>
         <label>User Name:</label>
         <p>{item.login}</p>

         <label>GitHub Repo:</label>
         <p>{item.html_url}</p>
</>
     )
    })
}
}
}