# API

_Questo documento descrive le API REST previste per il prototipo MuseoHub_  
_Definisce il contratto preliminare di comunicazione tra frontend React, backend Express e database._

---

## Endpoint area pubblica

| Metodo | Endpoint          | Requisito           | Scopo                                                | Dati principali                            |
| ------ | ----------------- | ------------------- | ---------------------------------------------------- | ------------------------------------------ |
| GET    | `/api/events`     | RF01                | Restituire gli eventi visibili nel catalogo pubblico | eventi, disponibilità residua, stato       |
| GET    | `/api/events/:id` | RF02                | Restituire il dettaglio di un singolo evento         | dati evento, descrizione, capienza         |
| POST   | `/api/bookings`   | RF03,RF04,RF05,RF06 | Creare una prenotazione guest                        | evento, nome, email, partecipanti          |
| POST   | `/api/feedback`   | RF07                | Registrare un feedback tramite codice prenotazione   | codice prenotazione, valutazione, commento |

## Endpoint area amministrativa

| Metodo | Endpoint                | Requisito | Scopo                                       | Dati principali                                                    |
| ------ | ----------------------- | --------- | ------------------------------------------- | ------------------------------------------------------------------ |
| GET    | `/api/admin/events`     | RF08      | Consultare gli eventi lato amministratore   | elenco eventi                                                      |
| POST   | `/api/admin/events`     | RF08      | Creare un nuovo evento o servizio culturale | dati evento                                                        |
| PUT    | `/api/admin/events/:id` | RF08      | Modificare un evento esistente              | dati evento aggiornati                                             |
| DELETE | `/api/admin/events/:id` | RF08      | Eliminare o disattivare un evento           | identificativo evento                                              |
| GET    | `/api/admin/bookings`   | RF09      | Consultare le prenotazioni ricevute         | elenco prenotazioni                                                |
| GET    | `/api/admin/feedback`   | RF10      | Consultare i feedback inviati               | elenco feedback                                                    |
| GET    | `/api/admin/dashboard`  | RF11      | Restituire indicatori per la dashboard      | eventi, prenotazioni, partecipanti, feedback, riepilogo per evento |

## Errori principali previsti

- dati obbligatori mancanti;
- id evento non valido;
- evento non trovato;
- disponibilità residua insufficiente;
- codice prenotazione non valido;
- numero partecipanti non valido o superiore al limite previsto;
- valutazione feedback non valida;
- errore interno del server.
