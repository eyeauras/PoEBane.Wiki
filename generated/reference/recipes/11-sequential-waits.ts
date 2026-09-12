// Ordinary helpers and forEach remain sequential; no async or await is needed.
function showItem(item: string) {
  Info(`Starting ${item}`);
  Sleep(1000);
  Info(`Finished ${item}`);
}

OnTimer(500).Do(() => {
  ["first", "second", "third"].forEach(showItem);
  Info("All finished; the next run starts after another 500 ms");
});

// This independent rule can finish while the first rule is sleeping.
OnTimer(100).Do(() => {
  Wait(300);
  Info("Independent rule completed");
});
