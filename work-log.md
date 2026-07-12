# Work log

_Questo documento registra in forma sintetica le principali fasi di lavoro svolte durante il progetto MuseoHub._

---

## Registro sintetico

### 001 — 15/05/2026 — Setup e documentazione iniziale

**Fase:** formalizzazione iniziale del progetto nel repository.  
**Attività:** creazione della struttura del repository, predisposizione dei file Markdown principali, revisione iniziale della documentazione e primi diagrammi di processo.  
**Riferimento Git:** commit del 15/05/2026 relativi a inizializzazione, aggiornamento documentazione e diagrammi.

### 002 — 16-19/05/2026 — Analisi e progettazione preliminare

**Fase:** sviluppo progressivo e consolidamento della documentazione progettuale.  
**Attività:** aggiornamento dei documenti di analisi, requisiti, processi, casi d’uso, diagrammi e modello dati preliminare; revisione di coerenza anche sui documenti già prodotti.  
**Riferimento Git:** commit del 19/05/2026 relativo ad aggiornamento documentazione e diagrammi.

### 003 — 19-20/05/2026 — Architettura e API preliminari

**Fase:** progettazione tecnica preliminare.  
**Attività:** definizione dell’architettura web client-server, aggiornamento del diagramma architetturale e prima mappatura degli endpoint API previsti.  
**Riferimento Git:** commit relativo all’aggiornamento di architettura e documentazione API.

### 004 — 20-23/05/2026 — Pseudocodice e flusso prenotazione

**Fase:** progettazione logica preliminare.  
**Attività:** completamento del pseudocodice delle logiche principali e rappresentazione del flusso tecnico della prenotazione guest tramite sequence diagram.  
**Riferimento Git:** commit relativo all’aggiornamento della documentazione logica e dei diagrammi.

### 005 — 23/05/2026 — Backend Express iniziale

**Fase:** avvio dell’implementazione backend.  
**Attività:** inizializzazione del progetto Node/Express, configurazione delle dipendenze principali e verifica dell’endpoint tecnico `/api/health`.  
**Riferimento Git:** commit relativo all'inizializzazione del backend Express.

### 006 — 23/05/2026 — Setup database SQLite

**Fase:** predisposizione della persistenza dati.  
**Attività:** installazione delle dipendenze SQLite, creazione dello schema SQL iniziale, configurazione del modulo di apertura database e script di inizializzazione locale.  
**Riferimento Git:** commit relativo al setup SQLite del backend.

### 007 — 23-24/05/2026 — Implementazione API eventi pubbliche

**Fase:** sviluppo backend API REST.  
**Attività:** implementazione delle route pubbliche `GET /api/events` e `GET /api/events/:id`, collegamento del router eventi all’applicazione Express, verifica del recupero dati da SQLite e gestione degli errori per identificativi non validi o eventi inesistenti.  
**Riferimento Git:** commit relativo all’implementazione delle API eventi.

### 008 — 24/05/2026 — Implementazione API prenotazioni

**Fase:** sviluppo backend API REST.  
**Attività:** implementazione della route `POST /api/bookings`, con validazione dei dati, controllo disponibilità evento, generazione del codice prenotazione, salvataggio su SQLite e aggiornamento dei posti disponibili.  
**Riferimento Git:** commit relativo all’implementazione delle API prenotazioni.

### 009 — 24/05/2026 — Implementazione API feedback

**Fase:** sviluppo backend API REST.  
**Attività:** implementazione della route `POST /api/feedback`, con validazione dei dati, verifica della prenotazione tramite booking code e salvataggio del feedback su database SQLite.  
**Riferimento Git:** commit relativo all’implementazione delle API feedback.

### 010 — 25/05/2026 — Integrazione frontend catalogo eventi

**Fase:** integrazione frontend-backend.  
**Attività:** implementazione del recupero eventi tramite fetch API nel frontend React, creazione del service `eventsService.js`, gestione dello stato applicativo con `useState` e `useEffect`, visualizzazione dinamica del catalogo eventi e prima componentizzazione tramite `EventCard`.  
**Riferimento Git:** commit relativi all’integrazione frontend del catalogo eventi.

### 011 — 01-02/06/2026 — Integrazione frontend dettaglio evento e layout applicativo

**Fase:** sviluppo frontend React.

