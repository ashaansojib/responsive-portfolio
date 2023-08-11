import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <h1 className='text-5xl font-bold'>{title} <span className='text-[#E32E6E]'>----------</span></h1>
    );
};

export default SectionTitle;