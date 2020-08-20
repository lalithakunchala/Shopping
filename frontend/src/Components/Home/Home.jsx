import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../Navbar/NavBar.jsx';
import styles from './Home.module.css'

export class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                
                <div className={styles.height_img}>
                    <div style={{paddingTop:"200px",paddingRight:"800px"}}>
                    <h2 className="font-italic text-light justify-content-bottom">Latest Designs<br/>Trendy</h2>
                    </div>
                </div>  
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
