// Замените имя навыка; R должна быть его клавишей в игре.
const defensiveSkill = "my_defensive_skill";

OnTimer(100)
  .If(() => !IsInPeacefulArea && Vitals.HP.Percent < 50 &&
    MonsterCount(30) >= 5 && Skills[defensiveSkill].CanBeUsed)
  .Cooldown(1500)
  .Do(() => PressKey("R"));
