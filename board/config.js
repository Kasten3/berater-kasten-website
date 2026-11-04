// Kasten-Board – Einstellungen
// SUPABASE_KEY: der „anon“- bzw. „publishable“-Key aus dem NEUEN Board-Projekt in Supabase
//               (Project Settings → API Keys). Bleibt er leer, läuft das Board im Demo-Modus.
// API_BASE:     bleibt „/sb“ – die Anfragen laufen über berater-kasten.de (siehe vercel.json).
//               Dadurch sehen Firmen-Laptops nur eure eigene Domain.
window.BOARD_CONFIG = {
  API_BASE: '/sb',
  SUPABASE_KEY: 'sb_publishable_icYTA_PHFH04oc4jsVKTUQ_02FsKZox',
  POLL_MS: 2000
};
