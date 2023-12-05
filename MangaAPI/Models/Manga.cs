﻿using System;
namespace MangaAPI.Models
{
	public class Manga
	{
		public int Id { get; set; }
		public float rating { get; set; }
		public List<Genre> Genres {get; set;}
        public List<Chapter> Chapters { get; set; }


    }
}

