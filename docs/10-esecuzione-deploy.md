# Esecuzione e deploy

_Questo documento descrive come eseguire MuseoHub in locale e come è stato configurato il deploy del prototipo._

---

## Esecuzione locale del backend

Il backend è sviluppato con Node.js ed Express ed espone API REST per eventi, prenotazioni, feedback, dashboard e funzioni amministrative.

Per avviare il backend:

```bash
cd server
npm install
npm run dev
```

Se lo script `dev` non è disponibile, usare:

```bash
npm start
```

All’avvio, l’applicazione inizializza automaticamente il database SQLite tramite bootstrap dello schema e dei dati dimostrativi.

## Esecuzione locale del frontend

Il frontend è sviluppato con React e Vite.

Per avviare il frontend:

```bash
cd client
npm install
npm run dev
```

Il frontend comunica con il backend tramite la variabile d’ambiente:

```text
VITE_API_BASE_URL
```

In ambiente locale, questa variabile deve puntare all’URL del backend Express locale.

## Build del frontend

Prima del deploy è stata verificata la build del frontend con:

```bash
cd client
npm run build
```

Questa verifica consente di controllare che import, routing e configurazione Vite siano compatibili con l’ambiente di produzione.

## Deploy frontend su Netlify

Il frontend è stato pubblicato su Netlify con la seguente configurazione:

- repository GitHub collegato a Netlify;
- directory applicativa: `client`;
- comando di build: `npm run build`;
- directory di pubblicazione: `dist`.

Per supportare il routing della Single Page Application, è stato configurato il redirect verso `index.html`.

## Deploy backend su Render

Il backend è stato pubblicato su Render come servizio web Node.js.

L’URL del servizio Render viene usato dal frontend tramite la variabile:

```text
VITE_API_BASE_URL
```

Il collegamento tra frontend Netlify e backend Render è stato verificato attraverso i principali flussi applicativi.

## Database SQLite su Render

MuseoHub utilizza SQLite come database relazionale di prototipo.

In ambiente Render, il database viene inizializzato automaticamente all’avvio dell’applicazione. Questa scelta consente di mantenere semplice il deploy dimostrativo e di avere dati disponibili per il collaudo.

La soluzione non è production-ready: in un contesto reale sarebbe necessario usare un database persistente gestito e separato dal ciclo di vita dell’applicazione.

## Verifiche effettuate

Sono stati verificati:

- caricamento del catalogo eventi;
- dettaglio evento;
- prenotazione guest;
- generazione del booking code;
- invio feedback tramite booking code;
- dashboard amministrativa;
- creazione, modifica ed eliminazione eventi;
- validazione dei dati evento;
- collegamento Netlify-Render;
- comportamento del frontend durante il primo caricamento del backend Render in sleep mode.

Gli esiti dei test sono documentati in:

```text
docs/09-test-funzionali.md
```

Gli screenshot sono salvati in:

```text
docs/screenshots/
```

## Limiti del deploy

Il deploy è adeguato alla dimostrazione del prototipo, ma presenta alcuni limiti:

- il backend Render può richiedere alcuni secondi al primo avvio dopo inattività;
- SQLite è usato come database dimostrativo, non come soluzione persistente di produzione;
- non sono implementati autenticazione, ruoli amministrativi complessi o hardening cybersecurity;
- l’interfaccia è stata collaudata principalmente in ambiente desktop.
