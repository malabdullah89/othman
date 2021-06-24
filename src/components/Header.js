import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <SearchBar>
                <input placeholder='Search...'></input>

            </SearchBar>
            <NavMenu>
                <a>
                    Home
                </a>

                <a>
                    My Business
                </a>

                <a>
                   Portfolio
                </a>

                <a>
                   Business Requests
                </a>

                <a>
                   About
                </a>


            </NavMenu>
            <span>Already have an Account ?</span>
            <SginIn>
                <a>
                   
                    SIGN IN
                </a>
            </SginIn>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 36px;

    span {
        font-size: 12px;
        margin-right: 12px;
        cursor: pointer;
        color: #5D6C76;

        &:hover {
            color: #E9781F; 
        }
    }

    

`

const SginIn = styled.div`
    color: white;
    background: #E9781F;
    text-align: center;
    width: 100px;
    padding: 8px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 13px;

    &:hover {
        
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        
        }

    

`

const SearchBar = styled.div`
    
    input {
        color: white;
        background: #212428;
        width: 250px;
        border: none;
        border-radius: 5px;
        padding: 10px 15px;
    }

`

const NavMenu = styled.div`

    display: flex;
    flex 1;
    margin-left: 25px;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        color: #5D6C76;

        &:hover {
            color: #E9781F;
        }

    }

`
