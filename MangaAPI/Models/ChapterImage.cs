// Файл: Models/ChapterImage.cs

public class ChapterImage
{
    public int Id { get; set; }
    public byte[] ImageData { get; set; } // Данные изображения
    public int ChapterId { get; set; } // Внешний ключ для Chapter

    // Навигационное свойство для связи с Chapter
    public Chapter Chapter { get; set; }
}
