using System;
using System.Collections.Generic;

namespace ClayJournal.Models;

public partial class PotGlaze
{
    public int PotGlazeId { get; set; }

    public string? PotId { get; set; }

    public string? GlazeId { get; set; }

    public byte? NumberOfCoats { get; set; }
}
