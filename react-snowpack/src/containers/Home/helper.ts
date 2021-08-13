import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store';
import { decrementCount, incrementCount, resetCount, toggleIntervalEnabled } from './reducer';

interface CountHelper {
    count: number,
    reset: () => void
    increment: () => void
    decrement: () => void
    toggleInterval: () => void
    intervalEnabled: boolean
}

export const useCountHelper: () => CountHelper = () => {
    const dispatch = useDispatch();
    const {count, intervalEnabled} = useSelector((s: RootState) => s.home);

    const clearCountInterval = useEffect(() => {
        if (intervalEnabled) {
            const interval = setInterval(() => dispatch(incrementCount(1)), 1000);
            return () => clearInterval(interval);
        }

        return () => {}
    }, [dispatch, intervalEnabled])

    const reset = useCallback(() => {
        dispatch(resetCount());
    }, [dispatch])

    const increment = useCallback(() => {
        dispatch(incrementCount(1));
    }, [dispatch])

    const decrement = useCallback(() => {
        dispatch(decrementCount(1));
    }, [dispatch])

    const toggleInterval = useCallback(() => {
        dispatch(toggleIntervalEnabled());
    }, [dispatch, intervalEnabled, clearCountInterval])

    return { count, reset, increment, decrement, toggleInterval, intervalEnabled };
}