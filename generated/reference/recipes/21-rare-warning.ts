// Предупреждение о редком или уникальном противнике в радиусе 60.
OnTimer(250)
  .If(() => MonsterCount(60, MonsterRarity.AtLeastRare) > 0)
  .Cooldown(5000)
  .Do(() => Osd.WithTtl(2000).AddFloatingTextAtPlayer("Опасный противник рядом"));
