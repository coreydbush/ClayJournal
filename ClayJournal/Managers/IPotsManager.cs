using ClayJournal.Dtos;
using ClayJournal.Models;

namespace ClayJournal.Managers
{
    public interface IPotsManager
    {
        public List<Pot> Get();
        public void Create(PotDto pot);
    }
}
