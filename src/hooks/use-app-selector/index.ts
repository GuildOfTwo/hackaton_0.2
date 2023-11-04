import { useSelector } from 'react-redux';
// types
import type { TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
