import React from 'react'
import { Icon } from '@mui/material';


interface buttonProps {
    callback: () => Promise<void>,
    iconComponent: any
}
function Button(props: buttonProps) {
  return (
    <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center hover:border-4 border-cyan-300 border-0 border-solid transition-all duration-300' onClick={() => props.callback()}>
        <Icon component={props.iconComponent}></Icon>
    </div>
  )
}

export default Button