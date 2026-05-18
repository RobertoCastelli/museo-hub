# Modello dati

_Questo diagramma rappresenta il modello dati preliminare di MuseoHub._  
_Mostra le entità principali e le relazioni previste tra eventi, prenotazioni, feedback e amministratore._

---

```mermaid
erDiagram
    EVENTS ||--o{ BOOKINGS : riceve
    EVENTS ||--o{ FEEDBACK : raccoglie
    BOOKINGS ||--o| FEEDBACK : collega
    ADMIN_USERS ||--o{ EVENTS : gestisce

    EVENTS {
        integer id PK
        string title
        string description
        datetime date
        integer max_capacity
        integer available_slots
        string status
    }

    BOOKINGS {
        integer id PK
        integer event_id FK
        string booking_code
        string visitor_name
        string visitor_email
        integer participants
        string status
    }

    FEEDBACK {
        integer id PK
        integer event_id FK
        string booking_code
        integer rating
        string comment
    }

    ADMIN_USERS {
        integer id PK
        string username
        string role
    }
```
