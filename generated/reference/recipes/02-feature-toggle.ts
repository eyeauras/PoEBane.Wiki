OnHotkey(Key.F5).Do(() => {
  // Read the live state through Ai, flip it through the behavior's own named setter.
  const next: boolean = !Ai.IsEnabled(Poe2Behavior.AutoPickup);
  SetAutoPickup(next);
  Osd.AddFloatingTextAtPlayer(next ? "Auto pickup on" : "Auto pickup off");
});
