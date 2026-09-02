# API

_Questo documento descrive le API REST previste per il prototipo MuseoHub_  
_Definisce il contratto di comunicazione tra frontend React, backend Express e database SQLite._

---

## Endpoint area pubblica

| Metodo | Endpoint          | Requisito           | Scopo                                                | Dati principali                                 |
| ------ | ----------------- | ------------------- | ---------------------------------------------------- | ----------------------------------------------- |
| GET    | `/api/events`     | RF01                | Restituire gli eventi visibili nel catalogo pubblico | eventi, disponibilità residua, stato, image_key |
| GET    | `/api/events/:id` | RF02                | Restituire il dettaglio di un singolo evento         | dati evento, descrizione, capienza, image_key   |
| POST   | `/api/bookings`   | RF03,RF04,RF05,RF06 | Creare una prenotazione guest                        | evento, nome, email, partecipanti               |
| POST   | `/api/feedback`   | RF07                | Registrare un feedback tramite codice prenotazione   | codice prenotazione, valutazione, commento      |

## Endpoint area amministrativa

| Metodo | Endpoint                | Requisito | Scopo                                     | Dati principali                              |
| ------ | ----------------------- | --------- | ----------------------------------------- | -------------------------------------------- |
| GET    | `/api/admin`            | RF08      | Consultare gli eventi lato amministratore | elenco eventi                                |
| POST   | `/api/admin/events`     | RF08      | Creare un nuovo evento                    | dati evento e image_key                      |
| PUT    | `/api/admin/events/:id` | RF08      | Modificare un evento esistente            | dati evento aggiornati e image_key           |
| DELETE | `/api/admin/events/:id` | RF08      | Eliminare un evento dal catalogo          | identificativo evento                        |
| GET    | `/api/admin/bookings`   | RF09      | Consultare le prenotazioni ricevute       | prenotazione, evento, visitatore, email      |
| GET    | `/api/dashboard`        | RF11      | Restituire indicatori dashboard           | eventi, prenotazioni, feedback, rating medio |

## Errori principali previsti

- dati obbligatori mancanti;
- id evento non valido;
- evento non trovato;
- disponibilità residua insufficiente;
- codice prenotazione non valido;
- numero partecipanti non valido o superiore al limite previsto;
- valutazione feedback non valida;
- errore interno del server.
