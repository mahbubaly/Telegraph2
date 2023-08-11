import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[4000px] lg:py-0 lg:px-0 px-5 py-[30px] mx-auto'>
            {children}
            
        </div>
    );
};

export default Container;