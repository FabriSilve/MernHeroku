import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  loginRequest,
  updateAuthField,
} from '../../redux/auth/actions';
import {
  StyledPage,
  StyledInput,
  StyledModal,
  StyledButton,
} from '../styled';
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(field) {
    const { updateAuthField } = this.props;
    return (e) => {
      e.preventDefault();
      updateAuthField(field, e.target.value);
    }
  }

  onClick(e) {
    e.preventDefault();
    const { loginRequest } = this.props;
    const { username } = this.props;
    loginRequest({ username, bot: 'Richard'});
  }

  render() {
    const {
      username,
      password,
    } = this.props;
    return (
      <StyledPage background>
        <StyledModal>
          <StyledInput value={username} type="text" placeholder="Username" required onChange={this.onChange('username')}/>
          <StyledInput value={password} type="password" placeholder="Password" required onChange={this.onChange('password')}/>
          <StyledButton onClick={this.onClick}>Log in</StyledButton>
          <Link to="/pippo">Pippo</Link>
        </StyledModal>
      </StyledPage>
    );
  }
}

const mapStateToProps = ({ username, password }) => ({
  username,
  password,
});

const mapDispatchToProps = {
  loginRequest,
  updateAuthField,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
