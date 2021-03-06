import React from "react";

interface EmailInputProps {
  defaultEmail: string;
}
interface EmailInputState {
  email: string;
}
class EmailInput extends React.Component<EmailInputProps, EmailInputState> {
  state = { email: this.props.defaultEmail };

  handleChange = (event: any) => {
    this.setState({ email: event.target.value });
  };

  render() {
    return <input onChange={this.handleChange} value={this.state.email} />;
  }
}

export default EmailInput;
