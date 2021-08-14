import React, { useEffect } from 'react';
import { useExternal } from './selector';


const External: React.FC<{}> = () => {
    const { rate, fetching, error, getRate } = useExternal();
    useEffect(() => getRate(), []);
    return (
        <div>
            <p>This page makes an external API request</p>
            {!!rate && <p className='rate'>Exchange rate: {rate}</p>}
            {!!fetching && <p className='spinner'>Loading...</p>}
            {!!error && <p className='error-msg'>{error}</p>}
        </div>
    )
};

export default External;