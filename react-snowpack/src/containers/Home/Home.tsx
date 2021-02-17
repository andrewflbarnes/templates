import React from 'react';
import { useCountHelper } from './helper';
import BasicButton from '@components/BasicButton';

const Home: React.FC<{}> = () => {
    const { count, reset, increment, decrement } = useCountHelper();

    return (
        <> 
            <div>{count}</div>
            <BasicButton name='increment' onClick={increment} />
            <BasicButton name='reset' onClick={reset} />
            <BasicButton name='decrement' onClick={decrement} />
        </>
    )
};

export default Home;