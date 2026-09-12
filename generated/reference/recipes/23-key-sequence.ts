// F6: два настроенных игровых действия с паузой 300 мс.
OnHotkey("F6")
  .If(() => !IsInPeacefulArea)
  .Do(() => {
    PressKey("Q");
    Sleep(300);
    PressKey("W");
  });
