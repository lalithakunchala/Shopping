import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../Navbar/NavBar.jsx';
import styles from './Home.module.css'
import Footer from '../Footer/Footer'
import {fetchItems} from '../../redux/item/action.js' 

export class Home extends Component {

    constructor(props){
        super(props)
        this.state ={

        }
    }

    componentWillMount(){
        this.props.fetchItems()
    }


    render() { 
        var {items} = this.props
        console.log(items)
        return (
            <div>
                <NavBar />
                
                <div className={styles.height_img}>
                    <div style={{paddingTop:"200px",paddingRight:"800px"}}>
                    <h2 className="font-italic text-light justify-content-bottom">Latest Designs<br/>Trendy</h2>
                    </div>
                </div> 
                <div className="container">
                <div class="row">
                    <div className ="p-3">
                        {items && items.map(item =>(
                    <div class="card col-3">
                        <img src={item.image} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                        ))}
                    </div>
                    </div>
                </div>
                <Footer /> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
    items : state.item.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItems: (n) => dispatch(fetchItems(n))
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
