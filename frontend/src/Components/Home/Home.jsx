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
            sort:"asc",
            category:"",
            page:1
        }
    }
    componentDidMount(){
        console.log("componentdidmount")
        this.props.fetchItems(this.state)
    }

    handleChange = (e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handlePage = (e)=>{
        console.log(e.target.id)
        console.log()
        if(e.target.id==="prev" ){
            if(this.state.page>1){
                this.setState({page:this.state.page-1})
                this.props.fetchItems({sort:this.state.sort,category:this.state.category,page:this.state.page-1})
            }  
            
        }
        else if(e.target.id==="next"){
            if(true){
                this.setState({page:this.state.page+1})
                this.props.fetchItems({sort:this.state.sort,category:this.state.category,page:this.state.page+1})
            } 
        }
        else{
            this.setState({
                page:Number(e.target.value)
            })
            this.props.fetchItems({sort:this.state.sort,category:this.state.category,page:Number(e.target.value)})
        }
        
    }

    handleClick = ()=>{
        console.log(this.state);
        this.props.fetchItems(this.state)
    }


    render() { 
        
        var {items} = this.props
        return (
            <div>
                {!this.props.loggedUser?<NavBar />:<NavBarAfterLogin />}
                
                <div className={styles.height_img}>
                    <div style={{paddingTop:"200px",paddingRight:"1100px"}}>
                    <h1 className=" text-light justify-content-bottom  fnt"><span className={styles.fnt}>Latest Designs<br/>Trendy</span></h1>
                    </div>
                </div> 
                <div className="container">
                <form className="form-inline">
                        <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Category</label>
                        <select name="category" onChange={(e) => this.setState({ category: e.target.value })} className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option value=""></option>
                        <option value="cotton">Cotton</option>
                        <option value="fancy">Fancy</option>
                        <option value="silk">Silk</option>
                        </select>
                        <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Sort</label>
                        <select name="sort" onChange={(e) => this.setState({ sort: e.target.value })} className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option value=""></option>
                        <option value="asc">asc</option>
                        <option value="desc">Desc</option>
                        </select>
                        <button onClick={this.handleClick} type="submit" className="btn btn-primary my-1">Submit</button>
                    </form>
                <div class="row p-5">
                    
                        {items && items.map(item =>(
                            <UserCard image = {item.image} price={item.price} category={item.category}/>
                        ))}
                
                    </div>
                </div>
                <nav aria-label="...">
                    <ul className="pagination float-right">
                    <button  id="prev" onClick={this.handlePage}>prev</button>
                        <button id={this.state.page} onClick={this.handlePage}>{this.state.page}</button>   
                    <button  id="next" onClick={this.handlePage}>next</button>
                    </ul>
                </nav>
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
