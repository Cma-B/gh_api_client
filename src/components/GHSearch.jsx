import React ,{ Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'


class GHSearch extends Component {
  state = {
    search: []
  }
}
  search = async (event) => {
    debugger
    event.preventDefault()
    let query = event.target.query.value

    let response = await axios.get('https://api.github.com/search/users?q=', {
      params: { query: query }
    })
  }
  return (
    <>
      <Input id="search" type="text" name="search" placeholder="Input GH username"/>
      <Button id="button" name="search">Search</Button>
    </>
  )


export default GHSearch
