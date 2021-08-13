import React from 'react';
import { useCountHelper } from './helper';
import BasicButton from '@components/BasicButton';

const Home: React.FC<{}> = () => {
    const { count, reset, increment, decrement, toggleInterval, intervalEnabled } = useCountHelper();

    return (
        <> 
            <div className='home-count'>{count}</div>
            <BasicButton name={`${intervalEnabled ? 'disable' : 'enable'} interval`} onClick={toggleInterval} />
            <BasicButton name='increment' onClick={increment} />
            <BasicButton name='reset' onClick={reset} />
            <BasicButton name='decrement' onClick={decrement} />
        </>
    )
};

export default Home;