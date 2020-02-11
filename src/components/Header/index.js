import React from 'react'
import style from './style.module.css'


export default class Header extends React.Component {
  render() {
    return <header className = {
      style.Header
    } > <h2>  John Doe </h2></header >
  }
}