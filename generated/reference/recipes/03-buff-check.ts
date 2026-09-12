const BUFF_ID: string = "replace_with_buff_id";

OnTimer(250)
  .If(() => (Buffs.Current?.FindByDefinitionName(BUFF_ID).length ?? 0) > 0)
  .Cooldown(1000)
  .Do(() => {
    const buff = Buffs.Current?.FindByDefinitionName(BUFF_ID)[0];
    if (buff == null) {
      return;
    }
    Log(`${buff.DefinitionName}: ${buff.TimeRemainingSeconds?.toFixed(1) ?? "?"}s left`);
  });
