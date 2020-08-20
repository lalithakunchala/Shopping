import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './UserSignUp.module.css'
import NavBar from '../Navbar/NavBar.jsx';
import Footer from '../Footer/Footer.jsx';

export class UserSignUp extends Component {

    constructor(props){
        super(props)
        this.state = {
            password:false,
            email:"",
            enter:false
        }
    }
    
    handleChange = (e)=>{
        this.setState({
            email:e.target.value
        })
    }

    handlePassword = ()=>{
        if(this.state.email!==""){
            this.setState({
                password:true
            })
            this.props.fetchRecovery(this.state.email)
        }
        else{
            this.setState({
                enter:true
            })
        }
        
    }
    render() {
        return (
            <div>
                <div className={styles.bgWhite}>
                <NavBar />
                </div>
                <div>
                    <div className={styles.cardPadding}>
                    {!this.state.password?
                        <div className={styles.cardBody}>
                        <div class="card-header" style={{background:"#CA005D"}}>
                        <h3 className={styles.forgot}>Host SignUp</h3>
                        </div>
                        <div class="card text-center" >
                        <div class="card-body">
                            <p class="card-text text-center">Enter Details</p>
                            <input type="text" placeholder="name" onChange={this.handleChange} className=" p-2 w-100"></input><br/>
                            <input type="text" placeholder="email" onChange={this.handleChange} className=" p-2 w-100"></input><br/>
                            <input type="text" placeholder="password" onChange={this.handleChange} className=" p-2 w-100"></input><br/>
                            <button className={styles.btnCss} onClick={this.handlePassword}>Reset Password</button>
                        </div>
                        {this.state.enter?<div style={{color:'red'}}>Enter all details</div>:""}
                        </div>
                        </div>
                        :
                        <div style={{padding:"170px"}}>
                        <h5 className=" p-3 bg-light text-success" >{}</h5>
                        </div>
                    }                   
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUp)
