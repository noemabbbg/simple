import React, { useState } from 'react';
import axios from 'axios';

function UploadImageForm() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [chapterId, setChapterId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('chapterId', chapterId);

            try {
                const response = await axios.post('http://localhost:5000/chapterimage/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="file"
                onChange={(e) => setSelectedFile(e.target.files ? e.target.files[0] : null)}
            />
            <input
                type="text"
                value={chapterId}
                onChange={(e) => setChapterId(e.target.value)}
                placeholder="ID главы"
            />
            <button type="submit">Загрузить изображение</button>
        </form>
    );
}

export default UploadImageForm;
