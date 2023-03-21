using Microsoft.EntityFrameworkCore;

namespace ClayJournal.DataAccess
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        //public DbSet<Pots>
    }

}
