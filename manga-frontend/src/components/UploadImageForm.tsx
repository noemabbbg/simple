// Файл: src/components/UploadImageForm.tsx

import React, { useState, FormEvent } from 'react';
import axios from 'axios';

const UploadImageForm: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [chapterId, setChapterId] = useState<string>('');

    const handleSubmit = async (e: FormEvent) => {
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
            <label htmlFor="file-upload">
                Загрузить изображение главы:
                <input
                    id="file-upload"
                    type="file"
                    onChange={(e) => setSelectedFile(e.target.files ? e.target.files[0] : null)}
                />
            </label>
            <label htmlFor="chapter-id">
                ID главы:
                <input
                    id="chapter-id"
                    type="text"
                    value={chapterId}
                    onChange={(e) => setChapterId(e.target.value)}
                    placeholder="Введите ID главы"
                />
            </label>
            <button type="submit">Загрузить изображение</button>
        </form>
    );
};

export default UploadImageForm;
