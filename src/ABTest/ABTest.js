import React from 'react';

export default function ABTest({
    children
}) {
    console.log(children)
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
}