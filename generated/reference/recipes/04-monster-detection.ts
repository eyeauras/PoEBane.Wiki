const DETECTION_RANGE: number = 45;

OnTimer(250)
  .If(() => Vitals.HP.Percent < 80 && MonsterCount(DETECTION_RANGE, MonsterRarity.AtLeastRare) > 0)
  .Cooldown(1000)
  .Do(() => Osd.AddFloatingTextAtPlayer("Rare nearby"));
