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

        public void Create(Pot pot)
        {
            _context.Add(pot);
            _context.SaveChanges();
        }

        public List<Pot> Get()
        {
            var pots = _context.Pots.ToList();
            return pots;
        }
    }
}
