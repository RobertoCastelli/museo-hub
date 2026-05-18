# Casi d’uso

_Questo documento descrive gli attori del sistema e i principali casi d’uso del prototipo MuseoHub._
_Serve a rappresentare le interazioni tra visitatore, amministratore e piattaforma, prima della progettazione tecnica dettagliata._

---

## Attori

I casi d’uso considerano due attori principali, già individuati nei requisiti:

- **Visitatore**
- **Amministratore**

## Casi d’uso principali

| Codice | Attore         | Caso d’uso                    | Descrizione sintetica                                            |
| ------ | -------------- | ----------------------------- | ---------------------------------------------------------------- |
| UC01   | Visitatore     | Consultare catalogo           | Il visitatore visualizza eventi o servizi culturali disponibili. |
| UC02   | Visitatore     | Visualizzare dettaglio evento | Il visitatore consulta le informazioni principali di un evento.  |
| UC03   | Visitatore     | Effettuare prenotazione guest | Il visitatore invia una prenotazione senza registrazione.        |
| UC04   | _Sistema_      | Generare codice prenotazione  | Il sistema conferma la prenotazione e mostra un codice a video.  |
| UC05   | Visitatore     | Inviare feedback              | Il visitatore invia un feedback usando il codice prenotazione.   |
| UC06   | Amministratore | Gestire eventi                | L’amministratore crea, modifica o elimina eventi.                |
| UC07   | Amministratore | Consultare prenotazioni       | L’amministratore visualizza le prenotazioni ricevute.            |
| UC08   | Amministratore | Consultare feedback           | L’amministratore visualizza i feedback inviati.                  |
| UC09   | Amministratore | Visualizzare dashboard        | L’amministratore consulta indicatori minimi sulle attività.      |

Diagramma di riferimento:

- [Diagramma casi d’uso](diagrams/casi-uso.md)
