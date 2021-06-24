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
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 36px;
    

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
