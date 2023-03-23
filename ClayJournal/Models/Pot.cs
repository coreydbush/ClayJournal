using System;
using System.Collections.Generic;

namespace ClayJournal.Models;

public partial class Pot
{
    public int PotId { get; set; }

    public string? PotName { get; set; }

    public string? PotDescription { get; set; }

    public byte[]? PotImage { get; set; }

    public int UserId { get; set; }

    public string PotNotes { get; set; } = null!;
}
