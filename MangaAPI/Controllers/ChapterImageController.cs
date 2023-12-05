
using MangaApi.Data;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class ChapterImageController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ChapterImageController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    [Route("upload")]
    public async Task<IActionResult> UploadImage(IFormFile file, int chapterId)
    {
        if (file.Length > 0)
        {
            using (var ms = new MemoryStream())
            {
                file.CopyTo(ms);
                var fileBytes = ms.ToArray();
                var chapterImage = new ChapterImage { ImageData = fileBytes, ChapterId = chapterId };
                _context.ChapterImages.Add(chapterImage);
                await _context.SaveChangesAsync();
                return Ok(chapterImage.Id);
            }
        }
        return BadRequest("Invalid file");
    }

    // Другие методы...
}
