using ClayJournal.Models;

namespace ClayJournal.Repositories
{
    public class PotsRepository : IPotsRepository
    {
        private readonly PotteryLogContext _context;
        public PotsRepository(PotteryLogContext context)
        {
            _context = context;
        }
        public List<Pot> Get()
        {
            var pots = _context.Pots.ToList();
            return pots;
        }
    }
}
