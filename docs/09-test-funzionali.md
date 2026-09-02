# Test funzionali

_Questo documento raccoglie i test funzionali previsti ed eseguiti sul prototipo MuseoHub._
_Documenta scenari d’uso, risultati attesi, esito e screenshot utili alla validazione del sistema._

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

## Test integrazione frontend-backend

### Gestione primo caricamento del backend

**Obiettivo:** verificare che il frontend gestisca correttamente il tempo di attesa iniziale del backend Render quando il servizio è in sleep mode.  
**Risultato atteso:** visualizzazione di un messaggio di caricamento chiaro prima della comparsa degli eventi.  
**Esito:** superato.  
**Screenshot:** `docs/screenshots/27-frontend-sleepy-server.png`

### Visualizzazione catalogo eventi

**Obiettivo:** verificare il recupero e la visualizzazione degli eventi nel frontend React tramite API REST.  
**Risultato atteso:** caricamento dinamico del catalogo eventi dal backend Express con dati provenienti dal database SQLite.  
**Esito:** superato.  
**Screenshot:** `docs/screenshots/28-frontend-homepage-deploy.png`

### Visualizzazione dettaglio evento

**Obiettivo:** verificare che l’utente possa aprire il dettaglio di un evento e consultare le informazioni principali.  
**Risultato atteso:** visualizzazione di titolo, descrizione, data, disponibilità e form di prenotazione.  
**Esito:** superato.  
**Screenshot:** `docs/screenshots/29-frontend-event-detail-deploy.png`

### Creazione prenotazione guest

**Obiettivo:** verificare che un visitatore possa effettuare una prenotazione senza registrazione.  
**Risultato atteso:** salvataggio della prenotazione e visualizzazione del codice prenotazione.  
**Esito:** superato.  
**Screenshot:** `docs/screenshots/30-frontend-booking-confirmation-deploy.png`

### Invio feedback tramite booking code

**Obiettivo:** verificare che l’utente possa inviare un feedback utilizzando un codice prenotazione valido.  
**Risultato atteso:** registrazione del feedback e visualizzazione del messaggio di conferma.  
**Esito:** superato.  
**Screenshot:** `docs/screenshots/31-frontend-feedback-success-deploy.png`

## Test area amministrativa

### Visualizzazione dashboard amministrativa

**Obiettivo:** verificare la visualizzazione degli indicatori principali nell’area amministrativa.  
**Risultato atteso:** visualizzazione dei dati aggregati relativi a eventi, prenotazioni e feedback.  
**Esito:** superato.  
**Screenshot:** `docs/screenshots/32-admin-dashboard-deploy.png`

### Validazione creazione evento

**Obiettivo:** verificare che il sistema blocchi la creazione di un evento con posti disponibili superiori alla capacità massima.  
**Risultato atteso:** visualizzazione di un messaggio di errore e mancato salvataggio del dato non coerente.  
**Esito:** superato.  
**Screenshot:** `docs/screenshots/33-admin-add-event-validation.png`

### Creazione evento amministrativa

**Obiettivo:** verificare che l’amministratore possa creare un nuovo evento.  
**Risultato atteso:** salvataggio dell’evento e visualizzazione del messaggio di conferma.  
**Esito:** superato.  
**Screenshot:** `docs/screenshots/34-admin-add-event-success.png`

### Apertura form modifica evento

**Obiettivo:** verificare che l’amministratore possa avviare la modifica di un evento esistente e visualizzare il form precaricato con i dati già salvati.  
**Risultato atteso:** visualizzazione del form di modifica con i campi precompilati.  
**Esito:** superato.  
**Screenshot:** `docs/screenshots/35-admin-edit-event-form.png`

### Modifica evento amministrativa

**Obiettivo:** verificare che l’amministratore possa modificare i dati di un evento esistente.  
**Risultato atteso:** aggiornamento dell’evento e visualizzazione del messaggio di conferma.  
**Esito:** superato.  
**Screenshot:** `docs/screenshots/36-admin-edit-event-success.png`

### Conferma eliminazione evento

**Obiettivo:** verificare che l’eliminazione di un evento richieda una conferma esplicita.  
**Risultato atteso:** visualizzazione della richiesta di conferma prima della cancellazione.  
**Esito:** superato.  
**Screenshot:** `docs/screenshots/37-admin-delete-event-validation.png`

### Eliminazione evento amministrativa

**Obiettivo:** verificare che l’amministratore possa eliminare un evento esistente.  
**Risultato atteso:** rimozione dell’evento dalla lista e visualizzazione del messaggio di conferma.  
**Esito:** superato.  
**Screenshot:** `docs/screenshots/38-admin-delete-event-success.png`

### Aggiornamento catalogo dopo creazione evento

**Obiettivo:** verificare che un evento creato dall’area amministrativa sia visibile nel catalogo eventi pubblico.  
**Risultato atteso:** visualizzazione del nuovo evento nella homepage pubblica.  
**Esito:** superato.  
**Screenshot:** `docs/screenshots/39-admin-homepage-add-event.png`

### Accesso amministrativo tramite modale demo

**Obiettivo:** verificare che l’accesso all’area amministrativa avvenga tramite modale con credenziali demo.  
**Risultato atteso:** apertura del modale dalla voce `admin`, gestione dell’errore con credenziali errate e accesso alla pagina `/admin` con credenziali corrette.  
**Esito:** superato.  
**Screenshot:** `docs/screenshots/40-admin-access-modal.png`

### Gestione credenziali amministrative errate

**Obiettivo:** verificare che il sistema non consenta l’accesso all’area amministrativa con credenziali demo non valide.  
**Risultato atteso:** visualizzazione di un messaggio di errore e permanenza nel modale di accesso.  
**Esito:** superato.  
**Screenshot:** `docs/screenshots/41-admin-access-modal-failed.png`

### Visualizzazione immagini nel catalogo eventi

**Obiettivo:** verificare che gli eventi del catalogo pubblico mostrino immagini identificative associate tramite preset.  
**Risultato atteso:** ogni card evento visualizza un’immagine coerente con la chiave immagine salvata per l’evento, mantenendo le iniziali dinamiche come supporto grafico.  
**Esito:** superato.  
**Screenshot:** `docs/screenshots/42-homepage-event-images.png`

### Visualizzazione immagine nel dettaglio evento

**Obiettivo:** verificare che la pagina dettaglio evento mostri l’immagine identificativa associata all’evento selezionato.  
**Risultato atteso:** visualizzazione dell’immagine evento nella scheda dettaglio, con titolo, descrizione, data, posti disponibili e form di prenotazione invariati.  
**Esito:** superato.  
**Screenshot:** `docs/screenshots/43-event-detail-image.png`

### Selezione immagine evento lato amministratore

**Obiettivo:** verificare che l’amministratore possa selezionare un’immagine preset durante la creazione o modifica di un evento.  
**Risultato atteso:** presenza del campo `event image` nel form amministrativo e salvataggio della scelta nell’evento.  
**Esito:** superato.  
**Screenshot:** `docs/screenshots/44-admin-event-image-select.png`
