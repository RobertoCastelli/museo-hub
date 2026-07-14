# Architettura

_Questo diagramma rappresenta l’architettura applicativa del prototipo MuseoHub._  
_Mostra la comunicazione tra frontend, backend, database e servizi di deploy._

---

```mermaid
flowchart LR
    U["Visitatore / Amministratore"] --> FE["Frontend React + Vite"]

    FE -->|"Richieste HTTP / API REST"| BE["Backend Node.js + Express"]

    BE -->|"Query e aggiornamenti"| DB[("Database SQLite")]
    DB -->|"Dati"| BE

    BE -->|"Risposte JSON"| FE

    FE -.-> NET["Deploy frontend: Netlify"]
    BE -.-> REN["Deploy backend: Render"]
```

## Flusso backend e database

```mermaid
flowchart TD
    APP["app.js"] --> EVENTS["eventsRoutes.js"]
    APP --> BOOKINGS["bookingsRoutes.js"]
    APP --> FEEDBACK["feedbackRoutes.js"]
    APP --> DASHBOARD["dashboardRoutes.js"]
    APP --> ADMIN["adminRoutes.js"]

    EVENTS --> DBJS["database.js"]
    BOOKINGS --> DBJS
    FEEDBACK --> DBJS
    DASHBOARD --> DBJS
    ADMIN --> DBJS

    DBJS --> SQLITE[("museohub.sqlite")]

    SCHEMA["schema.sql"] --> INIT["initDb.js"]
    SEED["seedDb.js"] --> INIT
    INIT --> SQLITE
```
