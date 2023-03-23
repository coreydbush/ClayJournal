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
        public IEnumerable<Pot> Get()
        {
            var results = _potsManager.Get();
            return results;
        }

        [HttpPost]
        public IActionResult Post([FromForm] PotDto pot)
        {
            _potsManager.Create(pot);
            return NoContent();
        }
    }
}