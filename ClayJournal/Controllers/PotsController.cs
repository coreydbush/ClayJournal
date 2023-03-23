using ClayJournal.Dtos;
using ClayJournal.Managers;
using ClayJournal.Models;
using Microsoft.AspNetCore.Mvc;

namespace ClayJournal.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PotsController : ControllerBase
    {
        private readonly ILogger<PotsController> _logger;
        private readonly IPotsManager _potsManager;

        public PotsController(ILogger<PotsController> logger, IPotsManager potsManager)
        {
            _logger = logger;
            _potsManager = potsManager;
        }

        [HttpGet]
        public IEnumerable<Pot> GetAll()
        {
            var results = _potsManager.GetAll();
            return results;
        }

        
        [HttpGet("{potId}")]
        public ActionResult<Pot> GetPotsById(int potId)
        {
            var results = _potsManager.GetById(potId);
            if (results is null)
            {
                return NotFound();
            }
            return results;
        }

        [HttpGet("user/{userId}")]
        public ActionResult<IEnumerable<Pot>> GetPotsByUser(int userId)
        {
            var results = _potsManager.GetByUserId(userId);
            if (results is null || results.Count == 0)
            {
                return NotFound();
            }
            return results;
        }

        [HttpPost]
        public IActionResult Post([FromForm] PotDto pot)
        {
            _potsManager.Create(pot);
            return NoContent();
        }

        [HttpDelete("{potId}")]
        public IActionResult Delete(int potId)
        {
            _potsManager.Delete(potId);
            return NoContent();
        }
    }
}