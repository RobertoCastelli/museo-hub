# Scheda progetto

_Questo documento descrive il perimetro iniziale del Project Work._
_Contiene la traccia scelta, il contesto simulato, l’obiettivo generale, le funzionalità previste, le tecnologie utilizzate e le principali esclusioni del prototipo MuseoHub._

---

## Inquadramento del progetto

| Voce            | Dettaglio                                                               |
| --------------- | ----------------------------------------------------------------------- |
| Nome progetto   | MuseoHub                                                                |
| Corso di studio | L-31 Informatica per le Aziende Digitali, Università Telematica Pegaso  |
| Tema            | Tema n. 1 — La digitalizzazione dell’impresa                            |
| Traccia scelta  | PW 22 — Digitalizzazione dei processi aziendali in un’impresa culturale |

## Contesto simulato

MuseoHub è pensato come prototipo per una piccola realtà museale simulata.
Il contesto di riferimento è quello di un museo locale che gestisce eventi, visite, contenuti culturali, prenotazioni e feedback attraverso strumenti non pienamente integrati, come comunicazioni manuali, fogli di calcolo o canali separati.
Il progetto non rappresenta un museo reale, ma un caso applicativo costruito per analizzare e digitalizzare un processo aziendale coerente con la traccia scelta.

## Problema affrontato

Nel contesto simulato, la gestione di eventi, prenotazioni e feedback è frammentata.
Questa frammentazione può generare difficoltà nella consultazione dei dati, duplicazione delle informazioni, minore controllo sulle prenotazioni e assenza di indicatori sintetici utili al personale amministrativo.
Il problema principale non è quindi solo pubblicare informazioni online, ma rendere più ordinata la gestione interna dei dati collegati ai servizi culturali.

## Obiettivo generale

L’obiettivo del progetto è progettare e sviluppare un prototipo web full-stack che supporti la digitalizzazione di alcuni processi gestionali di una piccola realtà museale simulata.
Il prototipo deve consentire al visitatore di consultare eventi o servizi culturali, effettuare una prenotazione senza registrazione e ricevere un codice di conferma.
Dal lato amministrativo, il sistema deve permettere la gestione degli eventi, la consultazione delle prenotazioni e la visualizzazione di una dashboard minima con indicatori elementari.

## Processo digitalizzato

Il processo principale digitalizzato riguarda la gestione di eventi o servizi culturali e delle relative prenotazioni.
Il flusso previsto è il seguente:

1. l’amministratore inserisce o aggiorna un evento;
2. il visitatore consulta il catalogo online;
3. il visitatore apre il dettaglio dell’evento;
4. il visitatore compila il form di prenotazione;
5. il sistema verifica la disponibilità;
6. il sistema salva la prenotazione nel database;
7. il sistema restituisce un codice prenotazione;
8. l’amministratore consulta prenotazioni e indicatori di base.

## Perimetro funzionale

| Funzionalità incluse                                | Funzionalità escluse                           |
| --------------------------------------------------- | ---------------------------------------------- |
| Catalogo di eventi, opere o servizi culturali.      | Registrazione utenti visitatori.               |
| Pagina di dettaglio evento.                         | Verifica email.                                |
| Prenotazione guest senza registrazione utente.      | Invio email reale.                             |
| Salvataggio della prenotazione su database.         | Pagamento online.                              |
| Codice prenotazione e conferma a video.             | QR code biglietto, valutabile come estensione. |
| Feedback semplice tramite codice prenotazione.      | Reset password.                                |
| Gestione CRUD degli eventi lato amministratore.     | Ruoli amministrativi complessi.                |
| Elenco prenotazioni lato amministratore.            | Notifiche push.                                |
| Dashboard amministrativa con indicatori elementari. | Analytics avanzati.                            |
| API REST.                                           | Intelligenza artificiale operativa.            |
| Modello dati relazionale.                           | Hardening cybersecurity da produzione.         |
| Test funzionali documentati con screenshot.         |                                                |

## Stack tecnologico

- **Front-end:** React + Vite;
- **Backend:** Node.js + Express;
- **Database:** SQLite;
- **Deploy front-end:** Netlify;
- **Deploy backend:** Render (se tecnicamente sostenibile);
- **Repository:** GitHub.

## Strumenti di lavoro

- **Visual Studio Code:** ambiente di sviluppo principale;
- **Vim:** editor testuale di supporto per modifiche rapide;
- **Mermaid:** realizzazione di diagrammi testuali versionabili;
- **Markdown:** redazione della documentazione progettuale;
- **ChatGPT:** supporto alla revisione dei testi, all’uniformità terminologica, al controllo della coerenza documentale, al confronto tra possibili soluzioni tecniche e alla generazione assistita del logo.

L’utilizzo di ChatGPT ha riguardato attività di revisione testuale e controllo di coerenza della documentazione, con particolare attenzione a refusi, uniformità terminologica e dei formati. Il codice del prototipo è stato implementato dallo studente; lo strumento è stato utilizzato come supporto puntuale per il controllo di errori e il confronto su possibili alternative tecniche, senza sostituire l’attività di implementazione. Le scelte progettuali, le soluzioni tecniche adottate, le scelte di layout, la verifica del funzionamento e l’adattamento dei contenuti al Project Work sono rimasti sotto la responsabilità diretta dello studente.

## Output previsti

- prototipo web funzionante;
- repository GitHub ordinato;
- documentazione tecnica in Markdown;
- diagrammi di processo, casi d’uso, modello dati e architettura;
- API REST documentate;
- test funzionali con screenshot;
- istruzioni di esecuzione locale;
- eventuale deploy del frontend e del backend;
- report finale secondo il template Pegaso.

## Criterio di successo

Il progetto si considera riuscito se il prototipo consente di completare il flusso principale:

1. consultazione di un evento;
2. invio di una prenotazione guest;
3. salvataggio della prenotazione nel database;
4. restituzione del codice prenotazione;
5. consultazione amministrativa degli eventi, delle prenotazioni e di alcuni indicatori di base.
