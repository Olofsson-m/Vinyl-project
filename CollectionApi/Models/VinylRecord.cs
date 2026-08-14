namespace CollectionApi.Models
{
    public class VinylRecord
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Artist { get; set; }
        public int Year { get; set; }
        public string Genre { get; set; }
        public int PressYear { get; set; }
        
    }
}