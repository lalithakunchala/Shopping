import React, { Component, PureComponent } from 'react'
import { connect } from 'react-redux'
import NavBarAfterLogin from '../NavBarAfterLogin/NavBarAfterLogin';
import {logout} from '../../redux/adminauth/action'
import {Redirect,Link} from 'react-router-dom'
import {fetchAdminItems} from '../../redux/item/action.js'
import Footer from '../Footer/Footer'
import {updateItem,deleteItem} from '../../redux/item/action.js'

export class AdminDashboard extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
            update :false,
            price:0,
            id:""
        }
    }
    
    componentDidMount(){
        this.props.fetchAdminItems(this.props.logSuccess.token)
    }

    componentWillUpdate(prev){
        this.props.fetchAdminItems(this.props.logSuccess.token)
    }

    handleUpdate = ()=>{
        this.setState({
            update : true
        })
    }

    handleChange = (e)=>{
        this.setState({
            price:e.target.value,
            id: e.target.id
        })
    }


    render() {
        if(this.props.logSuccess==""){
            return <Redirect to="/" />
        }
        console.log(this.state)
        const {adminItems} =this.props
        return (
            <div>
                <NavBarAfterLogin />
                <Link to="/additem"><button>Add saree</button></Link>

                {adminItems?
                adminItems.map((item,index) =>(<div>
                <div class="card col-3">
                        <img src={item.image} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                <p class="card-text"><small class="text-muted">price:{item.price}</small></p>
                        <div class="card-text">
                        <button onClick={this.handleUpdate}>Update</button>
                        <button onClick={()=>{this.props.deleteItem(item._id)}}>Delete</button>
                        </div>
                        </div>
                        {this.state.update?
                        <div>
                            <input type="text" id={item._id} onChange={this.handleChange} placeholder="price"/>
                            <button  onClick={()=>{this.props.updateItem(this.state)}}>Update</button>
                        </div>
                        :
                        ""
                        }
                    </div>
                </div>))
                : ""}
                <Footer />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    
        items : state.item.items,
        adminItems : state.item.adminItems,
        logSuccess : state.adminauth.logSuccess
})

const mapDispatchToProps = dispatch => {
    return {
        fetchAdminItems: (n) => dispatch(fetchAdminItems(n)),
        updateItem: (n) => dispatch(updateItem(n)),
        deleteItem: (n) => dispatch(deleteItem(n))
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)
