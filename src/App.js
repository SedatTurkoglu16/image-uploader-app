import { useState } from 'react';
import './App.css';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import UploadForm from './components/UploadForm';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid  setSelectedImage={setSelectedImage}/>
      { selectedImage && <Modal setSelectedImage={setSelectedImage} selectedImage={selectedImage}/>}
    </div>
  );
}

export default App;
