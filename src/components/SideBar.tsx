import React, { Fragment, ReactElement } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faSearch} from '@fortawesome/free-solid-svg-icons'
// @ts-ignore
import LogoWhite from '../resources/images/spotifylogowhite.png';
import CustomIconField from '../utils/CustomIconField';

export default function (): ReactElement {
    return (
        <Fragment>
            <div id='sidebar'>
                <div className='flex justify-center'>
                    <img src={LogoWhite} className='sidebar-logo' />
                </div>
                <div className='card-general m-5'>
                    <CustomIconField icon={faHome} label={<span>Home</span>} />
                    <CustomIconField icon={faSearch} label={<span>Search</span>} />
                </div>
                <div className='card-general mb-5 ml-5 mr-5 flex-1 overflow-y-auto overflow-x-hidden'>
                    
                </div>
            </div>
        </Fragment>
    )
}