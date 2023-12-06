// Файл: Data/ApplicationDbContext.cs

using MangaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace MangaApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        // ... существующий код ...

        public DbSet<Chapter> Chapters { get; set; }
        public DbSet<ChapterImage> ChapterImages { get; set; }
        public DbSet<Manga> Mangas { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // ... существующий код ...

            // Настройка связей
            modelBuilder.Entity<Chapter>()
                .HasOne(c => c.Manga)
                .WithMany(m => m.Chapters)
                .HasForeignKey(c => c.MangaId);

            modelBuilder.Entity<ChapterImage>()
                .HasOne(ci => ci.Chapter)
                .WithMany(c => c.Images)
                .HasForeignKey(ci => ci.ChapterId);
        }
    }
}
