const HELD_KEY: Key = Key.Space;

OnHotkey(Key.F9).Do(() => {
  if (Input.IsKeyDown(HELD_KEY)) {
    Input.KeyUp(HELD_KEY);
  } else {
    Input.KeyDown(HELD_KEY);
  }
});
