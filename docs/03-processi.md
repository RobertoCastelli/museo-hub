# Processi

_Questo documento descrive il processo attuale e il processo digitalizzato proposto._
_Confronta la gestione manuale o frammentata di catalogo, prenotazioni e feedback con il flusso digitale implementato nel prototipo MuseoHub._

---

## Processo attuale simulato

1. Il personale comunica eventi o servizi culturali tramite canali separati.
2. Il visitatore richiede una prenotazione tramite email, telefono o altro canale manuale.
3. Il personale verifica manualmente la disponibilità.
4. I dati della prenotazione vengono annotati in strumenti separati.
5. Eventuali feedback vengono raccolti senza un collegamento strutturato con l’evento.
6. Il personale ricostruisce manualmente il quadro delle presenze e delle attività svolte.

Diagramma di riferimento:

- [Processo attuale](diagrams/processo-attuale.md)

## Processo digitalizzato con MuseoHub

1. L’amministratore inserisce o aggiorna un evento nel sistema.
2. Il visitatore consulta il catalogo online.
3. Il visitatore apre il dettaglio dell’evento.
4. Il visitatore compila una prenotazione guest.
5. Il sistema verifica la disponibilità residua.
6. Il sistema salva la prenotazione nel database.
7. Il sistema restituisce un codice prenotazione a video.
8. Il visitatore può inviare un feedback usando il codice prenotazione.
9. L’amministratore consulta eventi, prenotazioni e indicatori sintetici tramite l’area amministrativa.

Diagramma di riferimento:

- [Processo digitalizzato](diagrams/processo-digitalizzato.md)

## Confronto sintetico

| Aspetto       | Processo attuale                      | Processo digitalizzato                   |
| ------------- | ------------------------------------- | ---------------------------------------- |
| Eventi        | Comunicazione tramite canali separati | Catalogo web centralizzato               |
| Prenotazioni  | Raccolta manuale                      | Form digitale                            |
| Disponibilità | Verifica manuale                      | Verifica automatica del sistema          |
| Conferma      | Comunicazione manuale                 | Codice prenotazione a video              |
| Feedback      | Raccolta non strutturata              | Feedback associato a prenotazione/evento |
| Monitoraggio  | Dati dispersi                         | Dashboard amministrativa minima          |
