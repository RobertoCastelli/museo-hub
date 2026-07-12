# Limiti e sviluppi futuri

_Questo documento descrive i principali limiti del prototipo MuseoHub e individua possibili sviluppi futuri coerenti con l’evoluzione della piattaforma._

---

## Limiti del prototipo

MuseoHub è stato sviluppato come prototipo accademico finalizzato alla digitalizzazione di alcuni processi di una piccola realtà museale simulata. Il sistema consente di gestire eventi culturali, prenotazioni, feedback e una dashboard amministrativa minima, ma non rappresenta una soluzione production-ready.

I principali limiti sono descritti nelle sezioni seguenti.

## Assenza di autenticazione

L’area amministrativa non prevede un sistema di autenticazione reale.

Questa scelta è stata adottata per mantenere il prototipo concentrato sui processi principali richiesti dal Project Work: catalogo eventi, prenotazioni, feedback, CRUD amministrativo, API e database relazionale.

In uno scenario reale sarebbe necessario introdurre:

- autenticazione amministratore;
- gestione sicura delle sessioni o dei token;
- controllo degli accessi;
- ruoli e permessi;
- protezione delle rotte amministrative.

## Assenza di registrazione utenti

Il prototipo non prevede la registrazione dei visitatori.

Le prenotazioni vengono effettuate in modalità guest, tramite inserimento dei dati essenziali e generazione di un booking code. Questa scelta riduce la complessità applicativa e permette di dimostrare il processo di prenotazione senza introdurre gestione account, password, verifica email o recupero credenziali.

## Assenza di invio email

Il sistema mostra a video la conferma della prenotazione e il relativo booking code, ma non invia email reali all’utente.

In uno sviluppo futuro sarebbe possibile integrare un servizio di invio email per trasmettere conferme di prenotazione, promemoria e comunicazioni operative.

## Assenza di pagamenti online

MuseoHub non gestisce pagamenti online.

Il processo di prenotazione è stato limitato alla registrazione della richiesta e alla generazione del codice prenotazione. L’integrazione di pagamenti richiederebbe servizi esterni, gestione delle transazioni, logiche di rimborso e ulteriori requisiti di sicurezza.

## Assenza di QR code

Il booking code viene mostrato come codice testuale.

Non è stato implementato un QR code associato alla prenotazione. Tale funzionalità potrebbe essere aggiunta in futuro per supportare la verifica rapida degli accessi agli eventi o alle visite guidate.

## Gestione feedback essenziale

Il prototipo consente l’invio di feedback tramite booking code valido e utilizza i dati raccolti per alimentare indicatori sintetici nella dashboard amministrativa.

Non è stata implementata una sezione amministrativa dedicata alla consultazione analitica dei feedback, con elenco dei commenti ricevuti, votazioni per singolo evento e filtri di ricerca. Questa estensione sarebbe utile per supportare meglio l’analisi della soddisfazione degli utenti e la valutazione dei servizi culturali offerti.

## Database SQLite e persistenza

Il prototipo utilizza SQLite come database relazionale.

In ambiente Render, il database viene inizializzato tramite bootstrap automatico all’avvio dell’applicazione. Questa scelta è coerente con un prototipo dimostrativo, ma non rappresenta una soluzione adatta a un contesto produttivo.

In uno scenario reale sarebbe opportuno utilizzare un database persistente gestito, separato dal ciclo di vita dell’applicazione e configurato con adeguate politiche di backup, sicurezza e continuità operativa.

## Limiti del deploy

Il frontend è stato pubblicato su Netlify e il backend su Render.

Questa configurazione è sufficiente per dimostrare il funzionamento del prototipo, ma presenta alcuni limiti. In particolare, il backend Render può richiedere alcuni secondi al primo avvio dopo un periodo di inattività. Per questo motivo il frontend mostra un messaggio di caricamento durante la prima connessione al server.

## Responsività dell’interfaccia

L’interfaccia è stata progettata e collaudata principalmente in ambiente desktop.

La responsività è stata considerata a livello di leggibilità generale, ma non è stata sviluppata un’ottimizzazione completa per dispositivi mobili. In particolare, l’area amministrativa, composta da dashboard, tabelle e form di gestione, è stata pensata principalmente per l’uso da desktop.

## Sicurezza applicativa

Il prototipo non include attività di hardening cybersecurity da produzione.

Sono presenti controlli applicativi di base, come la validazione dei dati principali e la gestione di errori funzionali, ma non sono state implementate misure avanzate quali autenticazione robusta, gestione avanzata dei permessi o protezioni specifiche per scenari produttivi.

## Sviluppi futuri

Gli sviluppi futuri più rilevanti riguardano:

- introduzione dell’autenticazione amministrativa;
- gestione di ruoli e permessi;
- utilizzo di un database persistente gestito;
- invio email di conferma prenotazione;
- generazione di QR code associati al booking code
- miglioramento dell’esperienza utente nella gestione del booking code, ad esempio tramite pulsante di copia rapida;
- integrazione di pagamenti online;
- sezione amministrativa per l’analisi dettagliata dei feedback;
- dashboard con indicatori più avanzati;
- miglioramento della responsività mobile;
- rafforzamento della sicurezza applicativa;

Questi sviluppi non sono stati inclusi nel prototipo per mantenere il progetto coerente con il perimetro accademico, con il tempo disponibile e con l’obiettivo principale di dimostrare la digitalizzazione dei processi essenziali di una piccola realtà museale.
