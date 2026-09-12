// Фласка здоровья при HP ниже 70%, если её эффект ещё не действует.
OnTimer(100)
  .If(() => Vitals.HP.Percent < 70 &&
    Flasks.Flask1.CanBeUsed && !Flasks.Flask1.Active)
  .Cooldown(500)
  .Do(() => Flasks.Flask1.Use());
