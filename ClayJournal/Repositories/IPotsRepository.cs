using ClayJournal.Models;

namespace ClayJournal.Repositories
{
    public interface IPotsRepository
    {
        public List<Pot> Get();
        public void Create(Pot pot);
    }
}
