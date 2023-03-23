using ClayJournal.Dtos;
using ClayJournal.Models;

namespace ClayJournal.Managers
{
    public interface IPotsManager
    {
        public List<Pot> GetAll();
        public List<Pot> GetByUserId(int userId);
        public Pot GetById(int potId);
        public void Create(PotDto pot);
        public void Delete(int potId);
    }
}
