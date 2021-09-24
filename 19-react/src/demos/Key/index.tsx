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
				{/* 核心：为子组件添加 key，当 key 变化时会创建一个新的组件替代原有组件 */}
        <EmailInput defaultEmail={this.state.email} key={this.state.id} />
        <button onClick={this.handleChange.bind(this)}>CHANGE USER</button>
      </div>
    );
  }
}
