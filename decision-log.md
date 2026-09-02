# Decision log

_Questo documento registra le principali decisioni progettuali prese durante lo sviluppo del prototipo._

---

- D001 - **Nome progetto:** MuseoHub
- D002 - **Contesto:** piccola realtà museale simulata
- D003 - **Stack:** React / Express / SQLite / Netlify / Render
- D004 - **Strumenti:** Markdown e Mermaid per la documentazione
- D005 - **Editor:** Visual Studio Code e Vim
- D006 - **Tipo prenotazione:** guest / no registrazione / massimo 4 partecipanti per prenotazione
- D007 - **Tipo eventi:** gratuiti / no pagamenti
- D008 - **Homepage:** coincidente con catalogo eventi / no landpage
- D009 - **Palette grafica:** ispirata a pergamena e salvia
- D010 - **Layout applicativo:** header, navbar e footer persistenti
- D011 - **Prenotazione:** integrata direttamente nella pagina dettaglio evento
- D012 - **Lingua interfaccia:** inglese / documentazione in italiano
- D013 - **Navigazione eventi:** card interamente cliccabile
- D014 - **Monitoraggio applicativo:** health check visuale backend e database nel footer
- D015 - **Conferma prenotazione:** visualizzazione del codice prenotazione tramite modal dedicata
- D016 - **Dashboard:** mantenuta come componente riutilizzabile e integrata nella pagina Admin
- D017 - **Area Admin:** realizzata come sezione gestionale unica con dashboard, CRUD eventi e prenotazioni
- D018 - **Gestione eventi:** implementata in forma tabellare per privilegiare leggibilità e operatività
- D019 - **CRUD eventi:** gestito tramite modal unica riutilizzata per creazione e modifica evento
- D020 - **Prenotazioni Admin:** previste in sola consultazione; il prototipo verte sulla gestione eventi
- D021 - **Database deploy:** SQLite inizializzato tramite bootstrap automatico all’avvio dell’applicazione.
- D022 - **Responsività:** collaudo principale su desktop; ottimizzazione mobile completa esclusa dal perimetro.
- D023 - **Favicon applicativa:** sostituita la favicon predefinita di Vite con un’icona coerente con l’identità visiva di MuseoHub.
- D024 - **Autenticazione Admin:** autenticazione production-ready esclusa; introdotta protezione dimostrativa con modale admin e sessione frontend.
