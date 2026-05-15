# Scheda progetto

_Questo documento descrive il perimetro iniziale del Project Work._
_Contiene la traccia scelta, il contesto simulato, l’obiettivo generale, le funzionalità previste, le tecnologie utilizzate e le principali esclusioni del prototipo MuseoHub._

---

## Nome del progetto

**MuseoHub**

## Corso di studio

L-31 Informatica per le Aziende Digitali  
Università Telematica Pegaso

## Traccia scelta

PW 22 — Digitalizzazione dei processi aziendali in un’impresa culturale: progettazione di una piattaforma informatica per la gestione di servizi, dati e utenti.

## Tema

Tema n. 1 — La digitalizzazione dell’impresa

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

## Funzionalità incluse

- catalogo di eventi, opere o servizi culturali;
- pagina di dettaglio evento;
- prenotazione guest senza registrazione utente;
- salvataggio della prenotazione su database;
- restituzione di un codice prenotazione e conferma a video;
- gestione CRUD degli eventi lato amministratore;
- elenco prenotazioni lato amministratore;
- feedback semplice;
- dashboard amministrativa con indicatori elementari;
- API REST;
- modello dati relazionale;
- test funzionali documentati con screenshot.

## Funzionalità escluse

- registrazione utenti visitatori;
- verifica email;
- invio email reale;
- pagamento online, poiché il prototipo considera eventi e visite gratuite;
- QR code biglietto;
- reset password;
- ruoli amministrativi complessi;
- notifiche push;
- integrazione calendario;
- analytics avanzati;
- intelligenza artificiale operativa;
- hardening cybersecurity da produzione.

## Stack tecnologico

- **Front-end:** React + Vite;
- **Backend:** Node.js + Express;
- **Database:** SQLite;
- **Deploy front-end:** Netlify;
- **Deploy backend:** Render, se tecnicamente sostenibile;
- **Repository:** GitHub.

## Strumenti di lavoro

- **Visual Studio Code:** ambiente di sviluppo principale;
- **Vim:** editor testuale di supporto per modifiche rapide;
- **Git e GitHub:** versionamento del codice, gestione del repository e tracciamento dell’evoluzione del progetto;
- **ChatGPT:** supporto per revisione formale dei testi e controllo di coerenza documentale. Le scelte progettuali, l’implementazione e la redazione restano sviluppate personalmente.
- **Mermaid:** realizzazione di diagrammi testuali versionabili;
- **Markdown:** redazione della documentazione progettuale.

## Output previsti

- prototipo web funzionante;
- repository GitHub ordinato;
- documentazione tecnica in Markdown;
- diagrammi di processo, casi d’uso, modello dati e architettura;
- API REST documentate;
- test funzionali con screenshot;
- istruzioni di esecuzione locale;
- eventuale deploy del front-end e del back-end;
- report finale secondo il template Pegaso.

## Criterio di successo

Il criterio di successo riguarda la coerenza tra processo digitalizzato, modello dati, API, interfaccia utente e documentazione finale.
Il progetto si considera riuscito se il prototipo consente di completare il flusso principale:

1. consultazione di un evento;
2. invio di una prenotazione guest;
3. salvataggio della prenotazione nel database;
4. restituzione del codice prenotazione;
5. consultazione amministrativa degli eventi, delle prenotazioni e di alcuni indicatori di base.
