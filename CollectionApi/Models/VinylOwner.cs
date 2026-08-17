namespace CollectionApi.Models
{
    public class VinylOwner
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public ICollection<VinylRecord> VinylRecords { get; set; } = new List<VinylRecord>();
    }
}