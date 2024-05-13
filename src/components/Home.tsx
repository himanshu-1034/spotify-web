import React, { Fragment, ReactElement } from 'react';
import SideBar from './SideBar';
import MainComponent from './MainComponent';

export default function ():ReactElement {
    return (
        <Fragment>
            <div id='home' className='home-wrapper'>
                <SideBar />
                <MainComponent />
            </div>
        </Fragment>
    )
}