const ARROW_LENGTH: number = 20;

OnTimer(0).Do(() => {
  const player = Player;
  const leader = Party.Leader;
  const leaderEntity = leader ? World.PlayerByName(leader.Name) : null;
  if (!player || !leaderEntity || !leaderEntity.WorldPosition) {
    return;
  }

  const start = player.WorldPosition;
  const direction = player.directionTo(leaderEntity);
  if (!direction) {
    return;
  }

  const end = {
    X: start.X + direction.X * ARROW_LENGTH,
    Y: start.Y + direction.Y * ARROW_LENGTH,
    Z: start.Z + direction.Z * ARROW_LENGTH,
  };
  Osd.DrawArrowInWorld(start, end, { R: 120, G: 188, B: 255, A: 255 }, 3);
});
