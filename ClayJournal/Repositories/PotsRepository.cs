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

        public void Delete(int potId)
        {
            var pot = _context.Pots.Find(potId);
            if (pot is null)
            {
                return;
            }
            _context.Remove(pot);
            _context.SaveChanges();
        }

        public List<Pot> GetAll()
        {
            var pots = _context.Pots.ToList();
            return pots;
        }

        public Pot GetById(int potId)
        {
            Pot pot = _context.Pots.Find(potId);
            return pot;
        }

        public List<Pot> GetByUserId(int userId)
        {
            List<Pot> pots = _context.Pots.Where(x => x.UserId == userId).ToList();
            return pots;
        }
    }
}
