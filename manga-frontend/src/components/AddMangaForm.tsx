// Файл: src/components/AddMangaForm.tsx

import React, { useState, FormEvent } from 'react';
import axios from 'axios';

const AddMangaForm: React.FC = () => {
    const [title, setTitle] = useState<string>('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/manga', { title });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Название манги"
            />
            <button type="submit">Добавить мангу</button>
        </form>
    );
};

export default AddMangaForm;
