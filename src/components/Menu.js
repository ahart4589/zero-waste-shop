import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Menu extends Component{
  constructor(){
    super()
    this.state = {
      showMenu: false
    }
  }

  showMenu = (e) => {
    e.preventDefault()
    this.setState({
      showMenu: true
    }, () => {
      document.addEventListener('click', this.closeMenu)
    })
  }

  closeMenu = (e) => {
    // if (!this.dropdownMenu.contains(e.target)) {
        this.setState({showMenu: false}, () => {
          document.removeEventListener('click', this.closeMenu)
        })
    // }
  }

  render(){
    return(
      <div className='menu'>
          <i className='hamburger fas fa-bars' onClick={this.showMenu}> </i>
          {
            this.state.showMenu
              ? (
                <div 
                className='dropdown'
                ref={(element) => {
                  this.dropdownMenu = element
                }}
                >
                  <Link to='/'>
                    <button>Home</button>
                  </Link>
                  <br/>
                  <Link to='/products'>
                    <button>Shop All</button>
                  </Link>
                  <br/>
                  <Link to='/why'>
                    <button>Why Zero Waste?</button>
                  </Link>
                  <br/>
                  <div>
                    {this.props.user?
                      <div>
                        <button onClick={this.props.logout}>Logout</button>
                        <h1>Logged in as {this.props.user.name}</h1>
                      </div>:
                      <button onClick={this.props.login}>Login</button>}
                  </div>
                </div>
              )
              : (
                null
              )
          }
      </div>
    )
  }
}

