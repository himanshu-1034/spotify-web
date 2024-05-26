import React, { Fragment, ReactElement, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownAZ, faHome, faSearch, faSort } from '@fortawesome/free-solid-svg-icons'
// @ts-ignore
import LogoWhite from '../resources/images/spotifylogowhite.png';
import CustomIconField from '../utils/CustomIconField';
import PlaylistListItem from '../utils/PlaylistListItem';

type PlaylistType = any;

export default function (): ReactElement {
    const [playlists, setPlaylists] = useState<PlaylistType[]>([]);
    return (
        <Fragment>
            <div id='sidebar'>
                <div className='card-general mb-5 ml-5 mt-4'>
                    <CustomIconField icon={faHome} label={<span>Home</span>} pathName={'/home'} />
                    <CustomIconField icon={faSearch} label={<span>Search</span>} pathName={'/home'} />
                </div>
                <div className='card-general p-0 mb-5 ml-5 flex-1 overflow-y-auto overflow-x-hidden' style={{padding: '0px'}}>
                    <div className='flex items-center justify-between sticky top-0 p-3 bg-inherit'>
                        <div className='flex-1'>
                            <FontAwesomeIcon className='cursor-pointer hover:text-white transition-colors' icon={faSearch} />
                        </div>
                        <div className='flex items-center hover:text-white transition-colors cursor-pointer' style={{ marginLeft: '5px' }}>
                            <span className='mr-2'>Recents</span>
                            <FontAwesomeIcon icon={faArrowDownAZ} />
                        </div>
                    </div>
                    {Array(20).fill({ name: "Playlist 1", img: 'https://marketplace.canva.com/EAEdfw3xPPc/1/0/1600w/canva-pink-sunset-tumblr-aesthetic-love-songs-playlist-cover-IeYIUu1iRHQ.jpg', description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque deserunt libero omnis amet suscipit ab cumque quis esse illo vel, veritatis sunt, temporibus commodi nihil debitis error nemo autem aperiam." }).map((playlist) => (
                        <PlaylistListItem playlistName={playlist.name} icon={playlist.img} description={playlist.description ?? ""} />
                    ))}
                </div>
            </div>
        </Fragment>
    )
}