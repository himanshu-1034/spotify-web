import React, { Fragment, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export default function ({ icon, label }: { icon: IconDefinition, label: ReactElement }): ReactElement {
    return (
        <Fragment>
            <div className={`flex items-center mt-2 mb-2`}>
                <FontAwesomeIcon icon={icon} className='mr-2' />
                {label}
            </div>
        </Fragment>
    )
}