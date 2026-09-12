// Замените имя баффа; E должна включать соответствующий эффект.
const buffName = "my_guard_buff";

OnTimer(250)
  .If(() => !IsInPeacefulArea &&
    (!Buffs[buffName].Exists || Buffs[buffName].TimeLeft < 2))
  .Cooldown(1000)
  .Do(() => PressKey("E"));
