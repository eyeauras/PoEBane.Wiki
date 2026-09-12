// PoeBane integration: refresh this overlay each frame; keep native handles in this callback.
const TEXT_COLOR: Color = { R: 255, G: 235, B: 150, A: 255 };
OnTimer(0).Do(() => {
  const window = GameUi.RitualWindow;
  if (!window?.IsVisible) return;
  const tribute = window.Tribute;
  const rewards = window.Rewards;
  Osd.DrawTextInClient({ X: 20, Y: 180 },
    `Tribute: ${tribute ?? "unknown"}; rewards: ${rewards?.length ?? "unknown"}`, TEXT_COLOR);
  if (rewards === null) {
    Osd.DrawTextInClient({ X: 20, Y: 200 }, window.ReadError ?? "Rewards unavailable", TEXT_COLOR);
    return;
  }
  for (const reward of rewards) {
    const rect = reward.Element.ClientRect;
    if (!rect) continue;
    Osd.DrawRectInClient(rect, TEXT_COLOR, 1);
    Osd.DrawTextInClient({ X: rect.X + 2, Y: rect.Y + 2 },
      formatCost(reward.NormalCost), TEXT_COLOR);
  }
});

// Application formatting: null is unknown, never a free item.
function formatCost(cost: number | null): string {
  return cost === null ? "cost unknown" : `${cost} Tribute`;
}
// This API does not yet establish that this is the final Ritual on the map.
// Do not retain reward/item/element handles across await or a later frame.
