/**
 * Replacement hook of "useSelector" in "react-redux".
 *
 * Use throughout your app instead of plain "useSelector".
 *
 */
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
