OnTimer(100)
  .If(() => {
    Sleep(50);
    return !Input.IsKeyDown(Key.F1);
  })
  .Do(() => {
    const pressed = WaitUntil(
      () => Input.IsKeyDown(Key.F1),
      { timeoutMs: 5000, pollIntervalMs: 50 },
    );
    Info(pressed ? "F1 pressed" : "Timed out");
  });
