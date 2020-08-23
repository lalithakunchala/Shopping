import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../Navbar/NavBar.jsx';
import NavBarAfterLogin from '../NavBarAfterLogin/NavBarAfterLogin';
import styles from './Home.module.css'
import Footer from '../Footer/Footer'
import {fetchItems} from '../../redux/item/action.js' 
import UserCard from '../UserCard/UserCard.jsx'

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
                {!this.props.loggedUser?<NavBar />:<NavBarAfterLogin />}
                
                <div className={styles.height_img}>
                    <div style={{paddingTop:"200px",paddingRight:"1100px"}}>
                    <h1 className=" text-light justify-content-bottom  fnt"><span className={styles.fnt}>Latest Designs<br/>Trendy</span></h1>
                    </div>
                </div> 
                <div className="container">
                <div class="row p-5">
                    
                        {items && items.map(item =>(
                            <UserCard image = {item.image} price={item.price}/>
                        ))}
                
                    </div>
                </div>
                <Footer /> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
    items : state.item.items,
    loggedUser : state.userauth.logUser || state.adminauth.logUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItems: (n) => dispatch(fetchItems(n))
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
