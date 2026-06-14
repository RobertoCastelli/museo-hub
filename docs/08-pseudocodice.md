# Pseudocodice

_Questo documento raccoglie il pseudocodice delle principali logiche applicative del prototipo MuseoHub._
_Descrive in modo indipendente dal linguaggio di programmazione i passaggi logici più importanti prima dell'implementazione del backend._

---

## Prenotazione guest

```text
FUNZIONE creaPrenotazione(event_id, visitor_name, visitor_email, participants)
    IF uno dei dati è mancante
        return errore "dati obbligatori mancanti"
    IF participants <= 0 OR participants > 4
        return errore "numero partecipanti non valido"
    IF event_id non è valido
        return errore "id evento non valido"
    IF event_id non esiste
        return errore "evento non trovato"
    IF evento non è attivo
        return errore "evento non prenotabile"
    IF available_slots evento < participants
        return errore "disponibilità insufficiente"

    codice = creaCodicePrenotazione()
    salvaPrenotazione(event_id, visitor_name, visitor_email, participants, codice)
    aggiornaAvailableSlots(event_id, participants)

    return conferma con codice prenotazione
FINE FUNZIONE
```

## Generazione codice prenotazione

```text
FUNZIONE creaCodicePrenotazione()
    codice = generaCodiceTemporaneo()
    WHILE codice esiste già tra le prenotazioni
        codice = generaCodiceTemporaneo()

    return codice
FINE FUNZIONE
```

## Invio feedback tramite codice prenotazione

```text
FUNZIONE registraFeedback(booking_code, rating, comment)
    IF booking_code è mancante
        return errore "codice prenotazione mancante"
    IF rating è mancante OR rating < 1 OR rating > 5
        return errore "valutazione non valida"

    cerca prenotazione tramite booking_code

    IF prenotazione non esiste
        return errore "codice prenotazione non valido"

    recupera event_id dalla prenotazione

    salvaFeedback(event_id, booking_code, rating, comment)

    return conferma registrazione feedback
FINE FUNZIONE
```

## Calcola dashboard

```text
FUNZIONE calcolaDashboard()
    totale_eventi = conta eventi registrati
    totale_prenotazioni = conta prenotazioni registrate
    totale_feedback = conta feedback registrati
    valutazione_media = calcola media delle valutazioni

    return totale_eventi,
           totale_prenotazioni,
           totale_feedback,
           valutazione_media
FINE FUNZIONE
```

Diagramma di riferimento:

- [Sequence prenotazione](diagrams/sequence-prenotazione.md)
