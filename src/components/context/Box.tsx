
import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'

export const Box = ()=>{
    const theme = useContext(ThemeContext)
    return (
        <div style={{backgroundColor: theme.secondary.main}}>Theme Context</div>
    )
}