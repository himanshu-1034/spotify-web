import React, { Fragment, ReactElement } from 'react';
import MainPageListItem from '../utils/MainPageListItem';
import PlaylistShowCase from '../utils/PlaylistShowCase';

export default function (): ReactElement {
    return (
        <Fragment>
            <div id='main-component'>
                <div className='card-general h-full main-component-bg overflow-x-hidden overflow-y-auto'>
                    <div className='flex flex-wrap'>
                        {Array(8).fill({ playlistName: "Liked Songs", icon: "https://marketplace.canva.com/EAEdfw3xPPc/1/0/1600w/canva-pink-sunset-tumblr-aesthetic-love-songs-playlist-cover-IeYIUu1iRHQ.jpg" }).map((item) => <MainPageListItem icon={item.icon} playlistName={item.playlistName} />)}
                    </div>
                    <PlaylistShowCase heading='Made for you' list={Array(5).fill({ label: "Playlist 1", icon: 'https://marketplace.canva.com/EAEdfw3xPPc/1/0/1600w/canva-pink-sunset-tumblr-aesthetic-love-songs-playlist-cover-IeYIUu1iRHQ.jpg', description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque deserunt libero omnis amet suscipit ab cumque quis esse illo vel, veritatis sunt, temporibus commodi nihil debitis error nemo autem aperiam." })} />
                    <PlaylistShowCase heading='Made for you' list={Array(5).fill({ label: "Playlist 1", icon: 'https://marketplace.canva.com/EAEdfw3xPPc/1/0/1600w/canva-pink-sunset-tumblr-aesthetic-love-songs-playlist-cover-IeYIUu1iRHQ.jpg', description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque deserunt libero omnis amet suscipit ab cumque quis esse illo vel, veritatis sunt, temporibus commodi nihil debitis error nemo autem aperiam." })} />
                    <PlaylistShowCase heading='Made for you' list={Array(5).fill({ label: "Playlist 1", icon: 'https://marketplace.canva.com/EAEdfw3xPPc/1/0/1600w/canva-pink-sunset-tumblr-aesthetic-love-songs-playlist-cover-IeYIUu1iRHQ.jpg', description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque deserunt libero omnis amet suscipit ab cumque quis esse illo vel, veritatis sunt, temporibus commodi nihil debitis error nemo autem aperiam." })} />
                    <PlaylistShowCase heading='Made for you' list={Array(5).fill({ label: "Playlist 1", icon: 'https://marketplace.canva.com/EAEdfw3xPPc/1/0/1600w/canva-pink-sunset-tumblr-aesthetic-love-songs-playlist-cover-IeYIUu1iRHQ.jpg', description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque deserunt libero omnis amet suscipit ab cumque quis esse illo vel, veritatis sunt, temporibus commodi nihil debitis error nemo autem aperiam." })} />
                </div>
            </div>
        </Fragment>
    )
}