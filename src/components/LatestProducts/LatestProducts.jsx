import React, { useContext } from 'react';
import LatestProductCard from '../LatestProductCard/LatestProductCard';
import { AuthContext } from '../../providers/AuthProvider';

const LatestProducts = () => {
    const { latestProducts  } = useContext(AuthContext);
   

    return (
        <div className="grid grid-cols-4 gap-5">
        {
           latestProducts.map(latestProduct=>  <LatestProductCard latestProduct={latestProduct} />)
        }
        </div>
    );
};

export default LatestProducts;