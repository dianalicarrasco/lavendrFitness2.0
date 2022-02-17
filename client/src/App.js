import React, { Component, useState } from 'react';
import CustomWorkout from './components/CustomWorkout';
import GenerateWorkout from './components/GenerateWorkout';
import { hot } from 'react-hot-loader/root';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showCustom: true,
      showGenerate: false,
    };
    this.onCustomClick = this.onCustomClick.bind(this);
    this.onGenerateClick = this.onGenerateClick.bind(this);
  }

  onCustomClick() {
    this.setState({

      showCustom: this.state.showCustom === true ? false : true
    })
  }

  onGenerateClick() {
    this.setState({
      showGenerate: this.state.showGenerate === true ? false : true,
    })
  }

  render() {
    return (
      // <div>
      //   <h1>Is it working</h1>
      // </div>
      <div>
        <nav className='navbar navbar-default'>
          <ul>
            <li><a href='http://localhost:8080'>HOME</a></li>
            <li><a href='http://localhost:8080'>ABOUT</a></li>
          </ul>
        </nav>
        <h1 className='welcome'><p>Welcome to <strong className="wow"> lavendrFitness</strong></p></h1>
        <div>
          <div className="options">
          <button className="btn btn-outline-primary custom-btn" onClick={this.onCustomClick}>CUSTOM</button>
          <button className="btn btn-outline-primary generate-btn" onClick={this.onGenerateClick}>GENERATE</button>
          </div>
          <div>
          {this.state.showCustom ?
            <CustomWorkout /> :
            null
          }
          {this.state.showGenerate ?
            <GenerateWorkout /> :
            null
          }
          {/* < CustomWorkout />
          <GenerateWorkout /> */}
          </div>
        </div>
      </div>
    );
  }

}

export default App


// import React from "react";
// import { hot } from 'react-hot-loader/root';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class App extends React.Component {
//   render() {
//     const { name } = this.props;
//     return (
//       <>
//         <h1>
//           Hello {name}
//         </h1>
//         <button type="button" class="btn btn-primary">
//           This is a bootstrap button
//         </button>
//       </>
//     );
//   }
// }

// export default hot(App);

