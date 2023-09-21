import React from 'react';

const Container = ({children}) => {
    return (
        <div className=' max-w-screen-2xl mx-auto px-7 md:px-0'>
            {children}
        </div>
    );
};

export default Container;