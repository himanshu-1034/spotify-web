import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, useState } from 'react'

type MainPageListItemPropType = {
    icon: string,
    playlistName: string
}

export default function ({ icon, playlistName }: MainPageListItemPropType): ReactElement {
    const [showPlayIcon, setShowPlayIcon] = useState(false);
    return (
        <div onMouseEnter={() => { setShowPlayIcon(true) }} onMouseLeave={() => { setShowPlayIcon(false) }} className='flex items-center main-page-list-item p-3 m-1 cursor-pointer' style={{ width: '23%', borderRadius: '4px' }}>
            <img src={icon} height={50} width={50} />
            <div className='flex-1 pl-3 pr-1 flex justify-between items-center'>
                {playlistName}
                {showPlayIcon && <FontAwesomeIcon icon={faPlayCircle} style={{color: 'green', fontSize: '34px'}} />}
            </div>
        </div>
    )
}