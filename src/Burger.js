import React, { Component } from 'react';

import Navbar from "./Navbar"

import styled from "styled-components"

const Div = styled.div`
    display: none; 
    z-index: 20;
    cursor: pointer; 
    @media (max-width: 768px){
        display: flex;
        flex-direction: column; 
        justify-content: space-around;



        position: fixed; 
        top: 40px; 
        right: 60px; 
        width: 2rem; 
        height: 2rem; 
        
        div{
            background: ${props => props.open ? "#fff;":"#1565df;"}
            width: 2rem; 
            height: 0.2rem; 
            border-radius: 10px;
            transform-origin: 1px;
            transition: all 0.2s linear;
            &:nth-child(1){
                transform: ${props => props.open ? "rotate(45deg)" : "rotate(0)"}
            }
            &:nth-child(2){
                transform: ${props => props.open ? "translateX(-100%);" : "translateX(0);"}
                opacity: ${props => props.open ? 0 : 1 }
            }
            &:nth-child(3){
                transform: ${props => props.open ? "rotate(-45deg)" : "rotate(0)"}
            }
        }
    }
`;

class burger extends Component {


    constructor(){
        super(); 
        this.state = {
            open: true,
        }
    }


    clickHandeler = () => {
        this.setState({open: !this.state.open});
    }



    render() {
        return (

            <>
            <Div open={this.state.open} onClick={this.clickHandeler}>
                <div></div>
                <div></div>
                <div></div>
            </Div>

            <Navbar open = {this.state.open} />
            </>

            
        );
    }
}

export default burger;