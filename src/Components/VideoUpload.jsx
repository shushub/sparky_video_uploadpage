import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const VideoUploader = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log('Uploaded files:', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'video/*', 
  });
  
  return (
    <div className="video-uploader-container">
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
            <span className='svgtext'>
                <p>아직 동영상이 없어요. 나만의 동영상을 올려보세요</p>
            </span>
      </div>
    </div>
  );
};

export default VideoUploader;
