const READY_COLOR: Color = { R: 80, G: 220, B: 120, A: 255 };
const WAIT_COLOR: Color = { R: 255, G: 160, B: 60, A: 255 };
const TEXT_COLOR: Color = { R: 255, G: 245, B: 220, A: 255 };

OnTimer(0).Do(() => {
  drawFlaskPanel();
  drawSkillCooldownSummary();
});

function drawFlaskPanel(): void {
  for (let slot = 0; slot < World.Flasks.Count; slot++) {
    const flask = World.Flasks.ByIndex(slot);
    if (!flask || !flask.HasItem) {
      continue;
    }

    const rect = World.Flasks.TryGetSlotClientRect(slot);
    if (!rect) {
      continue;
    }

    const color = flask.CanBeUsed ? READY_COLOR : WAIT_COLOR;
    Osd.DrawRectInClient(rect, color, 2);

    if (flask.Hotkey) {
      Osd.DrawTextInClient({ X: rect.X + 3, Y: rect.Y + 2 }, flask.Hotkey, TEXT_COLOR);
    }

    if (!flask.CanBeUsed) {
      Osd.DrawTextInClient(
        { X: rect.X + 8, Y: rect.Y + rect.Height - 16 },
        `${flask.Charges}/${flask.ChargesPerUse}`,
        WAIT_COLOR,
      );
    }
  }
}

function drawSkillCooldownSummary(): void {
  let row = 0;
  for (const skill of World.Skills.AllSkills) {
    if (!skill.Exists) {
      continue;
    }

    const cooldown = cooldownLeft(skill);
    if (skill.CanBeUsed && cooldown <= 0) {
      continue;
    }

    Osd.DrawTextInClient(
      { X: 18, Y: 180 + row * 14 },
      `${skill.Name}: ${formatSeconds(cooldown)}`,
      skill.CanBeUsed ? READY_COLOR : WAIT_COLOR,
    );
    row++;
    if (row >= 8) {
      break;
    }
  }
}

function cooldownLeft(skill: SkillInfo): number {
  let left = 0;
  for (const value of skill.Cooldowns || []) {
    left = Math.max(left, Number(value) || 0);
  }
  return left;
}

function formatSeconds(value: number): string {
  return value > 0 ? `${value.toFixed(1)}s` : "ready";
}
