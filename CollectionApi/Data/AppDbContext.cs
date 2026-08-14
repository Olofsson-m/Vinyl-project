using Microsoft.EntityFrameworkCore;
using CollectionApi.Models;

namespace CollectionApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<VinylRecord> VinylRecords { get; set; }
    }
}