import React, { Component } from 'react';
import Form from 'components/Form';

class App extends Component {
  state = {
    contacts: [],
  };
  _;
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}

export default App;
