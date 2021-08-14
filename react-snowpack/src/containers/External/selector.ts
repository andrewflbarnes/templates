import { useDispatch } from 'react-redux';
import { useSelector } from "@store";
import { fetchRate } from './reducer';

const useExternalState = () => useSelector(s => s.external)

export const useExternal = () => {
    const externalState = useExternalState();
    const dispatch = useDispatch();

    const getRate = () => {
        dispatch(fetchRate());
    }

    return {
        ...externalState,
        getRate,
    }
}