**Attività:** Implementato il layout base dell'applicazione composto da header, barra di navigazione, area contenuti e footer. Definita la palette grafica iniziale del progetto e introdotta la pagina di dettaglio evento tramite routing dinamico React Router e integrazione con l'endpoint GET /api/events/:id.

**Riferimento Git:** commit relativo all'integrazione del dettaglio evento e del layout applicativo.

### 012 — 03-04/06/2026 — Integrazione frontend prenotazioni

**Fase:** integrazione frontend-backend.

**Attività:** realizzazione della pagina di prenotazione, collegamento del form all’API `POST /api/bookings`, salvataggio delle prenotazioni nel database SQLite e visualizzazione della conferma con codice prenotazione.

**Riferimento Git:** commit relativo all’integrazione frontend del workflow di prenotazione.

### 013 — 05-06/06/2026 — Consolidamento interfaccia pubblica

**Fase:** rifinitura frontend React.

**Attività:** riorganizzazione degli stili mediante accorpamento dei fogli CSS condivisi, revisione della navigazione principale, aggiornamento dell'identità grafica del prototipo, miglioramento del catalogo eventi e delle EventCard, integrazione di icone informative e realizzazione di un semplice sistema di health check visuale per il monitoraggio dello stato del backend e del database.

**Riferimento Git:** commit relativo al consolidamento dell'interfaccia pubblica, alla riorganizzazione degli stili e al monitoraggio dello stato applicativo.

### 014 — 06-07/06/2026 — Consolidamento dettaglio evento e prenotazione

**Fase:** rifinitura frontend React.

**Attività:** revisione della pagina dettaglio evento con layout a due colonne, integrazione grafica del form di prenotazione, sostituzione del campo partecipanti con selezione guidata da 1 a 4, realizzazione della modal di conferma prenotazione, visualizzazione del codice prenotazione e aggiornamento immediato dei posti disponibili dopo una prenotazione riuscita.

**Riferimento Git:** commit relativo al consolidamento del workflow frontend di prenotazione.

### 015 — 08/06/2026 — Implementazione dashboard

**Fase:** integrazione frontend-backend.

**Attività:** implementazione della route `GET /api/dashboard`, realizzazione delle query aggregate su database SQLite per il recupero degli indicatori principali del sistema, integrazione del service frontend dedicato e sviluppo della Dashboard pubblica con visualizzazione del numero totale di eventi, prenotazioni, feedback e rating medio.

**Riferimento Git:** commit relativo all'implementazione della dashboard pubblica e delle statistiche aggregate.

### 016 — 09/06/2026 — Refactoring struttura frontend e uniformazione stili

**Fase:** consolidamento frontend React.

**Attività:** revisione della struttura JSX e delle convenzioni di naming dei componenti e delle pagine, uniformazione delle classi CSS, riorganizzazione dei componenti condivisi e consolidamento dell'identità grafica del prototipo per migliorare coerenza, leggibilità e manutenibilità del codice.

**Riferimento Git:** commit relativo al refactoring strutturale del frontend e all'uniformazione degli stili.

### 017 — 10-13/06/2026 — Implementazione CRUD eventi area amministrativa

**Fase:** sviluppo frontend-backend area amministrativa.

**Attività:** implementazione dell’area Admin con visualizzazione tabellare degli eventi, integrazione della dashboard amministrativa, creazione degli endpoint per inserimento, modifica ed eliminazione eventi, collegamento dei service frontend e gestione delle operazioni Add, Edit e Delete tramite modal e aggiornamento della tabella eventi.

**Riferimento Git:** commit relativo all’implementazione del CRUD eventi nell’area amministrativa.

### 018 — 14/06/2026 — Consolidamento area amministrativa e consultazione prenotazioni

**Fase:** sviluppo frontend-backend area amministrativa.

**Attività:** completamento del CRUD eventi tramite operazioni di creazione, modifica ed eliminazione; refactoring dell'interfaccia amministrativa mediante estrazione dei componenti dedicati alla tabella eventi e alla modal di gestione; integrazione della dashboard amministrativa e realizzazione della consultazione delle prenotazioni tramite endpoint dedicato e visualizzazione tabellare.

**Riferimento Git:** commit relativo al consolidamento dell'area amministrativa e alla consultazione delle prenotazioni.

### 019 — 14/06/2026 — Allineamento documentazione e diagrammi

**Fase:** consolidamento documentale.

