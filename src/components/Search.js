import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Search extends Component{
  render(){
        return (
          <input type='text' defaultValue='search'></input>
        )
  }
}