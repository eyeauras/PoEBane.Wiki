// Key -> game binding -> hotbar slot (button) -> SkillInfo -> optional Press().
// Keywords: hotkey, keybind, keyboard, mouse, skill button, hotbar, slot, readiness, MCP
// This recipe only logs observations. It never presses a key or changes a game binding.
// World.SkillBar represents the player's active mouse/keyboard or WASD bar; controller is unavailable.
// A slot is not a UI Element: Press() sends its game hotkey at the current cursor, not a screen click.

function inspectSkillButtons(hotkey: Key | string) {
  // AllByHotkey is useful for diagnostics because it preserves duplicate assignments.
  // null = unavailable bar/config; [] = no match; one empty slot still has its Hotkey.
  const slots = World.SkillBar.AllByHotkey(hotkey);
  if (slots === null) return { hotkey, status: "unavailable", slots: null };
  return {
    hotkey,
    status: slots.length === 0 ? "unmatched" : slots.length > 1 ? "ambiguous" : "matched",
    slots: slots.map(slot => ({
      index: slot.Index,
      hotkey: slot.Hotkey,
      exists: slot.Skill.Exists,
      name: slot.Skill.Name,
      internalId: slot.Skill.InternalId,
      id: slot.Skill.Id,
      id2: slot.Skill.Id2,
      canBeUsed: slot.Skill.CanBeUsed,
      canBeUsedInUi: slot.Skill.CanBeUsedInUi,
    })),
  };
}

OnTimer(1000).Do(() => {
  // Key.W and "W" are equivalent; "Ctrl+W" is a different gesture.
  // Mouse aliases include "MouseLeft", "MouseMiddle", "MouseRight" and "Ctrl+MouseRight".
  Log(JSON.stringify([Key.W, Key.E, Key.R, "Ctrl+W", "MouseRight"].map(inspectSkillButtons)));
});

// Optional action helper: not called by this read-only recipe.
// Invoke from your own guarded/throttled rule when an actual skill press is wanted.
function pressReadySkillOn(hotkey: Key | string): boolean {
  if (World.IsChatOpen || World.IsInEscapeMenu) return false;
  // ByHotkey resolves one button. It throws on malformed input or multiple matching slots;
  // inspect AllByHotkey and fix the duplicate in game settings rather than guessing a slot.
  const slot = World.SkillBar.ByHotkey(hotkey);
  if (slot === null || slot.Hotkey === null || !slot.Skill.Exists) return false;
  if (!slot.Skill.CanBeUsed || slot.Skill.CanBeUsedInUi !== true) return false;
  return slot.Press(); // true = queued, not proof of a cast; readiness is the caller's policy.
}

// Re-resolve inside each evaluation; saved slot/SkillInfo scalar facts do not update themselves.
// Config normally refreshes every 100 ms. Before input dispatch the host refreshes it for the
// current memory frame and rejects changed session/skill/binding assignments. Input follows
// Automation/foreground gates and rejects already-held primary inputs or modifiers.
// Press also rejects a hotkey shared by multiple slots: selecting a slot cannot disambiguate input.
// Reads work in the background, but the GAME may leave its UI readiness flag stale there.
// CanBeUsedInUi=null means unreadable UI data; false is an unavailable, empty or unresolved skill.
// Hotkey=null means an unbound slot. Never substitute default QWERT keys or compact out empty slots.
// For a named skill, inspect World.SkillBar.Slots by Skill.InternalId or the exact Id/Id2 pair;
// one skill can occupy several slots. See 10-dread-banner-autofollow.ts for an action recipe.
// World.GameConfig.Input.GetHotkey("use_bound_skill5") reads an ACTION binding (not a skill).
// Check Input.IsAvailable to distinguish unavailable config from an unbound action; unknown
// actions/unsupported values throw when config is available. Do not derive slot indices from keys.

// AI / MCP investigation without replacing the user's persisted script:
// 1. Read this installed-build recipe/reference through the shared script-reference tools.
// 2. Call script_control_eval with plain JavaScript FUNCTION BODY source and an explicit return.
//    No TypeScript annotations/TSX, no OnTimer, no Press/Input calls are needed for inspection.
//    Example source:
//    const slots = World.SkillBar.AllByHotkey(Key.W);
//    return { available: World.GameConfig.Input.IsAvailable, slots: slots?.map(slot => ({
//      index: slot.Index, hotkey: slot.Hotkey, exists: slot.Skill.Exists,
//      name: slot.Skill.Name, ready: slot.Skill.CanBeUsedInUi
//    })) ?? null };
// 3. If the job is pending, use script_control_job_wait with its jobId; inspect errors explicitly.
// Return scalar projections like the above rather than opaque native handles.
// Eval is transient, but it can execute actions if you put them in its source; it is not a dry run.
