// Dread Banner рядом с редким противником, с учётом реальной игровой привязки.
OnTimer(250)
  .If(() => !IsInPeacefulArea &&
    MonsterCount(60, MonsterRarity.AtLeastRare) > 0)
  .Cooldown(1000)
  .Do(() => {
    const slot = World.SkillBar.Slots?.find(slot =>
      slot.Skill.InternalId === "dread_banner" &&
      slot.Skill.CanUseSkill === true);

    if (slot) {
      slot.Press();
    }
  });
