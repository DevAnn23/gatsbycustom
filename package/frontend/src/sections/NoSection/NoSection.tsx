import React from 'react';

const NoSection = (props: { dataKey: string }) => (
    <div className={'container'} style={{ padding: '50px 0' }}>
        <h2 style={{ textAlign: 'center' }}>
            No section with name {props.dataKey.split('_').pop()}
        </h2>
        <h4 style={{ textAlign: 'center' }}>
            Add it to sectionComponentsMap.ts
        </h4>
    </div>
);

export default NoSection;
