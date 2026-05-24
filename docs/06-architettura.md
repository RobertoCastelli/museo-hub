# Architettura

_Questo documento descrive l’architettura applicativa del prototipo MuseoHub._
_Rappresenta la separazione tra frontend, backend, database e API, chiarendo il ruolo di ogni componente e le modalità di comunicazione tra le parti._

---

## Architettura generale

MuseoHub adotta un’architettura web client-server.

- Il frontend gestisce l’interfaccia utente e invia richieste HTTP al backend.
- Il backend rende disponibili endpoint API per leggere e inviare dati, gestisce la logica applicativa e comunica con il database.
- Il database conserva i dati relativi a eventi, prenotazioni, feedback ed eventuale accesso amministrativo.

## Componenti principali

| Componente      | Tecnologia                           | Responsabilità                                                                  |
| --------------- | ------------------------------------ | ------------------------------------------------------------------------------- |
| Frontend        | React + Vite                         | Interfaccia utente, navigazione, form e visualizzazione dati                    |
| Backend         | Node.js + Express                    | API REST, logica applicativa, validazione delle richieste e accesso ai dati     |
| Database        | SQLite                               | Persistenza strutturata di eventi, prenotazioni, feedback e dati amministrativi |
| Deploy frontend | Netlify                              | Pubblicazione dell’interfaccia web                                              |
| Deploy backend  | Render (se tecnicamente sostenibile) | Pubblicazione del servizio API                                                  |

## Frontend

Il frontend rappresenta il punto di accesso per visitatore e amministratore.

- visualizzare catalogo e dettaglio degli eventi;
- gestire il form di prenotazione guest;
- mostrare la conferma con codice prenotazione;
- consentire l’invio del feedback tramite codice prenotazione;
- visualizzare le sezioni amministrative;
- mostrare dati e indicatori ricevuti dal back-end.

## Backend

Il backend gestisce la logica applicativa del prototipo.

- rendere disponibili endpoint API;
- ricevere e validare richieste dal frontend;
- verificare la disponibilità residua prima della prenotazione;
- generare il codice prenotazione;
- salvare e leggere dati dal database;
- fornire dati per dashboard, prenotazioni, eventi e feedback.

## Database

SQLite viene utilizzato come database relazionale di prototipo.

Il database conserva in modo strutturato:

- eventi o servizi culturali;
- prenotazioni guest;
- feedback;
- eventuali dati amministrativi di supporto.

## Flusso di configurazione e utilizzo del database

```text
schema.sql
  definisce la struttura delle tabelle

database.js
  apre la connessione al file SQLite museohub.sqlite

initDb.js
  esegue schema.sql nel database

seedDb.js
  inserisce dati dimostrativi

eventsRoutes.js
  legge i dati dal database

app.js
  collega le route agli endpoint API

server.js
  avvia il backend
```

## Comunicazione tra componenti

La comunicazione tra frontend e backend avviene tramite richieste HTTP verso API REST.

Il flusso generale è:

1. il frontend invia una richiesta al backend;
2. il backend valida la richiesta;
3. il backend legge o modifica i dati nel database;
4. il backend restituisce una risposta al frontend;
5. il frontend aggiorna l’interfaccia utente.

Diagramma di riferimento:

- [Architettura](diagrams/architettura.md)
