// Файл: Models/Chapter.cs

using MangaAPI.Models;

public class Chapter
{
    public int Id { get; set; }
    public string Title { get; set; }
    public int MangaId { get; set; } // Внешний ключ для Manga

    // Навигационное свойство для связи с Manga
    public Manga Manga { get; set; }

    // Коллекция изображений главы
    public List<ChapterImage> Images { get; set; }
}
