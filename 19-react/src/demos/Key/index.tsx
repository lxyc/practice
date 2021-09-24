import React from "react";
import EmailInput from "./EmailInput";

export default class Key extends React.Component {
  state = { email: "tom@gmail.com", id: 1 };
	
	handleChange() {
		this.setState({ email: "jack@gmail.com", id: 2 })
	}

  render() {
    return (
      <div>
        <EmailInput defaultEmail={this.state.email} key={this.state.id} />
        <button onClick={this.handleChange.bind(this)}>CHANGE USER</button>
      </div>
    );
  }
}
