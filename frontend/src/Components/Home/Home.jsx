import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../Navbar/NavBar.jsx';

export class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
