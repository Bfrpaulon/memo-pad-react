import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ImageUpload = ({ onImageUpload }) => {
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');

    const handleImageChange = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            setImagePreviewUrl(reader.result);
            onImageUpload(file);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="image-upload">
            <label htmlFor="upload">
                {imagePreviewUrl ? (
                    <img className="preview-image" src={imagePreviewUrl} alt="Imagem carregada" />
                ) : (
                    <div className="upload-placeholder">Clique para adicionar uma imagem</div>
                )}
            </label>
            <input type="file" id="upload" accept="image/*" onChange={handleImageChange} />
        </div>
    );
};

ImageUpload.propTypes = {
    onImageUpload: PropTypes.func.isRequired,
};

export default ImageUpload;
