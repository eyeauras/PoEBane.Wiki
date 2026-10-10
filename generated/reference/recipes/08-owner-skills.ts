// One helper works for Skills, WeaponSwapSkills and any entity's Skills.
// Keywords: summons, totems, deployed, owner, weapon swap, reagent
function liveSummons(skills: Poe2SkillsAccessor, name: string): number | null {
  const deployed = skills[name].DeployedEntities; // null while unknown, not 0
  return deployed === null ? null : deployed.filter(entity => entity.IsAlive).length;
}

OnTimer(1000).Do(() => {
  const name = "replace_with_skill_name";
  Log(`Active: ${liveSummons(Skills, name)}, swap: ${liveSummons(WeaponSwapSkills, name)}`);
  const player = Player;
  if (player !== null) {
    Log(`Player: ${liveSummons(player.Skills, name)}`);
    // Duplicate named instances stay separate; use AllBuffs/Current when every row matters.
    Log(`Bleeding instances: ${player.Buffs.AllBuffs.filter(buff => buff.Name === "bleeding").length}`);
  }
});
