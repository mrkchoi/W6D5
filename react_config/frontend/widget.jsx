import React from 'react';
import Clock from './clock';

class Widget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui container main__container">
        <h1>Widgets!</h1>
        <Clock />
      </div >
    );
  }
}

export default Widget;