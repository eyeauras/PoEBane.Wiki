// Таймер ждёт завершения Do, затем отсчитывает следующие 250 мс.
OnTimer(250)
  .If(() => Vitals.HP.Current === 0)
  .Do(() => {
    Log("Персонаж погиб");
    WaitUntil(() => Vitals.HP.Current > 0);
    Log("Персонаж ожил");
  });
