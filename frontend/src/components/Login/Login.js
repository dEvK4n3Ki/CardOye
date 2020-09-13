import React from 'react';
import './Login.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {authenticationService} from '../../services';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loading: false,
            btnLabel: "Login"
        }
        if (authenticationService.currentUserValue) {
            this.props.history.push('/');
        }
    }

    login = () => {
        let { username, password } = this.state;
        if (!username || !password) {
            alert("Both fields are mandatory");
        }
        else {
            this.setState({ btnLabel: "Logging in  ", loading: true });
            authenticationService.login(username, password)
                .then(
                    user => {
                        const { from } = this.props.location.state || { from: { pathname: "/" } };
                        this.props.history.push(from);
                    },
                    error => {
                        console.log(error);
                        // this.setState({ btn: "Login", loading: false });
                    }
                );
        }
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    render() {
        return (
            <Container className="login-container">
                <Row>
                    <Col>
                        <fieldset className="login-card">
                            <legend>
                                Enter Login Details
                            </legend>
                            <Row>
                                <Col>
                                    <Form.Group as={Row} controlId="username">
                                        <Col md={6} sm={12}>
                                            <Form.Label>Username :</Form.Label>
                                        </Col>
                                        <Col md={6} sm={12}>
                                            <Form.Control placeholder="Enter username" onChange={this.handleChange('username')} />
                                        </Col>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group as={Row} controlId="password">
                                        <Col md={6} sm={12}>
                                            <Form.Label>Password :</Form.Label>
                                        </Col>
                                        <Col md={6} sm={12}>
                                            <Form.Control placeholder="Enter password" type="password" onChange={this.handleChange('password')} />
                                        </Col>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row style={{ margin: "1rem" }}>
                                <Col>
                                    <Button className="styled-button" size="lg" onClick={this.login} >
                                        <span>
                                            {this.state.btnLabel}
                                            {this.state.loading && <i className="spinner-border spinner-border-sm" role="status"
                                            style={{verticalAlign: "middle"}}></i>}
                                        </span>
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link to="/register">Not a member? Register here</Link>
                                </Col>
                            </Row>
                        </fieldset>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login;