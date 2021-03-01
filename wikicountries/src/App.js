import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  state = {
    apiCountries: []
  }

  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`)
    .then (response => {
       console.log(response.data)
      let apiCountries = response.data;
      this.setState({
        apiCountries
      })
    })
    }


  render(){

    return (
<>

<ol>
  {this.state.apiCountries.map(each=>{
    return(

    <li> {each.name}</li>
    )
  })}
</ol>
</>
    );
  }
}

export default App;
