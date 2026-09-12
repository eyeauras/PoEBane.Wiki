// Uses Dread Banner's actual binding in the game's active mouse/WASD hotbar.
// Keywords: banner, glory, autofollow, readiness, combat, area
// "Combat area" here means a known area outside town/hideout, not actual combat.
function readyBannerSlot() {
  return World.SkillBar.Slots?.find(slot =>
    slot.Hotkey !== null && slot.Skill.InternalId === "dread_banner" &&
    slot.Skill.Exists && slot.Skill.CanBeUsed && slot.Skill.CanBeUsedInUi === true);
}

OnTimer(250)
  .If(() => {
    // IsEnabled reads the AutoFollow toggle; IsActive also includes the Automation gate.
    if (!World.Ai.IsEnabled(Poe2Behavior.AutoFollow) || !World.NotInPeacefulArea) {
      return false;
    }
    if (World.IsChatOpen || World.IsInEscapeMenu) return false;

    // Look up on each evaluation: retaining SkillInfo would retain older scalar facts.
    return readyBannerSlot() !== undefined;
  })
  // Input throttle, not the skill's cooldown or a Glory requirement calculation.
  .Cooldown(1000)
  .Do(() => readyBannerSlot()?.Press());

// Unreadable button data gives null readiness. The game may leave UI flags stale in the background.
// Input execution also follows the host's Automation gates; this rule never enables AutoFollow.
// Do not replace readiness with Glory >= RequiredGlory: modifiers can lower the requirement.
