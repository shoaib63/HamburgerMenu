import React, { Component } from 'react';


import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none ; 
    display: flex; 
    justify-content: right; 
    padding: 20px 50px;
    li{
        padding: 20px 20px;
        cursor: pointer;
    }

    @media(max-width: 768px){
        flex-direction: column;
        background: #1565df;
        position: fixed; 
        top:0; 
        right:0; 
        margin:0;
        width: 300px; 
        height: 100vh; 
        padding-top: 6rem; 
        z-index: 15; 
        transition: all 0.2s linear;
        transform: ${props => props.open ? 'translateX(0);' : "translateX(+100%);"}
        li{
            color: #fff; 
        }
    }
`;

class Navbar extends Component {

   
    render() {
        return (
            <Ul open={this.props.open}>
                <li>Home</li>
                <li>Docs</li>
                <li>Buy me a coffee</li>
                <li>Github</li>
            </Ul>

        );
    }
}

export default Navbar;