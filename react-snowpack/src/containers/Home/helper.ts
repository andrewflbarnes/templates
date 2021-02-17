import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store';
import { decrementCount, incrementCount, resetCount } from './reducer';

interface CountHelper {
    count: number,
    reset: () => void
    increment: () => void
    decrement: () => void
}

export const useCountHelper: () => CountHelper = () => {
    const dispatch = useDispatch();
    const count = useSelector((s: RootState) => s.home.count);

    useEffect(() => {
        const interval = setInterval(() => dispatch(incrementCount(1)), 1000);
        return () => clearInterval(interval);
    }, [dispatch])

    const reset = useCallback(() => {
        dispatch(resetCount());
    }, [dispatch])

    const increment = useCallback(() => {
        dispatch(incrementCount(1));
    }, [dispatch])

    const decrement = useCallback(() => {
        dispatch(decrementCount(1));
    }, [dispatch])

    return { count, reset, increment, decrement };
}