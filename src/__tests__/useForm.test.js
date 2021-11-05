import { useForm } from "hooks/useForm";
import {renderHook, act} from '@testing-library/react-hooks'

const setupTest = (params) => renderHook(() => useForm(params))

test ('does keyword work?', () => {
    const {result} = setupTest()
    act(() => {
        result.current.updateKeyword('react')
    })
    
    expect(result.current.keyword).toBe('react')
})

test('does initial values work?', () => {
    const {result} = setupTest({
        initialKeyword: 'react',
    })
    expect(result.current.keyword).toBe('react')
})
test('should keyword update correctly when typing', () => {
    const {result} = setupTest({
        initialKeyword: '',
    })
    act(() => {
        result.current.updateKeyword('r')
    })
    act(() => {
        result.current.updateKeyword('re')
    })
    act(() => {
        result.current.updateKeyword('rea')
    })
    act(() => {
        result.current.updateKeyword('reac')
    })
    expect(result.current.keyword).toBe('reac')
})