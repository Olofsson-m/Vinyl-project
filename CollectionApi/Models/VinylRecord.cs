namespace CollectionApi.Models
{
    public class VinylRecord
    {
        public Guid Id { get; set; }
        public required string Title { get; set; }
        public required string Artist { get; set; }
        public int ReleaseYear { get; set; }
        public string Genre { get; set; }
        public int PressYear { get; set; }
    }
}