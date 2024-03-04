import React from 'react';

const page = ({params}) => {
    return (
        <div>
            <h1>Details about page {params.productId}</h1>
        </div>
    );
};

export default page;