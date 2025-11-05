# Geolocation Dashboard (demo)

Deze demo laat zien hoe bezoekers vrijwillig hun locatie kunnen delen en hoe die locaties op een kaart (Leaflet + OpenStreetMap) in een eenvoudig dashboard getoond worden.

**Belangrijk:** deze applicatie werkt alleen als de gebruiker expliciet toestemming geeft. Ik kan niet helpen met het verkrijgen van locaties zonder toestemming.

## Inhoud
- `server.js` — eenvoudige Express-server met endpoints `/report-location` en `/locations`
- `public/index.html` — pagina waar bezoekers hun locatie kunnen delen
- `public/dashboard.html` — dashboard met kaart en pins (Leaflet)
- `package.json` — afhankelijkheden

## Run lokaal
1. Zorg dat je Node.js (v14+) hebt.
2. Pak de ZIP uit en ga naar de map `geolocation-dashboard`.
3. `npm install`
4. `npm start`
5. Open in je browser:
   - `http://localhost:3000/` → site met knop (index.html)
   - `http://localhost:3000/dashboard.html` → kaart/dashboard

## HTTPS / productie
- Browsers vereisen HTTPS (of `localhost`) voor de Geolocation API. Gebruik een TLS-certificaat (Let's Encrypt) voor productie.
- Gebruik een echte database (Postgres, MongoDB) in plaats van in-memory opslag als je gegevens wilt bewaren.
- Voeg authenticatie en privacyinformatie toe (GDPR/AVG).

## Licentie
MIT
