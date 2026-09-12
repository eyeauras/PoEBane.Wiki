OnTimer(100)
  .If(() => Vitals.HP.Percent < 70 &&
    Flasks.Flask1.CanBeUsed && !Flasks.Flask1.Active)
  .Cooldown(500)
  .Do(() => World.Flasks.Use(0));

OnTimer(100)
  .If(() => Vitals.Mana.Percent < 70 &&
    Flasks.Flask2.CanBeUsed && !Flasks.Flask2.Active)
  .Cooldown(500)
  .Do(() => World.Flasks.Use(1));
