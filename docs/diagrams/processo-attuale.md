# Processo attuale

_Questo diagramma rappresenta il processo simulato prima dell’introduzione di MuseoHub._
_Serve a evidenziare la gestione frammentata di eventi, prenotazioni, disponibilità e feedback._

---

```mermaid
flowchart TD
    A[Il museo comunica eventi o servizi culturali] --> B[Il visitatore richiede informazioni o prenotazione]
    B --> C[Richiesta ricevuta tramite email, telefono o canale manuale]
    C --> D[Il personale verifica manualmente la disponibilità]
    D --> E{Posti disponibili?}

    E -->|Sì| F[Il personale annota la prenotazione]
    F --> G[Conferma manuale al visitatore]

    E -->|No| H[Comunicazione manuale di indisponibilità]

    F --> I[Dati distribuiti tra strumenti diversi]
    G --> I
    H --> I

    I --> L[Feedback raccolti in modo non strutturato]
    L --> M[Difficoltà nel monitorare presenze, attività e indicatori]
```
