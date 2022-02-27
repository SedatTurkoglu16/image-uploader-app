import React from 'react'
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import './ImageGrid.css'

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore('images');
  console.log(docs);

  return (
    <div className='img-grid'>
        { docs && docs.map(doc => (
            <motion.div className='img-wrap' layout whileHover={{ opacity: 1 }} key={doc.id} onClick={() => setSelectedImage(doc.url)}>
                <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} src={doc.url} alt="uploaded"/>
            </motion.div>
        ))}
    </div>
  )
}

export default ImageGrid