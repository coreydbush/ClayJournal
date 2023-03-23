using ClayJournal.Models;

namespace ClayJournal.Repositories
{
    public interface IPotsRepository
    {
        public List<Pot> GetAll();
        public List<Pot> GetByUserId(int userId);
        public Pot GetById(int potId);
        public void Create(Pot pot);
        public void Delete(int potId);
    }
}
