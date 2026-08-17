using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CollectionApi.Data;
using CollectionApi.Models;

namespace VinylApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VinylController : ControllerBase
    {
        private readonly AppDbContext _context;

        public VinylController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<VinylRecord>>> GetVinylRecords()
        {
            return await _context.VinylRecords.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<VinylRecord>> CreateVinylRecord(VinylRecord vinylRecord)
        {
            _context.VinylRecords.Add(vinylRecord);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetVinylRecords), new { id = vinylRecord.Id }, vinylRecord);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<VinylRecord>> GetVinylRecord(Guid id)
        {
            var vinylRecord = await _context.VinylRecords.FindAsync(id);

            if (vinylRecord == null)
            {
                return NotFound();
            }

            return vinylRecord;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateVinylRecord(Guid id, VinylRecord vinylRecord)
        {
            // Säkerhetskontroll: matchar ID:t i URL:en med ID:t i objektet?
            if (id != vinylRecord.Id) return BadRequest();

            // Berätta för Entity Framework att detta objekt har ändrats
            _context.Entry(vinylRecord).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Om någon precis raderade skivan medan vi försökte uppdatera den
                if (!_context.VinylRecords.Any(e => e.Id == id)) return NotFound();
                throw;
            }

            return NoContent(); // 204 No Content är standard för en lyckad PUT
}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVinyl(Guid id)
        {
            // 1. Leta upp skivan i databasen
            var vinyl = await _context.VinylRecords.FindAsync(id);
            
            if (vinyl == null)
            {
                return NotFound(); // Skickar 404 om skivan inte finns
            }

            // 2. Säg till databasen att ta bort den
            _context.VinylRecords.Remove(vinyl);
            
            // 3. Spara ändringarna permanent
            await _context.SaveChangesAsync();

            return NoContent(); // 204: "Det gick bra, men jag har ingen data att skicka tillbaka"
        }
    }
}