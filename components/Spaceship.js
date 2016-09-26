import React from 'react';
// import ReactDOM from 'react-dom';

// const colors = [];

class Spaceship extends React.Component {
  getDefaultProps() {
    return {
      hasRockets: false,
      colors: ['black','red']
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>{this.props.speed}</h3>
        <h3>{this.props.hasRockets}</h3>
        <h3>{this.props.colors.join(', ')}</h3>
      </div>
      )
  }
};

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
};

// ReactDOM.render(<Spaceship />, document.getElementById('main'));


module.exports = Spaceship;