**Attività:** revisione della documentazione tecnica e dei diagrammi per garantire la coerenza con il prototipo effettivamente implementato. Aggiornati requisiti, processi, casi d’uso, modello dati, architettura, API, checklist di progetto, decision log e README. Rimossi riferimenti a funzionalità non implementate e riallineati diagrammi e documentazione alle funzionalità realmente presenti nel sistema.

**Riferimento Git:** commit relativo all’allineamento della documentazione con l’implementazione corrente.

### 020 — 15-17/06/2026 — Deploy cloud e collaudo funzionale finale

**Fase:** consolidamento applicativo e deploy.

**Attività:** pubblicazione del backend Express su Render, collegamento del frontend Netlify al backend tramite variabile di ambiente, risoluzione dei problemi di compatibilità SQLite in ambiente cloud, introduzione del bootstrap automatico del database all’avvio dell’applicazione, correzione degli endpoint amministrativi, aggiunta dei redirect Netlify per le route React, validazione dei dati degli eventi, messaggi di conferma per le operazioni CRUD e piccole rifiniture dell’interfaccia.

**Riferimento Git:** commit relativi al deploy cloud, al bootstrap automatico del database e alle correzioni funzionali emerse durante il collaudo online.

### 021 — 08/07/2026 — Rifinitura funzionale e collaudo area amministrativa

**Fase:** consolidamento applicativo.

**Attività:** correzione delle anomalie emerse durante il collaudo del prototipo, con particolare riferimento al corretto collegamento dei service frontend alle API amministrative, al miglioramento della validazione dei dati inseriti nei form, all'uniformazione dei messaggi di conferma ed errore, all'introduzione del controllo sui feedback duplicati tramite booking code e ad alcune rifiniture dell'interfaccia amministrativa.

**Riferimento Git:** commit relativo al consolidamento dell'area amministrativa e alle correzioni emerse durante il collaudo finale.

### 022 — 09/07/2026 — Stabilizzazione deploy Netlify e casing cartella utils

**Fase:** consolidamento deploy frontend.

**Attività:** risoluzione del problema di build su Netlify causato dal casing della cartella `utils`. In ambiente locale il problema non emergeva, mentre l’ambiente Linux di build richiedeva coerenza esatta tra percorso importato e nome della cartella tracciata da Git. La correzione ha permesso il completamento del deploy frontend e la corretta risoluzione degli import.

**Riferimento Git:** commit relativo alla correzione del casing della cartella `utils` e alla stabilizzazione del deploy Netlify.

### 023 — 09/07/2026 — Rifinitura navigazione e aggiornamento dashboard amministrativa

**Fase:** rifinitura funzionale frontend.

**Attività:** introduzione del collegamento dal logo alla homepage del catalogo eventi, senza modificare la struttura generale dell’interfaccia. Correzione del comportamento della dashboard amministrativa dopo operazioni CRUD sugli eventi, in modo da aggiornare i contatori senza richiedere il refresh manuale della pagina.

**Riferimento Git:** commit relativi al collegamento del logo alla homepage e all’aggiornamento dei dati dashboard dopo modifiche amministrative.

### 024 — 10/07/2026 — Collaudo produzione e raccolta screenshot finali

**Fase:** collaudo funzionale finale.

**Attività:** verifica del prototipo in ambiente deployato, con frontend pubblicato su Netlify e backend su Render. Sono stati controllati i principali flussi pubblici e amministrativi: caricamento iniziale del backend, catalogo eventi, dettaglio evento, prenotazione guest, generazione del booking code, invio feedback, dashboard amministrativa, creazione, modifica ed eliminazione eventi. Sono stati raccolti screenshot finali a supporto dei test funzionali.

**Riferimento Git:** attività documentata tramite aggiornamento degli screenshot finali nella cartella `docs/screenshots/`.

### 025 — 12/07/2026 — Chiusura documentazione tecnica del repository

**Fase:** consolidamento documentale finale.

**Attività:** aggiornamento della documentazione tecnica del repository in vista della redazione del report finale. Sono stati aggiornati i test funzionali, le istruzioni di esecuzione e deploy, i limiti del prototipo, la checklist di progetto, la scheda progetto e il README, mantenendo coerenza tra codice implementato, screenshot disponibili, deploy effettivo e perimetro funzionale dichiarato.

**Riferimento Git:** da associare al commit documentale finale relativo a test funzionali, deploy, limiti, checklist, README, scheda progetto e screenshot.
