# Limiti e sviluppi futuri

_Questo documento raccoglie i limiti consapevoli del prototipo MuseoHub e le possibili evoluzioni future._
_Distingue ciò che è stato implementato nel Project Work da funzionalità più avanzate escluse dal perimetro_

---

Il sistema non include pagamenti online. La scelta è coerente con il perimetro del prototipo, che considera eventi e visite gratuite. Un’eventuale gestione di pagamento digitale può essere prevista come sviluppo futuro.

Il codice prenotazione è generato tramite identificativo evento, data e componente casuale numerica. Tale soluzione è adeguata per il prototipo accademico ma non garantisce elevata robustezza contro tentativi di enumerazione o utilizzo improprio. Sarebbe opportuno adottare identificativi più imprevedibili, token sicuri o ulteriori meccanismi di validazione.
