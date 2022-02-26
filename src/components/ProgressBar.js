import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage';
import './ProgressBar.css'

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  
  useEffect(() => {
    if(url) {
      setFile(null)
    }
  }, [url, setFile])

  return (
    <div>
      <h3>Image is Uploading...</h3>
      <div className='progress-bar' style={{ width: progress + '%' }}></div>
    </div>
  )
}

export default ProgressBar