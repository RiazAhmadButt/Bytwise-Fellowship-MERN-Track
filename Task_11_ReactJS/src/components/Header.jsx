import React from 'react';
import {Button} from './Button';

export const Header = () => {
    const onClick =()=>{
        console.log('onClick')
    };
  return (
    <div className='header'>
        <h1>Task Tracker</h1>
        <Button text="OnClick" onClick={onClick}/>
    </div>
  )
}
