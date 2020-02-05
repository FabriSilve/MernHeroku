import React, { Component } from 'react';
import { connect } from "react-redux";
import { loginRequest } from '../../redux/auth/actions';
import { Link } from "react-router-dom";


class Test extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { loginRequest } = this.props;
    loginRequest({ username: 'Pippo', bot: 'Richard'});
  }

  render() {
    const { params } = this.props;
    return (
      <div className="Test">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pippo">Pippo</Link></li>
          </ul>
        </nav>
        <header className="Test-header">
          <p>
            Edit <code>src/Test.js</code> and save to reload.
          </p>
          <button onClick={this.handleClick}>
            ciao {params}
          </button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({ params: state.params });

const mapDispatchToProps = {
  loginRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
