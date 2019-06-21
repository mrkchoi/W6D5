import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

class Widget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui container main__container">
        <h1>Widgets!</h1>
        <Clock />
        <Tabs/>
      </div >
    );
  }
}

export default Widget;