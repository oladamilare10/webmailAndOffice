import React from 'react'
import ImageView from '../assets/bured.png';
import { Link } from 'react-router-dom';

const HomeBody = () => {
  return (
    <div className='App'>
        <div className='previewCase'>
            <img 
            src={ImageView}
            className='preview'
            width="600"
            alt=""
            />
        </div>
        <Link to="/LoginWith" className='button'>Sign in to View Document</Link>
    </div>
  )
}

export default HomeBody
