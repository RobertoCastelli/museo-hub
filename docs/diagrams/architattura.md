# Architettura

_Questo diagramma rappresenta l’architettura applicativa preliminare di MuseoHub._  
_Mostra la comunicazione tra front-end, back-end, database e servizi di deploy._

---

```mermaid
flowchart LR
    U[Visitatore / Amministratore] --> FE[Front-end React + Vite]

    FE -->|Richieste HTTP / API REST| BE[Back-end Node.js + Express]

    BE -->|Query e aggiornamenti| DB[(SQLite Database)]

    DB -->|Dati persistenti| BE
    BE -->|Risposte JSON| FE

    FE -. deploy .-> NET[Netlify]
    BE -. deploy .-> REN[Render]
```

## Nota sul livello di dettaglio

Il diagramma rappresenta l’architettura preliminare del prototipo.  
Gli endpoint specifici saranno descritti nel documento dedicato alle API.
