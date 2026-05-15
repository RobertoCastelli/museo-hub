# Requisiti

_Questo documento raccoglie i requisiti funzionali, non funzionali e i vincoli progettuali del prototipo MuseoHub._
_Serve a trasformare il problema iniziale in specifiche verificabili, collegando ogni funzione prevista agli obiettivi del Project Work._

---

## Attori del sistema

Il prototipo prevede due attori principali:

- **Visitatore:** consulta eventi o servizi culturali, effettua una prenotazione guest e può inviare un feedback.
- **Amministratore:** gestisce gli eventi, consulta le prenotazioni e visualizza indicatori sintetici nella dashboard.

---

## Requisiti funzionali

### Area pubblica

- **RF01 - Consultazione catalogo**  
  Il sistema deve consentire al visitatore di consultare un catalogo di eventi, visite o servizi culturali.

- **RF02 - Visualizzazione dettaglio evento**  
  Il sistema deve consentire al visitatore di visualizzare le informazioni principali di un evento o servizio culturale.

- **RF03 - Prenotazione guest**  
  Il sistema deve consentire al visitatore di effettuare una prenotazione senza registrazione utente.

- **RF04 - Inserimento dati prenotazione**  
  Il sistema deve consentire al visitatore di inserire i dati minimi necessari alla prenotazione, come nome, email e numero di partecipanti.

- **RF05 - Controllo disponibilità**  
  Il sistema deve verificare la disponibilità residua prima di confermare una prenotazione.

- **RF06 - Conferma prenotazione**  
  Il sistema deve restituire a video un codice prenotazione dopo il salvataggio corretto della richiesta.

- **RF07 - Invio feedback tramite codice prenotazione**  
  Il sistema deve consentire al visitatore di inviare un feedback semplice associato a un evento o servizio culturale, utilizzando il codice prenotazione ricevuto in fase di conferma.

### Area amministrativa

- **RF08 - Gestione eventi**  
  Il sistema deve consentire all’amministratore di creare, modificare ed eliminare eventi o servizi culturali.

- **RF09 - Consultazione prenotazioni**  
  Il sistema deve consentire all’amministratore di visualizzare l’elenco delle prenotazioni ricevute.

- **RF10 - Consultazione feedback**  
  Il sistema deve consentire all’amministratore di consultare i feedback raccolti.

- **RF11 - Dashboard amministrativa**  
  Il sistema deve mostrare all’amministratore alcuni indicatori elementari, come numero di eventi, prenotazioni ricevute e partecipanti previsti.

---

## Requisiti non funzionali

- **RNF01 - Usabilità**  
  L’interfaccia deve essere semplice e comprensibile per un utente non tecnico.

- **RNF02 - Responsività**  
  Il front-end deve essere consultabile da desktop e dispositivi mobili.

- **RNF03 - Separazione delle responsabilità**  
  Il progetto deve distinguere tra interfaccia utente, logica applicativa e gestione dei dati.

- **RNF04 - Persistenza dei dati**  
  Le informazioni principali del prototipo devono essere salvate in modo strutturato.

- **RNF05 - Documentabilità**  
  Le principali scelte progettuali, i flussi e i test devono essere documentati nel repository.

- **RNF06 - Manutenibilità**  
  Il codice deve essere organizzato in modo semplice, leggibile e coerente con il livello di prototipo accademico.

---

## Vincoli progettuali

- Il progetto riguarda una realtà museale simulata.
- Gli eventi e le visite considerate sono gratuiti.
- La prenotazione è guest e non richiede registrazione del visitatore.
- La conferma della prenotazione avviene a video tramite codice.
- Le scelte tecniche devono essere coerenti con lo stack stabilito per MuseoHub.

---

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

---

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
