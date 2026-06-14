# Diagramma casi d’uso

_Questo diagramma rappresenta gli attori principali di MuseoHub e le funzionalità con cui interagiscono._  
_Serve a sintetizzare le azioni previste per visitatore e amministratore._

---

```mermaid
flowchart LR
    V([Visitatore])
    A([Amministratore])

    subgraph PUB["Area pubblica MuseoHub"]
        direction TB
        UC01((UC01 Consultare catalogo))
        UC02((UC02 Visualizzare dettaglio evento))
        UC03((UC03 Effettuare prenotazione guest))
        UC04((UC04 Ricevere codice prenotazione))
        UC05((UC05 Inviare feedback tramite codice))
    end

    subgraph ADM["Area amministrativa MuseoHub"]
        direction TB
        UC06((UC06 Gestire eventi))
        UC07((UC07 Consultare prenotazioni))
        UC08((UC08 Visualizzare dashboard))
    end

    V --> UC01
    V --> UC02
    V --> UC03
    UC03 -. include .-> UC04
    V --> UC05

    A --> UC06
    A --> UC07
    A --> UC08
```
