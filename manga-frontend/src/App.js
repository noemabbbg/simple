// Файл: src/App.js

import React from 'react';
import AddMangaForm from './components/AddMangaForm';
import UploadImageForm from './components/UploadImageForm';

function App() {
    return (
        <div>
            <h1>Добавление Манги</h1>
            <AddMangaForm />
            <h1>Загрузка Изображений Главы</h1>
            <UploadImageForm />
        </div>
    );
}

export default App;
