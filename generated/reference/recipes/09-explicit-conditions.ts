// Conditions belong to this rule: no automatic town/hideout policy is installed.
// Unknown area flags default to false, so their negation passes too.
OnTimer(1000)
  .If(() => !IsInTown && !IsInHideout && !IsInEscapeMenu)
  .Do(() => Log("Outside town and hideout; escape menu is closed."));

// Area.Current and the explicit NotInTown/NotInHideout guards are available when knowledge matters.
