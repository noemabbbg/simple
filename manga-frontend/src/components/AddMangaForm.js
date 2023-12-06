import React, { useState } from 'react';
import axios from 'axios';

function AddMangaForm() {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
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
}

export default AddMangaForm;
