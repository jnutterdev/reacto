import React, { Component } from 'react';

// Local state data will be used to store data from API
class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    repos: []
  }
}

componentDidMount() {
  const url = "https://api.github.com/users/jnutterdev/repos";
  fetch(url)
  .then(response => response.json())
  .then(json => this.setState({ repos: json }))
}
  
  render() {
    const { repos } = this.state;
    return (

      <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">Repos</h1>
        </div>
        {repos.map((repo) => (
        <div className="card" key={repo.id}>
          <div className="card-header">
            #{repo.title}
          </div>
          <div className="card-body">
            <p className="card-text">{repo.description}</p>
          </div>
        </div>
        )  
    )   
  }
   </div>
  )
}
}
export default App;