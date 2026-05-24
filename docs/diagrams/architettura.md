# Architettura

_Questo diagramma rappresenta l’architettura applicativa preliminare di MuseoHub._  
_Mostra la comunicazione tra frontend, backend, database e servizi di deploy._

---

```mermaid
flowchart LR
    U[Visitatore / Amministratore] --> FE[Frontend React + Vite]

    FE -->|Richieste HTTP / API REST| BE[Backend Node.js + Express]

    BE -->|Query e aggiornamenti| DB[(SQLite Database)]

    DB -->|Dati persistenti| BE
    BE -->|Risposte JSON| FE

    FE -. deploy .-> NET[Netlify]
    BE -. deploy .-> REN[Render]
```

## Flusso backend e database

```mermaid
flowchart TD
    APP[app.js] --> EVENTS[eventsRoutes.js]
    APP --> BOOKINGS[bookingsRoutes.js]
    APP --> FEEDBACK[feedbackRoutes.js]
    APP --> DASHBOARD[dashboardRoutes.js]

    EVENTS --> DBJS[database.js]
    BOOKINGS --> DBJS
    FEEDBACK --> DBJS
    DASHBOARD --> DBJS

    DBJS --> SQLITE[(museohub.sqlite)]

    SCHEMA[schema.sql] --> INIT[initDb.js]
    INIT --> SQLITE

    SEED[seedDb.js] --> SQLITE
```
