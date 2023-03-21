using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ClayJournal.Models;

public partial class PotteryLogContext : DbContext
{
    public PotteryLogContext()
    {
    }

    public PotteryLogContext(DbContextOptions<PotteryLogContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Brand> Brands { get; set; }

    public virtual DbSet<Clay> Clays { get; set; }

    public virtual DbSet<Glaze> Glazes { get; set; }

    public virtual DbSet<Pot> Pots { get; set; }

    public virtual DbSet<PotGlaze> PotGlazes { get; set; }

    public virtual DbSet<PotType> PotTypes { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.;Database=PotteryLog;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Brand>(entity =>
        {
            entity.HasNoKey();

            entity.Property(e => e.BrandId).ValueGeneratedOnAdd();
            entity.Property(e => e.DisplayName).HasMaxLength(500);
        });

        modelBuilder.Entity<Clay>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Clay");

            entity.Property(e => e.ClayId).ValueGeneratedOnAdd();
            entity.Property(e => e.ClayName).HasMaxLength(500);
        });

        modelBuilder.Entity<Glaze>(entity =>
        {
            entity.HasNoKey();

            entity.Property(e => e.DisplayName).HasMaxLength(500);
            entity.Property(e => e.GlazeId).ValueGeneratedOnAdd();
        });

        modelBuilder.Entity<Pot>(entity =>
        {
            entity.HasNoKey();

            entity.Property(e => e.PotDescription).HasMaxLength(1000);
            entity.Property(e => e.PotId).ValueGeneratedOnAdd();
            entity.Property(e => e.PotName).HasMaxLength(500);
        });

        modelBuilder.Entity<PotGlaze>(entity =>
        {
            entity.HasNoKey();

            entity.Property(e => e.GlazeId).HasMaxLength(500);
            entity.Property(e => e.PotGlazeId).ValueGeneratedOnAdd();
            entity.Property(e => e.PotId).HasMaxLength(500);
        });

        modelBuilder.Entity<PotType>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("PotType");

            entity.Property(e => e.DisplayName).HasMaxLength(500);
            entity.Property(e => e.PotTypeId).ValueGeneratedOnAdd();
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
