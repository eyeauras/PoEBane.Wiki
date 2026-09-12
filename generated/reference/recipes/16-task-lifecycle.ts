// PoeBane integration. Validators only read; task body actions are awaited.
const task = World.Tasks.Define("observe Ritual", HtnPriority.Normal,
  () => GameUi.RitualWindow?.IsVisible === true,
  async ctx => {
    await ctx.Checkpoint("wait for tribute", () => GameUi.RitualWindow?.IsVisible === true);
    await ctx.WaitUntil(() => (GameUi.RitualWindow?.Tribute ?? 0) > 0, 10_000);
    Log("Ritual has spendable tribute");
  });
OnTimer(1000).Do(() => Log(`${task.State}: ${task.PhaseName} ${task.Reason}`));

// A terminal task remains terminal. Call task.Rearm() to allow a new run.
// task.Cancel("user request") ends this run; task.Dispose() removes the definition.
// For controlled movement/input, use awaited ctx operations in the body.
// Global Sleep/WaitUntil use wall-clock scheduling; ctx.WaitUntil is an HTN operation.
