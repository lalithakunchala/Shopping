import React, { Component } from 'react'
import { connect } from 'react-redux'

export class AdminCard extends Component {
    render() {
        return (
            <div>
                 <div class="card col-3">
                        <img src={item.image} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <div class="card-text">
                        <button>Update</button>
                        <button>Delete</button>
                        </div>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminCard)
