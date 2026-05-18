# Modello dati

_Questo documento descrive la progettazione della base dati del prototipo MuseoHub._
_Serve a definire entità, relazioni, tabelle, chiavi e vincoli principali necessari per gestire eventi, prenotazioni, feedback ed eventuali utenti amministratori._

---

## Struttura dati preliminare

In questa fase il modello dati viene definito a livello logico, senza considerarlo ancora come schema SQL definitivo.
I nomi dei campi potranno essere adattati durante l’implementazione del backend, mantenendo però la coerenza con le entità e le relazioni individuate.

### Evento

L’entità Evento rappresenta un evento, una visita o un servizio culturale prenotabile.
Dati principali previsti:

- id;
- titolo;
- descrizione;
- categoria;
- data o periodo di svolgimento;
- capienza massima;
- posti disponibili;
- stato dell’evento.

### Prenotazione

L’entità Prenotazione rappresenta una richiesta effettuata da un visitatore senza registrazione.
Dati principali previsti:

- id;
- riferimento all’evento;
- Codice prenotazione;
- nome del visitatore;
- email del visitatore;
- numero di partecipanti;
- stato della prenotazione;
- data di creazione.

### Feedback

L’entità Feedback rappresenta una valutazione semplice collegata a un evento tramite eventuale prenotazione.
Dati principali previsti:

- id;
- riferimento all’evento;
- Codice prenotazione;
- nome del visitatore;
- valutazione;
- commento;
- data di invio.

### Amministratore

L’entità Amministratore è prevista solo se viene implementato un accesso amministrativo minimo.
Dati principali previsti:

- id;
- username;
- credenziale protetta;
- ruolo semplice.

Diagramma di riferimento:

- [Modello dati](diagrams/modello-dati.md)
