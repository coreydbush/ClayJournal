using ClayJournal.Models;
using ClayJournal.Repositories;

namespace ClayJournal.Managers
{
    public class PotsManager : IPotsManager
    {
        private readonly IPotsRepository _potsRepository;
        public PotsManager(IPotsRepository potsRepository)
        {
            _potsRepository = potsRepository;
        }
        public List<Pot> Get()
        {
            var results = _potsRepository.Get();
            return results;
        }
    }
}
