# Diagramma casi d’uso

_Questo diagramma rappresenta gli attori principali di MuseoHub e le funzionalità con cui interagiscono._  
_Serve a sintetizzare le azioni previste per visitatore e amministratore._

---

```mermaid
flowchart LR
    Visitatore[Visitatore]
    Admin[Amministratore]

    UC01((Consultare catalogo))
    UC02((Visualizzare dettaglio evento))
    UC03((Effettuare prenotazione guest))
    UC04((Ricevere codice prenotazione))
    UC05((Inviare feedback))

    UC06((Gestire eventi))
    UC07((Consultare prenotazioni))
    UC08((Consultare feedback))
    UC09((Visualizzare dashboard))

    Visitatore --> UC01
    Visitatore --> UC02
    Visitatore --> UC03
    UC03 --> UC04
    Visitatore --> UC05

    Admin --> UC06
    Admin --> UC07
    Admin --> UC08
    Admin --> UC09
```
