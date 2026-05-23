# Architettura

_Questo documento descrive l’architettura applicativa del prototipo MuseoHub._
_Rappresenta la separazione tra front-end, back-end, database e API, chiarendo il ruolo di ogni componente e le modalità di comunicazione tra le parti._

---

## Architettura generale

MuseoHub adotta un’architettura web client-server.

- Il front-end gestisce l’interfaccia utente e invia richieste HTTP al back-end.
- Il back-end rende disponibili endpoint API per leggere e inviare dati, gestisce la logica applicativa e comunica con il database.
- Il database conserva i dati relativi a eventi, prenotazioni, feedback ed eventuale accesso amministrativo.

## Componenti principali

| Componente       | Tecnologia        | Responsabilità                                                                  |
| ---------------- | ----------------- | ------------------------------------------------------------------------------- |
| Front-end        | React + Vite      | Interfaccia utente, navigazione, form e visualizzazione dati                    |
| Back-end         | Node.js + Express | API REST, logica applicativa, validazione delle richieste e accesso ai dati     |
| Database         | SQLite            | Persistenza strutturata di eventi, prenotazioni, feedback e dati amministrativi |
| Deploy front-end | Netlify           | Pubblicazione dell’interfaccia web                                              |
| Deploy back-end  | Render            | Pubblicazione del servizio API                                                  |

## Front-end

Il front-end rappresenta il punto di accesso per visitatore e amministratore.

- visualizzare catalogo e dettaglio degli eventi;
- gestire il form di prenotazione guest;
- mostrare la conferma con codice prenotazione;
- consentire l’invio del feedback tramite codice prenotazione;
- visualizzare le sezioni amministrative;
- mostrare dati e indicatori ricevuti dal back-end.

## Back-end

Il back-end gestisce la logica applicativa del prototipo.

- rendere disponibili endpoint API;
- ricevere e validare richieste dal front-end;
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
- eventuali dati amministrativi.

Lo schema fisico definitivo sarà precisato durante l’implementazione del backend, mantenendo coerenza con il modello dati preliminare.

## Comunicazione tra componenti

La comunicazione tra front-end e back-end avviene tramite richieste HTTP verso API REST.

Il flusso generale è:

1. il front-end invia una richiesta al back-end;
2. il back-end valida la richiesta;
3. il back-end legge o modifica i dati nel database;
4. il back-end restituisce una risposta al front-end;
5. il front-end aggiorna l’interfaccia utente.

Diagramma di riferimento:

- [Architettura](diagrams/architettura.md)
