namespace ClayJournal.Dtos
{
    public class PotDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Notes { get; set; }
        public IFormFile Image { get; set; }
    }
}
