import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBarAfterLogin from '../NavBarAfterLogin/NavBarAfterLogin';
import {logout} from '../../redux/userauth/action'
import { UserCard } from '../UserCard/UserCard';
import {Redirect} from 'react-router-dom'


export class UserDashboard extends Component {

    constructor(props){
        super(props)
    }
    

    render() {
        if(this.props.logSuccess==""){
            return <Redirect to="/" />
        }
        console.log(this.props.items)
        const {items} =this.props
        return (
            <div>
                <NavBarAfterLogin />
                <div className="container">
                <div class="row p-5">
                    
                        {items && items.map(item =>(
                            <UserCard image = {item.image} price={item.price} category={item.category}/>
                        ))}
                
                    </div>
                    </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    
        items : state.item.items,
        logSuccess : state.userauth.logSuccess
})

const mapDispatchToProps = dispatch => {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard)
