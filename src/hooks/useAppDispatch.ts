/**
 * Replacement hook of "useDispatch" in "react-redux".
 *
 * Use throughout your app instead of plain "useDispatch".
 *
 */

import { AppDispatch } from '@/store'
import { useDispatch } from 'react-redux'

export const useAppDispatch: () => AppDispatch = useDispatch
