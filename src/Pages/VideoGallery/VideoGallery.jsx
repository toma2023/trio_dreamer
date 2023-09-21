import React from 'react';
import Container from '../../components/Containter/Container';

const VideoGallery = () => {
    return (
        <div>
             <Container>
                <div className='py-24 grid grid-cols-2 items-center justify-center'>
                    <video controls>
                        <source src="https://youtu.be/Q3sWB65azbQ?si=I0cG9tU67LzXM7XW" />
                        
                    </video>
                </div>
             </Container>
        </div>
    );
};

export default VideoGallery;
