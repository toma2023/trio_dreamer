import React, { useContext } from 'react';
import LatestProductCard from '../LatestProductCard/LatestProductCard';
import { AuthContext } from '../../providers/AuthProvider';

const LatestProducts = () => {
    const { products  } = useContext(AuthContext);
    const latestProducts = products.sort((a, b) => new Date(b.submission_date) - new Date(a.submission_date)).slice(0);
console.log(latestProducts)
    return (
        <div>
            <LatestProductCard/>
        </div>
    );
};

export default LatestProducts;