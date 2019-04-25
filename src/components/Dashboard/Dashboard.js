import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        axios.get('/api/getProducts').then(res => {
            console.log(res.data)
            this.setState({
                products: res.data
            })
        })
    }
    render(){
        const products = this.state.products.map(product => {
            return <div>
                <h2>{product.name}</h2>
                {product.price}
                {product.description}
                <img src={product.img}/>
                <button onClick={() => this.deleteHome}/>
                
            </div>

        })
        return (
            <div>
                Dashboard
                <Link to='/step1'><button>Add Product</button></Link>
                {products}
            </div>

        )
    }
}

export default Dashboard