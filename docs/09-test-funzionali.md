# Test funzionali

_Questo documento raccoglie i test funzionali previsti ed eseguiti sul prototipo MuseoHub._
_Documenta scenari d’uso, risultati attesi, risultati ottenuti, eventuali errori riscontrati e screenshot utili alla validazione del sistema._

---

## Test API eventi

### GET /api/events

**Obiettivo:** verificare il recupero della lista degli eventi attivi.
**Risultato atteso:** restituzione di un array JSON con gli eventi disponibili.
**Esito:** superato.
**Screenshot:** `docs/screenshots/04-api-events-list.png`

### GET /api/events/1

**Obiettivo:** verificare il recupero del dettaglio di un evento esistente.
**Risultato atteso:** restituzione di un oggetto JSON con i dati dell’evento richiesto.
**Esito:** superato.
**Screenshot:** `docs/screenshots/05-api-event-detail.png`

### GET /api/events/999

**Obiettivo:** verificare la gestione di un evento inesistente.
**Risultato atteso:** risposta di errore gestita con messaggio “Event not found”.
**Esito:** superato.
**Screenshot:** `docs/screenshots/06-api-event-not-found.png`

### GET /api/events/abc

**Obiettivo:** verificare la validazione di un identificativo evento non numerico.
**Risultato atteso:** risposta di errore gestita con messaggio “Invalid event ID”.
**Esito:** superato.
**Screenshot:** `docs/screenshots/07-api-event-invalid-id.png`
