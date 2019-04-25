import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import store, { UPDATENAME, UPDATEPRICE, UPDATEDESCRIPTION, UPDATEIMAGE } from '../../ducks/store'

class Wizard2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            store: store.getState()
        }
    }
    componentDidMount(){
        store.subscribe(() => {
            this.setState({
                store: store.getState()
            })
        })
    }

    addProduct = (name, price, description, img) => {
            axios.post('/api/postproduct', {name, price, description, img}).then(res => {
                alert('Product added!')
                this.props.history.push('/')
            })
    }

    render (){
        const {name, price, description, img} = this.state.store
        return (
            <div>
                Wizard2
                <Link to='/step1'><button>Edit</button></Link>
                <button onClick={() => this.addProduct(name, price, description, img)}>Submit</button>
            </div>
        )
    }
}

export default Wizard2