import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useState } from "react";

type playlistShowcasePropType = {
    heading: string,
    list: { label: string, icon: string, description: string }[]
}

export default function ({ heading, list }: playlistShowcasePropType): ReactElement {
    return (
        <div className="playlist-showcase-widget mt-4 mb-4">
            <div className="flex justify-between items-center">
                <h2 className="text-white font-semibold" style={{ fontSize: '30px' }}>{heading}</h2>
                <small className="hover:underline transition-colors font-bold mr-3">Show All</small>
            </div>
            <div className="flex items-center flex-wrap showcase-list">
                {(list ?? []).map((listItem) => (
                    <ListItem listItem={listItem} />
                ))}
            </div>
        </div>
    )
}

const ListItem = ({ listItem }: { listItem: { label: string, icon: string, description: string } }) => {
    const [isPlayVisibile, setIsPlayVisible] = useState(false);
    const [isPlayHovered, setIsPlayHovered] = useState(false);
    return <div className="flex flex-col items-start p-3 mr-3 showcase-list-item" onMouseEnter={() => setIsPlayVisible(true)} onMouseLeave={() => { setIsPlayVisible(false) }}>
        <div className="relative">
            <img height={'150px'} width={'100%'} src={listItem.icon} />
            {isPlayVisibile && <div onMouseEnter={() => setIsPlayHovered(true)} onMouseLeave={() => { setIsPlayHovered(false) }} className="absolute" style={{ bottom: 10, right: 10 }}><FontAwesomeIcon icon={faPlayCircle} style={{ color: 'green', fontSize: isPlayHovered ? '50px' : '40px', transition: 'all 0.1s' }} /></div>}
        </div>
        <div className="text-white mt-3 mb-3">{listItem.label}</div>
        <div className="text-ellipsis whitespace-nowrap overflow-hidden w-full">{listItem.description}</div>
    </div>
}