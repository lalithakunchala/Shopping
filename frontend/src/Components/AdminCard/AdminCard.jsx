import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateItem} from '../../redux/item/action.js'
 
export class AdminCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            update :false,
            price:0,
            id:""
        }
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
        console.log(this.props)
        return (
            
                   <div class="card col-3">
                        <img src={this.props.image} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <div class="card-text">
                        <button onClick={this.handleUpdate}>Update</button>
                        <button onClick={this.handleDelete}>Delete</button>
                        </div>
                        </div>
                        {this.state.update?
                        <div>
                            <input type="text" id={this.props.id} onChange={this.handleChange} placeholder="price"/>
                            <button  onClick={()=>{updateItem(this.state)}}>Update</button>
                        </div>
                        :
                        ""
                        }
                    </div>
        
        )
    }
}

const mapStateToProps = (state) => ({

    items : state.item.items
    
})

const mapDispatchToProps = dispatch => {
    return {
        updateItem: (n) => dispatch(updateItem(n))
      };
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminCard)
