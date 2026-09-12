// Фласка маны при запасе ниже 30%, если её эффект ещё не действует.
OnTimer(100)
  .If(() => Vitals.Mana.Percent < 30 &&
    Flasks.Flask2.CanBeUsed && !Flasks.Flask2.Active)
  .Cooldown(500)
  .Do(() => Flasks.Flask2.Use());
