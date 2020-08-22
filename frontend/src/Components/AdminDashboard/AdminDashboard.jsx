import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBarAfterLogin from '../NavBarAfterLogin/NavBarAfterLogin';
import {logout} from '../../redux/adminauth/action'
import { AdminCard } from '../AdminCard/AdminCard';
import {fetchItems} from '../../redux/item/action.js'
import Footer from '../Footer/Footer'

export class AdminDashboard extends Component {

    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.fetchItems()
    }


    render() {
        
        const {items} =this.props
        return (
            <div>
                <NavBarAfterLogin />
                {items?
                items.map((item,index) =>(<div>
                <AdminCard image={item.image} id={item._id} /> 
                </div>))
                : ""}
                <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)
