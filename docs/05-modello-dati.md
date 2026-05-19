# Modello dati

_Questo documento descrive la progettazione della base dati del prototipo MuseoHub._
_Serve a definire entità, relazioni, tabelle, chiavi e vincoli principali necessari per gestire eventi, prenotazioni, feedback ed eventuali utenti amministratori._

---

## Struttura dati preliminare

In questa fase il modello dati viene definito a livello logico, senza considerarlo ancora come schema SQL definitivo.
I nomi dei campi potranno essere adattati durante l’implementazione del backend, mantenendo però la coerenza con le entità e le relazioni individuate.

## Entità principali

| Entità         | Descrizione                                                      |
| -------------- | ---------------------------------------------------------------- |
| Evento         | Evento, visita o servizio culturale prenotabile.                 |
| Prenotazione   | Richiesta effettuata da un visitatore senza registrazione.       |
| Feedback       | Valutazione semplice collegata a una prenotazione o a un evento. |
| Amministratore | Utente interno previsto per la gestione amministrativa.          |

## Dati principali per entità

### Evento

- id;
- titolo;
- descrizione;
- categoria;
- data o periodo di svolgimento;
- capienza massima;
- disponibilità residua;
- stato dell’evento.

### Prenotazione

- id;
- riferimento all’evento;
- Codice prenotazione;
- nome del visitatore;
- email del visitatore;
- numero di partecipanti;
- stato della prenotazione;
- data di creazione.

### Feedback

- id;
- riferimento all’evento;
- riferiemento alla prenotazione;
- nome del visitatore;
- valutazione;
- commento;
- data di invio.

### Amministratore

- id;
- username;
- credenziale protetta;
- ruolo semplice.

### Relazioni principali

| Relazione               | Descrizione                                                     |
| ----------------------- | --------------------------------------------------------------- |
| Evento → Prenotazione   | Un evento può ricevere più prenotazioni.                        |
| Prenotazione → Evento   | Ogni prenotazione è collegata a un solo evento.                 |
| Evento → Feedback       | Un evento può ricevere più feedback.                            |
| Prenotazione → Feedback | Un feedback può essere collegato a una prenotazione registrata. |
| Amministratore → Evento | L’amministratore può gestire eventi o servizi culturali.        |

### Vincoli logici

| Vincolo                         | Descrizione                                                                     |
| ------------------------------- | ------------------------------------------------------------------------------- |
| Prenotazione collegata a evento | Ogni prenotazione deve riferirsi a un evento esistente.                         |
| Codice prenotazione univoco     | Ogni prenotazione deve avere un codice identificativo non duplicato.            |
| Partecipanti validi             | Il numero di partecipanti deve essere compreso tra 1 e 4.                       |
| Disponibilità sufficiente       | La prenotazione viene accettata solo se la disponibilità residua è sufficiente. |
| Feedback collegato              | Il feedback deve essere riconducibile a una prenotazione o a un evento.         |
| Stato evento                    | Un evento può essere visibile o non visibile tramite uno stato.                 |

Diagramma di riferimento:

- [Modello dati](diagrams/modello-dati.md)
