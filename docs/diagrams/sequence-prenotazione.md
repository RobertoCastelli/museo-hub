# Sequence prenotazione

_Questo diagramma rappresenta il flusso tecnico della prenotazione guest._  
_Mostra l’interazione tra visitatore, front-end, back-end e database durante verifica disponibilità, salvataggio e restituzione del codice prenotazione._

---

```mermaid
sequenceDiagram
    actor V as Visitatore
    participant FE as Front-end React
    participant BE as Back-end Express
    participant DB as Database SQLite

    V->>FE: Compila form prenotazione
    FE->>BE: POST /api/bookings
    BE->>BE: Valida dati ricevuti
    BE->>DB: Cerca evento tramite event_id
    DB-->>BE: Restituisce dati evento

    alt Dati non validi o evento inesistente
        BE-->>FE: Errore validazione
        FE-->>V: Mostra messaggio errore
    else Disponibilità insufficiente
        BE-->>FE: Errore disponibilità
        FE-->>V: Mostra indisponibilità
    else Disponibilità sufficiente
        BE->>BE: Genera booking_code
        BE->>DB: Salva prenotazione
        BE->>DB: Aggiorna available_slots
        DB-->>BE: Conferma operazioni
        BE-->>FE: Conferma con booking_code
        FE-->>V: Mostra codice prenotazione
    end
```
