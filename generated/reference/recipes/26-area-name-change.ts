// Сообщить текущее имя области при первом чтении и каждом изменении имени.
let previousArea = "";

OnTimer(500).Do(() => {
  const area = AreaName;
  if (area !== "" && area !== previousArea) {
    Log("Область: " + area);
    previousArea = area;
  }
});
