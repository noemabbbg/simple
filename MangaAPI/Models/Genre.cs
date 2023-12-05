using System;
namespace MangaAPI.Models
{
	public class Genre
	{
		public int Id { get; set; }
		public string name { get; set;  }
        public List<Manga> Mangas { get; set; }
    }
}

