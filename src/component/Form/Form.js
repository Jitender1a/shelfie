import React, {Component} from 'react'
import axios from 'axios'
import Form from './Form'


export default class Form extends Component{
        constructor(){
            super()
            this.state={
                name:'',
                price:0,
                imgurl:''
            }
        }

        componentDidMount(){
            axios.post('/api/products').then(response=>{
                this.setState({
                    name:response.data,
                    price:response.data,
                    imgurl:response.data,
                })
            })
        }
}