import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import MoreT from './MoreT';
import LoginT from "./LoginT";
import 'tippy.js/themes/light.css'

const Header = () => {
    return (
        <div className='header'>
        <div className="header__first">
            <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" 
            alt="flipkart logo" />
        
        <div className="header__first1">
            <span style={{
                fontSize: '11px',
                color: 'white',
                fontStyle: 'italic'
            }}>Explore</span>
            <span style={{
                fontSize: '11px',
                color: "#f9e107",
                fontStyle: 'italic'
            }}>Plus</span>
            <span><img width="10" src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" 
            alt="" /></span>

            </div>
        </div>

        <div className="header__second">
            <input placeholder="Search for products,brands and more" type="text"/>
            <SearchIcon />
        </div>
        <div className="header__third">
            <Tippy theme="light"  content={<LoginT></LoginT>}
            interactive={true} offset={[5,18]}>
            <button>Login</button>
            </Tippy>
            
        </div>
        <div className="header__fourth">
            <Tippy theme="light" content={<MoreT></MoreT>}
            interactive={true} offset={[5,18]}>
                
            <span>More</span>

            </Tippy>
            
            <ExpandMoreIcon />
        </div>
        <div className="header__fifth">
            <ShoppingCartIcon/><p>Cart</p>
        </div>
        </div>
    );
};

export default Header;
