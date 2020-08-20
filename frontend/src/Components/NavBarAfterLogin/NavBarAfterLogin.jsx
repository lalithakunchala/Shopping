import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavDropdown, Button, NavbarBrand, } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export class NavBarAfterLogin extends Component {
    
    render() {
        var {loggedUser} = this.props;
        return (
            <div style={{background:"lightgrey"}}>
            <Navbar collapseOnSelect expand="lg" >
                <Navbar.Brand>
                <div className="himage">
                  <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_9TikrtlcKfqEuofEfewX03tILU1O_JMfOA&usqp=CAU"/></Link>
                </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto align-middle">
                    <NavDropdown title={loggedUser} className="sec" id="collasible-nav-dropdown">
                    </NavDropdown>
                    <Link to="/"><NavDropdown title="logout" className="sec" id="collasible-nav-dropdown"></NavDropdown></Link>
                    
                    <button type="button" className="btn btn-outline-light font-weight-bold"  style={{fontSize:".70em",}}>About Us</button>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedUser : state.auth.loggedUser
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarAfterLogin)
