import React, { ReactElement } from 'react';

type PlaylistItemPropType = {
    playlistName: string,
    icon: string,
    description?: string
}

export default function ({icon, playlistName, description}: PlaylistItemPropType):ReactElement {
    return (
        <div className='flex items-center p-3 cursor-pointer hover:bg-zinc-800 transition-colors'>
            <div className='mr-3'>
                <img src={icon} height={55} width={55} style={{borderRadius: '4px'}} />
            </div>
            <div className='flex-1 flex flex-col'>
                <div className='text-white'>{playlistName}</div>
                <div>Playlist · {Math.floor(Math.random() * 10)} Songs</div>
            </div>
        </div>
    );
}