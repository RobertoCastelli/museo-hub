# Processo digitalizzato

_Questo diagramma rappresenta il processo previsto con MuseoHub._
_Serve a mostrare il passaggio da una gestione manuale a un flusso digitale basato su catalogo, prenotazione guest, database e area amministrativa.\*_

---

```mermaid
flowchart TD
    A[Amministratore inserisce o aggiorna un evento] --> B[Evento pubblicato nel catalogo online]

    C[Visitatore consulta il catalogo] --> D[Visitatore apre il dettaglio evento]
    D --> E[Visitatore compila prenotazione guest]
    E --> F[Il sistema verifica la disponibilità]
    F --> G{Posti disponibili?}

    G -->|Sì| H[Il sistema salva la prenotazione nel database]
    H --> I[Il sistema genera un codice prenotazione]
    I --> J[Conferma visualizzata a video]

    G -->|No| K[Il sistema mostra messaggio di indisponibilità]

    J --> L[Visitatore può inviare feedback con codice prenotazione]
    L --> M[Feedback associato a prenotazione ed evento]

    H --> N[Amministratore consulta prenotazioni]
    M --> O[Amministratore consulta feedback]
    N --> P[Dashboard con indicatori minimi]
    O --> P
```
