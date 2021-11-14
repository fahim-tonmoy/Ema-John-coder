import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';
const Header = () => {
    return (
        <HeaderStyled>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <nav>
                <a href="#shop">ShopOrder</a>
                <a href="#review">ReviewMange</a>
                <a href="#inventory">Inventory</a>
            </nav>
        </HeaderStyled>
    );
};

const HeaderStyled = styled.div`
    .logo {
        margin: 10px 0;
        text-align: center;
        img {
        /* width: 200px; */
        height: 100px;
    }
    }
    nav {
        background-color: black;
        padding: 5px;
        line-height: 40px;
        text-align: center;
        a{
            text-decoration: none;
            color: white;
            margin-right: 20px;
            padding: 5px;
            font-size: 25px;
        }
        a:hover{
            background-color: lightgray;
        }
    }
`;

export default Header;