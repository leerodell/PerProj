import React, { Component } from 'react'
import store, { UPDATENAME, UPDATEPRICE, UPDATEDESCRIPTION, UPDATEIMAGE } from '../../ducks/store'
import {Link} from 'react-router-dom'

class Wizard1 extends Component {
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

    updateName = (value) => {
        store.dispatch({payload: value, type: UPDATENAME})
    }

    updatePrice = (value) => {
        store.dispatch({payload: value, type: UPDATEPRICE})
    }

    updateDescription = (value) => {
        store.dispatch({payload: value, type: UPDATEDESCRIPTION})
    }

    updateImage = (value) => {
        store.dispatch({payload: value, type: UPDATEIMAGE})
    }

    render (){
        console.log(this.state.store)
        return (
            <div>
                name: <input onChange={(e) => this.updateName(e.target.value)}/>
                price: <input onChange={(e) => this.updatePrice(e.target.value)}/>
                description: <input onChange={(e) => this.updateDescription(e.target.value)}/>
                img: <input onChange={(e) => this.updateImage(e.target.value)}/>
                <Link to='step2' ><button>Next</button></Link>
            </div>
        )
    }
}

export default Wizard1