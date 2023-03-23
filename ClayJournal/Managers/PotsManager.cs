using ClayJournal.Dtos;
using ClayJournal.Models;
using ClayJournal.Repositories;
using System.Runtime;

namespace ClayJournal.Managers
{
    public class PotsManager : IPotsManager
    {
        private readonly IPotsRepository _potsRepository;
        public PotsManager(IPotsRepository potsRepository)
        {
            _potsRepository = potsRepository;
        }

        public void Create(PotDto potDto)
        {
            var imageBytes = GetImageBytes(potDto.Image);
            var pot = new Pot
            {
                PotDescription = potDto.Description,
                PotImage = imageBytes,
                PotName = potDto.Name,
            };

            _potsRepository.Create(pot);
        }

        private byte[] GetImageBytes(IFormFile image)
        {
            using var memoryStream = new MemoryStream();
            image.CopyTo(memoryStream);
            var results = memoryStream.ToArray();
            return results;
        }

        public List<Pot> Get()
        {
            var results = _potsRepository.Get();
            return results;
        }
    }
}
