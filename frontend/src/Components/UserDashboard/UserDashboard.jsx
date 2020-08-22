import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBarAfterLogin from '../NavBarAfterLogin/NavBarAfterLogin';
import {logout} from '../../redux/userauth/action'
import { UserCard } from '../UserCard/UserCard';
import {fetchItems} from '../../redux/item/action.js'

export class UserDashboard extends Component {

    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.fetchItems()
    }


    render() {
        console.log(this.props.items)
        const {items} =this.props
        return (
            <div>
                <NavBarAfterLogin />
                {items?
                items.map((item,index) =>(<div>
                <UserCard image={item.image} /> 
                </div>))
                : ""}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
        items : state.item.items
})

const mapDispatchToProps = dispatch => {
    return {
        fetchItems: (n) => dispatch(fetchItems(n))
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard)
