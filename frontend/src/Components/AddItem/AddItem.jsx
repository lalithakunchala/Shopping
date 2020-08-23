import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './AddItem.module.css'
import {addItem} from '../../redux/item/action'
import {Redirect} from "react-router-dom"
import { NavBarAfterLogin } from '../NavBarAfterLogin/NavBarAfterLogin'

export class AddItem extends Component {

    constructor(props){
        super(props)
        this.state = {
            category:"",
            image:"",
            price:0,
            rating:0,
            enter :false
        }
    }
    
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleClick = ()=>{
        if(this.state.category!==""&& this.state.price!==""&&this.state.image!==""&&this.state.rating!==""){
            console.log(this.props.token)
            this.props.addItem(this.state,this.props.token)
        }
        else{
            this.setState({
                enter:true
            })
        }
        
    }

    render() {
        if(this.props.logSuccess==""){
            return <Redirect to="/" />
        }
        return (
            <div>
                <NavBarAfterLogin />
                 <div className={styles.cardPadding}>
                        <div className={styles.cardBody}>
                        <div class="card-header" style={{background:"#CA005D"}}>
                        <h3 className={styles.forgot}>Add Item</h3>
                        </div>
                        <div class="card text-center" >
                        <div class="card-body">
                            <p class="card-text text-center">Enter Details</p>
                            <input type="text" placeholder="category" name="category" onChange={this.handleChange} className=" p-2 w-100"></input><br/>
                            <input type="text" placeholder="image" name="image" onChange={this.handleChange} className=" p-2 w-100"></input><br/>
                            <input type="number" placeholder="rating" name="rating" onChange={this.handleChange} className=" p-2 w-100"></input><br/>
                            <input type="number" placeholder="price" name="price" onChange={this.handleChange} className=" p-2 w-100"></input><br/>
                            <button className={styles.btnCss} onClick={this.handleClick}>Add</button>
                        </div>
                        {this.state.enter?<div style={{color:'red'}}>Enter all details</div>:""}
                        </div>
                        </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token : state.adminauth.token,
    logSuccess : state.adminauth.logSuccess
})

const mapDispatchToProps = dispatch=>{
    return {
        addItem: (n,t) => dispatch(addItem(n,t))
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
