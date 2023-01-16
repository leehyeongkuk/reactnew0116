import React, { useState } from 'react';
import navicss from '../css/navi.module.css';
import { json, Link } from "react-router-dom";
import Logo from './Logo';
import Scrollspy from 'react-scrollspy';

function Navi(props) {
    const [ naviText,updateText ] = useState(true);
    //json -> map
    return (
        <div className={`${navicss.hd} border-bottom py-2 fixed-top`}>
            <header id="hd" className='container-lg d-lg-flex flex-wrap justify-content-between align-items-center'>
                <h1>
                    <Link to="/">{<img src={Logo} className="img-fluid w-100" alt="" />}</Link>
                </h1>
            <Scrollspy id="gnb" className='d-flex'>
                <li>
                    <Link to="#about" className={`${navicss.me} px-3 font141618`}>인사</Link>
                </li>
                <li>
                    <a href="#process" className='px-3 font141618'>개발성장과정</a>
                </li>
                <li>
                    <a href="#portfolio" className='px-3 font141618'>결과물</a>
                </li>
                <li>
                    <a href="#contact" onClick={ () => {updateText(!naviText)} } className='px-3 font141618'>
                        {
                            naviText ? '연락주세요' : 'Contact'
                    }
                    </a>
                </li>
            </Scrollspy>
                <ul id="sns" className='d-flex'>
                    <li><a href="" target="_blank">깃</a></li>
                    <li><a href="" target="_blank">노션</a></li>
                    <li><a href="" target="_blank">노션</a></li>
                </ul>
            </header>
        </div>
    );
}

export default Navi;