import React, { Fragment, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { To, useNavigate } from 'react-router-dom';

export default function ({ icon, label, pathName }: { icon: IconDefinition, label: ReactElement, pathName: To }): ReactElement {
    const navigate = useNavigate();
    return (
        <Fragment>
            <div className={`flex items-center mt-2 mb-2 basic-list-item`} onClick={() => navigate(pathName)}>
                <FontAwesomeIcon icon={icon} className='mr-3' size='1x' style={{fontSize: 24, marginRight: 20}} />
                {label}
            </div>
        </Fragment>
    )
}