import React, { Component } from 'react'

export default function WithScroll(WrappedComponent) {
  return class extends Component {
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  
    handleScroll = (e) => {
      console.log('aloha')
      let navbar = document.querySelector('#navbar')
      if (window.scrollY <= 100) {
        navbar.className = ''
      } else {
        navbar.className = 'scroll'
      }
    }
  
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}