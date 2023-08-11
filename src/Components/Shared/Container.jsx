import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[4000px] lg:p-0 p-5 mx-auto'>
            {children}
            
        </div>
    );
};

export default Container;