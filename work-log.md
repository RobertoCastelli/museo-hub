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

### 011 — Frontend dettaglio evento e layout applicativo

**Fase:** sviluppo frontend React.

**Attività:** Implementato il layout base dell'applicazione composto da header, barra di navigazione, area contenuti e footer. Definita la palette grafica iniziale del progetto e introdotta la pagina di dettaglio evento tramite routing dinamico React Router e integrazione con l'endpoint GET /api/events/:id.

**Riferimento Git:** commit relativo all'integrazione del dettaglio evento e del layout applicativo.
