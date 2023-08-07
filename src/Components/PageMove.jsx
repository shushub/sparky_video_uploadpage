import React from 'react';

const PageMove = () => {
    return (
        <div className='bottom-box'>
            <button className='left-button'> {'<'} </button>
                <span className='current-number'>
                    <button className='current-page'>1</button>
                </span>
            <button className='right-button'>{'>'}</button>
        </div>
    );
};

export default PageMove;