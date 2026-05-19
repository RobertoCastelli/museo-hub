# Requisiti

_Questo documento raccoglie i requisiti funzionali, non funzionali e i vincoli progettuali del prototipo MuseoHub._
_Serve a trasformare il problema iniziale in specifiche verificabili, collegando ogni funzione prevista agli obiettivi del Project Work._

---

## Attori del sistema

- **Visitatore:** consulta eventi o servizi culturali, effettua una prenotazione guest e può inviare un feedback.
- **Amministratore:** gestisce gli eventi, consulta le prenotazioni e visualizza indicatori sintetici nella dashboard.

## Requisiti funzionali

| Codice | Area     | Requisito                  | Descrizione sintetica                                                  |
| ------ | -------- | -------------------------- | ---------------------------------------------------------------------- |
| RF01   | Pubblica | Consultazione catalogo     | Il visitatore consulta eventi, visite o servizi culturali disponibili. |
| RF02   | Pubblica | Dettaglio evento           | Il visitatore visualizza le informazioni principali di un evento.      |
| RF03   | Pubblica | Prenotazione guest         | Il visitatore effettua una prenotazione senza registrazione.           |
| RF04   | Pubblica | Dati prenotazione          | Il visitatore inserisce nome, email e numero di partecipanti.          |
| RF05   | Sistema  | Controllo disponibilità    | Il sistema verifica la disponibilità residua prima della conferma.     |
| RF06   | Sistema  | Codice prenotazione        | Il sistema salva la prenotazione e restituisce un codice a video.      |
| RF07   | Pubblica | Feedback tramite codice    | Il visitatore invia un feedback usando il codice prenotazione.         |
| RF08   | Admin    | Gestione eventi            | L’amministratore crea, modifica ed elimina eventi o servizi culturali. |
| RF09   | Admin    | Consultazione prenotazioni | L’amministratore visualizza le prenotazioni ricevute.                  |
| RF10   | Admin    | Consultazione feedback     | L’amministratore visualizza i feedback inviati.                        |
| RF11   | Admin    | Dashboard minima           | L’amministratore consulta indicatori elementari sulle attività.        |

## Requisiti non funzionali

| Codice | Requisito              | Descrizione sintetica                                                             |
| ------ | ---------------------- | --------------------------------------------------------------------------------- |
| RNF01  | Usabilità              | L’interfaccia deve essere semplice e comprensibile per utenti non tecnici.        |
| RNF02  | Responsività           | Il front-end deve essere consultabile da desktop e dispositivi mobili.            |
| RNF03  | Separazione componenti | Il progetto deve distinguere interfaccia, logica applicativa e gestione dati.     |
| RNF04  | Persistenza dati       | I dati principali devono essere salvati in modo strutturato.                      |
| RNF05  | Documentabilità        | Scelte progettuali, flussi e test devono essere documentati nel repository.       |
| RNF06  | Manutenibilità         | Il codice deve essere semplice, leggibile e coerente con un prototipo accademico. |

## Vincoli progettuali

- Il progetto riguarda una realtà museale simulata.
- Gli eventi e le visite considerate sono gratuiti.
- La prenotazione è guest, non richiede registrazione del visitatore e può includere al massimo 4 partecipanti.
- La conferma della prenotazione avviene a video tramite codice.
- Le scelte tecniche devono essere coerenti con lo stack stabilito per MuseoHub.

## Funzionalità escluse

Per mantenere il progetto entro un perimetro sostenibile, sono escluse:

- registrazione utenti visitatori;
- verifica email;
- invio email reale;
- pagamento online;
- QR code biglietto, escluso dal perimetro minimo, ma valutabile come estensione del prototipo;
- reset password;
- ruoli amministrativi complessi;
- notifiche push;
- integrazione calendario;
- analytics avanzati;
- intelligenza artificiale operativa;
- hardening cybersecurity da produzione.

## Criteri di accettazione

Il prototipo può essere considerato coerente con i requisiti se consente di completare almeno il seguente flusso principale:

1. il visitatore consulta il catalogo;
2. il visitatore apre il dettaglio di un evento;
3. il visitatore compila una prenotazione guest;
4. il sistema verifica la disponibilità;
5. il sistema salva la prenotazione;
6. il sistema restituisce un codice prenotazione;
7. il visitatore può utilizzare il codice prenotazione per inviare un feedback collegato all’evento;
8. l’amministratore consulta eventi, prenotazioni, feedback e indicatori minimi.
