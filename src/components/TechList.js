import React, { Component } from 'react';


class TechList extends Component {

  state = {
    newTech: '',
    techs: [
      'Node.Js',
      'React.JS',
      'React Native',
    ],
  };

  handleInputChange = (event) => {
    this.setState({ newTech: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech: '',
    });
  };

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul> 
          {this.state.techs.map(tech => (
            <li key={tech}>
              {tech}
              <button onClick={() => this.handleDelete(tech)} type='button'>Remover</button>
            </li>
          ))}
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTech}
        />
        <button type='submit'>Enviar</button>
      </form>

    );
  }
}

/*
function TechList(){
  return (
    <ul>
      <li>Node.JS</li>
      <li>ReactJS</li>
      <li>React Native</li>
    </ul>
  );
}
*/
export default TechList;