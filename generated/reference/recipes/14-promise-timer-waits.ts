// Explicit Promise wrappers remain supported. Prefer Sleep for simple sequential scripts.
function waitMs(milliseconds: number) {
  return new Promise<void>(resolve => setTimeout(resolve, milliseconds));
}

OnTimer(100)
  .If(() => Ai.IsActive(Poe2Behavior.AutoFollow)
    && (Party.Leader?.DistanceToPlayer ?? 0) > 500)
  .Do(async () => {
    Input.KeyDown(Key.Space);
    try {
      await waitMs(1000 + Math.floor(Math.random() * 201));
    } finally {
      Input.KeyUp(Key.Space);
    }
    await waitMs(50 + Math.floor(Math.random() * 51));
  });

// The returned Promise keeps this rule busy through both waits.
// Stop abandons pending continuation without JS finally; the host releases held input.
