import React, { } from 'react'
import { } from "react-bootstrap";

class Profile extends React.Component {
  constructor() {
    console.log("Contructor ()");
    super();
    this.state = {
      Name: "Omar Laater",
      bio: "GoMyCode",
      profession: "jobless",
      timer: 0
    };


  }
  componentDidMount() {
    console.log("Component Did Mount ()");
    console.log(this.state.intervall);
    this.setState({
      intervall: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      ),
    });
  }


  render() {
    return (
      <div>
        <div style={{ color: 'white', }}>
          <h1> Hellow! </h1>
          <p>my name is :{this.state.Name}</p>
          <p>bio :{this.state.bio}</p>
          <p>profession :{this.state.profession}</p>
          <p>{this.state.timer}</p>
        </div>
      </div>
    )
  }
}
export default Profile; 
