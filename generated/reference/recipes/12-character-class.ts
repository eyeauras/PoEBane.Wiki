// Keywords: character, class, ascendancy, specialization, build, condition, unknown
// Read inside callbacks so switching character or ascendancy updates the condition.
OnTimer(1000)
  .If(() => Player?.CharacterClass?.Id === CharacterClass.Mercenary)
  .Do(() => Log("Current character is a Mercenary."));

// Stable record ID: Ascendancy.Witchhunter === "Mercenary2".
OnTimer(1000)
  .If(() => World.Player?.CharacterClass?.Ascendancy?.Id === Ascendancy.Witchhunter)
  .Do(() => Log("Witchhunter condition passed."));

OnTimer(5000).Do(() => {
  const player = Player;
  const characterClass = player?.CharacterClass;
  if (characterClass == null) {
    Log("Character class unavailable.");
    return;
  }
  // PlayerName is the chosen character name; Name fields are display text.
  Log(`${player?.PlayerName}: ${characterClass.Name} — ${characterClass.Ascendancy?.Name ?? "No ascendancy selected"}`);
});

// A negative filter must require known data; undefined !== an ID would pass accidentally.
OnTimer(5000)
  .If(() => {
    const characterClass = Player?.CharacterClass;
    return characterClass != null && characterClass.Id !== CharacterClass.Mercenary;
  })
  .Do(() => Log("Known class other than Mercenary."));
