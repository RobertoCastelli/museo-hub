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

## Test API prenotazioni

### POST /api/bookings — prenotazione valida

**Obiettivo:** verificare la creazione di una prenotazione guest per un evento esistente.
**Dati inviati:** identificativo evento, nome visitatore, email e numero partecipanti.
**Risultato atteso:** creazione della prenotazione, restituzione del codice prenotazione e risposta `201 Created`.
**Esito:** superato.
**Screenshot:** `docs/screenshots/08-api-booking-success.png`

### POST /api/bookings — numero partecipanti non valido

**Obiettivo:** verificare il blocco di prenotazioni con più di 4 partecipanti.
**Risultato atteso:** risposta di errore gestita con stato `400`.
**Esito:** superato.
**Screenshot:** `docs/screenshots/09-api-booking-invalid-participants.png`

### POST /api/bookings — evento inesistente

**Obiettivo:** verificare la gestione di una prenotazione riferita a un evento non presente nel database.
**Risultato atteso:** risposta di errore gestita con stato `404`.
**Esito:** superato.
**Screenshot:** `docs/screenshots/10-api-booking-event-not-found.png`

### POST /api/bookings — dati mancanti

**Obiettivo:** verificare la validazione dei campi obbligatori.
**Risultato atteso:** risposta di errore gestita con stato `400`.
**Esito:** superato.
**Screenshot:** `docs/screenshots/11-api-booking-missing-fields.png`

### GET /api/events/1 — verifica aggiornamento posti

**Obiettivo:** verificare che, dopo una prenotazione valida, i posti disponibili dell’evento vengano aggiornati nel database.
**Risultato atteso:** valore `available_slots` diminuito in base al numero di partecipanti prenotati.
**Esito:** superato.
**Screenshot:** `docs/screenshots/12-api-booking-updated-slots.png`

## Test API feedback

### POST /api/feedback — invio feedback valido

**Obiettivo:** verificare il salvataggio di un feedback collegato a una prenotazione esistente.
**Dati inviati:** codice prenotazione, valutazione numerica e commento.
**Risultato atteso:** registrazione del feedback e risposta `201 Created`.
**Esito:** superato.
**Screenshot:** `docs/screenshots/13-api-feedback-success.png`

### POST /api/feedback — rating non valido

**Obiettivo:** verificare la validazione della valutazione numerica.
**Risultato atteso:** risposta di errore gestita con stato `400`.
**Esito:** superato.
**Screenshot:** `docs/screenshots/14-api-feedback-invalid-rating.png`

### POST /api/feedback — codice prenotazione inesistente

**Obiettivo:** verificare la gestione di un feedback riferito a una prenotazione non presente nel database.
**Risultato atteso:** risposta di errore gestita con stato `404`.
**Esito:** superato.
**Screenshot:** `docs/screenshots/15-api-feedback-booking-not-found.png`
