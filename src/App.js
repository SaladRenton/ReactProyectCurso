import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Snackbar, Button } from '@mui/material';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'tomi',
      name2: 'jose',
      showAlert: false,
    };
  }

  render() {
    const handleOnClick = () => {
      const prevName = this.state.name;

      this.setState({ showAlert: true });

      setTimeout(() => {
        this.setState({
          name: this.state.name2,
          name2: prevName,
        });
      }, 1000);

      };


      

    const handleClose = () => {
      this.setState({ showAlert: false });
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="name">Hola, {this.state.name}</p>

          <Button variant="contained" onClick={handleOnClick}>
            Change Name
          </Button>

          <Snackbar
            open={this.state.showAlert}
            autoHideDuration={2000}
            onClose={handleClose}
            message="Cambiando nombre..."
          />
        </header>
      </div>
    );
  }
}

export default App;
