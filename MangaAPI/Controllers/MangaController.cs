// Файл: Controllers/MangaController.cs

using MangaApi.Data;
using MangaAPI.Models;

using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class MangaController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public MangaController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> AddManga([FromBody] Manga manga)
    {
        _context.Mangas.Add(manga);
        await _context.SaveChangesAsync();
        return Ok(manga);
    }

    // Другие методы...
}
