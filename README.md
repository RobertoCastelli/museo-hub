# MuseoHub

**Repository di lavoro per il Project Work L-31 Pegaso.**

MuseoHub è un prototipo web full-stack sviluppato nell’ambito del Project Work PW22 “Digitalizzazione dei processi aziendali in un’impresa culturale”.

Il progetto simula una piccola realtà museale e si concentra sulla digitalizzazione di alcuni processi gestionali relativi a eventi culturali, prenotazioni guest, raccolta dei feedback e consultazione amministrativa dei dati tramite dashboard, API REST e database relazionale.

[![Netlify Status](https://api.netlify.com/api/v1/badges/8685f865-9684-4edb-8657-decb9fb7a254/deploy-status)](https://app.netlify.com/projects/museohub/deploys)

## Stato del progetto

Prototipo funzionale completato per il perimetro previsto dal Project Work.

Funzionalità principali implementate:

- catalogo eventi;
- dettaglio evento;
- prenotazione guest;
- generazione codice prenotazione;
- raccolta feedback tramite booking code;
- dashboard amministrativa con indicatori sintetici;
- gestione eventi tramite CRUD amministrativo;
- consultazione prenotazioni lato amministratore;
- API REST;
- database SQLite.

Per la revisione accademica, l’area amministrativa è accessibile dalla voce `admin` della navbar tramite credenziali demo: ID `admin`, password `pegaso`.

## Stack tecnologico

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Database**: SQLite
- **Repository**: GitHub
- **Deploy frontend**: Netlify
- **Deploy backend**: Render

## Documentazione

La documentazione progettuale è disponibile nella cartella:

- `docs/`

Documenti principali:

- `00-scheda-progetto.md`
- `01-analisi-problema.md`
- `02-requisiti.md`
- `03-processi.md`
- `04-casi-uso.md`
- `05-modello-dati.md`
- `06-architettura.md`
- `07-api.md`
- `08-pseudocodice.md`
- `09-test-funzionali.md`
- `10-esecuzione-deploy.md`
- `11-limiti-sviluppi-futuri.md`

## Obiettivo del prototipo

Dimostrare come una gestione frammentata di eventi, prenotazioni e feedback possa essere trasformata in un processo digitale integrato tramite un’applicazione web full-stack coerente con la traccia PW22.
