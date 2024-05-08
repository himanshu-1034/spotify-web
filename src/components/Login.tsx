import React, { Fragment, ReactElement } from 'react';
// @ts-ignore
import logo from '../resources/images/spotifylogogreen.png';

export default function ():ReactElement {
    return (
        <Fragment>
            <div className='login-wrapper'>
            <img className='login-logo' src={logo} alt='spotify' />
            <h1 className='tag-line'>Listen Whatever...Whereever you want</h1>
            <button className='login-button'>Connect</button>
            </div>
        </Fragment>
    )
}