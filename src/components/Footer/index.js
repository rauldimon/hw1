import React from 'react'
import style from './style.module.css'
import Photo from './310.png'


export default class Footer extends React.Component {
    render() {
        return <div className = {style.Footer} >
                    <p className = {style.Text}>365 Freebies. 007/365</p>
                    <img alt="photoFooter" src = {Photo} />
                    <p className = {style.Text}>@anakerenart</p>                   
                </div>
    }
}