// Requires AutoFollow and a leader with a known distance. Random uses standard JavaScript.
OnTimer(100)
  .If(() => Ai.IsActive(Poe2Behavior.AutoFollow)
    && (Party.Leader?.DistanceToPlayer ?? 0) > 500)
  .Do(() => {
    Input.KeyDown(Key.Space);
    try {
      Sleep(1000 + Math.floor(Math.random() * 201));
    } finally {
      Input.KeyUp(Key.Space);
    }
    Sleep(50 + Math.floor(Math.random() * 51));
  });

// Stop destroys this sequence without JS finally; the host releases tracked held input.
// No overlapping activation or backlog accumulates during the two pauses.
