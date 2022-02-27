import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';
import './ProgressBar.css'

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  
  useEffect(() => {
    if(url) {
      setFile(null)
    }
  }, [url, setFile])

  return (
    <div className='bar'>
      <h3>Image is Uploading...</h3>
      <motion.div className='progress-bar' initial={{ width: 0 }} animate={{ width: progress + '%' }}></motion.div>
    </div>
  )
}

export default ProgressBar