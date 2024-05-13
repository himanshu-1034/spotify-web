import React, { Fragment, ReactElement, SyntheticEvent } from 'react';
// @ts-ignore
import logo from '../resources/images/spotifylogoblack.png';
import { clientId } from '../resources/store/spotify-store-creds';

export default function ():ReactElement {

    const handleClick = async (e: SyntheticEvent) => {
        let redirectUrl = window.location.origin + '/';
        let url = "https://accounts.spotify.com/authorize";
        let authScopes = ["user-read-email","user-read-private",'user-read-playback-state','user-modify-playback-state','user-read-currently-playing', 'user-read-playback-position','user-top-read','user-read-recently-played'];
        window.location.href = `${url}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${authScopes.join(' ')}&response_type=token&show_dialog=true`;
    }

    return (
        <Fragment>
            <div className='login-wrapper base-bg'>
            <img className='login-logo' src={logo} alt='spotify' />
            <button className='login-button' onClick={handleClick}>Connect</button>
            </div>
        </Fragment>
    )
}