# A-MAJA OÜ koduleht

Puhas HTML, CSS ja JavaScript. Raamistikku ega ehitusprotsessi ei ole.
Majutus Verceli peal, hinnapäringu vormi taust Resend.

---

## 1. Mida tuleb koodis asendada

Praegu on kõik viited domeenile `https://amaja.ee`. Kui domeen on teine,
asenda see nendes failides:

- `sitemap.xml`
- `robots.txt`
- kõigi HTML-failide `<link rel="canonical">` ja `og:url`
- `api/kontakt.js` sisus domeeni ei ole, seda muuta ei ole vaja

Kiire viis: otsi kõigist failidest `amaja.ee` ja asenda.

Postiindeks `10112` JSON-LD plokis on Tehnika tänava üldindeks. Kui
korteri 51-12 tegelik indeks erineb, paranda see `index.html` ja
`kontakt.html` sees.

---

## 2. Mis pildid on veel vaja lisada

Kolm fotot on juba töödeldud ja lehel sees. Puuduvad kohad on
triibulised kohatäited, millel on peal vajaliku faili nimi. Katkist
pildiikooni kuskil ei ole.

### Juba olemas

| Fail | Roll |
|---|---|
| `pildid/eramu-tume-puitfassaad-hero-01.webp` | Avalehe hero |
| `pildid/eramu-tume-puitfassaad-01.webp` | Galerii, objekt 01 |
| `pildid/eramu-puitfassaad-metsas-02.webp` | Galerii, objekt 02 |
| `pildid/korterelamu-visualiseering-03.webp` | Galerii, objekt 03 |
| `pildid/*-pisi.webp` | Pisipildid varuks, praegu kasutuses ei ole |
| `pildid/a-maja-logo-hele.png` | Logo päises ja jaluses |
| `pildid/a-maja-logo-tume.png` | Logo heledale taustale, varuks |

### Veel vaja, tööde leht

`projekt-09.webp` ja `projekt-10.webp`, kaks fotot valminud objektidest.
Rohkem kohatäiteid lehel ei ole.

### Jooniste leht on täis

Kaksteist joonist on töödeldud ja lehel sees, kvaliteediga 94 ja ilma
suurendamiseta, sest lähtefailid olid ligikaudu 900 px laiad. Iga joonis
avaneb klõpsuga täissuuruses omal aadressil, nii et mõõdud ja
tarindikirjeldused jäävad loetavaks. Sektsiooni ja konstruktsioonisõlmede
joonis on püstformaadis, seetõttu võtab see laual kaks veergu, et kogu
seletuskiri oleks korraga nähtav.

Kui originaalid on olemas suuremana, saada need, siis teen joonised
uuesti suurema lahutusega.

Kui saadad need failid, töötlen need samas mahus: WebP, EXIF ja
GPS-koordinaadid eemaldatud, kirjeldav failinimi, alt-tekst täislausena.
Iga objekti kohta on vaja teada asukoht ja aasta, sest neid ma fotolt ei
näe ega hakka arvama.

### Alt-tekstid olemasolevatel piltidel

- `eramu-tume-puitfassaad-hero-01.webp`: Tumeda puitfassaadi ja
  valtsplekk-katusega üksikelamu metsaserval, ees kruusatee ja terrass,
  valmis töö.
- `eramu-tume-puitfassaad-01.webp`: Tumeda puitfassaadiga üksikelamu
  kõrge viilkatusega, ees kruusatee ja hooldusvaba haljastus, valmis töö.
- `eramu-puitfassaad-metsas-02.webp`: Halliks patineerunud vertikaalse
  puitlaudisega elamu männimetsa serval, otsaseinas heledast tellisest
  maht, valmis töö.
- `korterelamu-visualiseering-03.webp`: Tumeroheliseks värvitud puidust
  korterelamu tänavavaate visualiseering, prantsuse rõdud ja puitaknad.

**Hero pildi kvaliteet.** Antud lähtefail oli 894 pikslit lai, mis on
suure ekraani jaoks napp. Kui originaal on olemas suuremana, saada see,
siis teen hero uuesti 1800 piksli laiuselt.

---

## 3. Vercelisse panek

1. Loo GitHubis uus hoidla ja lohista kõik siinsed failid sinna.
2. Vercelis vajuta **Add New, Project** ja vali see hoidla.
3. Framework Preset: **Other**. Build Command jäta tühjaks, Output
   Directory samuti. See on staatiline leht, ehitama ei pea midagi.
4. Vajuta **Deploy**.
5. Lisa domeen: Project, Settings, Domains, `amaja.ee` ja `www.amaja.ee`.

### DNS

Juurdomeeni A-kirje juures on nimeväli **tühi või @**, mitte `amaja.ee`.
Kui registripidaja lisas domeenile juba oma A-kirje, kustuta see enne
Verceli oma lisamist. Kaks A-kirjet annavad vea.

---

## 4. Resend ja keskkonnamuutujad

1. Loo konto aadressil resend.com.
2. Lisa domeen `amaja.ee` ja kinnita see DNS-kirjetega, mille Resend annab.
3. Loo API võti.
4. Vercelis: Project, Settings, Environment Variables. Lisa kolm muutujat:

| Nimi | Väärtus |
|---|---|
| `RESEND_API_KEY` | Resendi API võti |
| `SAATJA` | `Koduleht <info@amaja.ee>` |
| `SAAJA` | `info@a-maja.com` |

**Keskkonnamuutujad loetakse ainult käivitamisel.** Pärast lisamist tee
kindlasti uus deploy, muidu vorm ei tööta. See on kõige sagedasem
"miks vorm ei tööta" põhjus.

**Kinnitamata domeeniga Resend saadab ainult konto omaniku aadressile.**
Kui `SAAJA` on mõni muu aadress, tuleb vastuseks 403. Seega kinnita
domeen enne, kui vormi päriselt kasutusele võtad.

Node moodulite paigaldamist vaja ei ole. `api/kontakt.js` kasutab Node
sisseehitatud `fetch`-i, seega `resend` paketti ei ole vaja installida.

---

## 5. Statistika

Lehel on Vercel Analytics, mis on küpsisevaba. Lülita see sisse:
Project, Analytics, Enable. Nõusolekuriba vaja ei ole, seetõttu seda
lehel ka ei ole.

---

## 6. Juhend kliendile: Google'i ettevõtteprofiil

Tasuta ja kõige suurema mõjuga samm kohalikus otsingus. Tee see kohe
pärast lehe avaldamist.

**Mis andmed sisestada**

- Nimi täpselt nii: A-MAJA OÜ
- Kategooria: Arhitekt. Lisakategooria: Projekteerimisbüroo
- Telefon: +372 5387 4959
- Veebileht: https://amaja.ee
- Teeninduspiirkond: vali kõik viisteist maakonda, sest tööd võetakse
  vastu üle Eesti
- Kui vastuvõttu aadressil ei toimu, märgi profiil teeninduspiirkonna
  ettevõtteks, mitte poeks. Siis aadressi kaardil ei näidata.
- Teenused: lisa needsamad, mis on teenuste lehel

**Mis fotod lisada**

- Logo profiilipildiks
- Kaanepildiks üks valminud objekt
- Vähemalt viis fotot töödest. Samad failid, mis lehel, sobivad.

**Kuidas arvustusi küsida**

Küsi arvustust siis, kui ehitusluba on käes, sest see on kliendi jaoks
kõige selgem võiduhetk. Saada lühike kiri koos otselingiga arvustuse
vormile, mille leiad profiili haldusvaates. Ära paku vastutasu, sest
Google eemaldab sellised arvustused.

Hange.ee hinnangud jäävad sinna, kus nad on. Neid Google'i profiilile üle
tõsta ei saa, aga sama klient võib mõlemas kohas arvustuse jätta.

---

## 7. Struktuur

```
index.html          Avaleht
teenused.html       Kuus teenust eraldi alajaotustena
tood.html           Objektid ja joonised
tagasiside.html     Seitse hinnangut Hange.ee-st
kontakt.html        Hinnapäringu vorm ja kontaktandmed
aitah.html          Tänuleht, noindex
privaatsus.html     Privaatsustingimused
404.html            Vealeht, noindex
stiil.css           Jagatud stiil
skript.js           Menüü, vormi valideerimine, tööde filter
api/kontakt.js      Vormi taust, Resend
fondid/             IBM Plex Sans ja Mono, latin ja latin-ext
pildid/             Töödeldud WebP-d ja logo
jagamispilt.png     og:image, 1200x630
```

**Artiklite lehte ei ole.** Jätsin selle teadlikult välja, sest sisu
selle jaoks praegu ei ole ja tühi artiklite nimekiri kahjustaks pigem kui
aitaks. Kui artiklid tulevad, teen lehe koos Article ja ItemList
struktuurandmetega juurde.

---

## 8. Mida ma ise ei kinnitanud

Need punktid vajavad sinu või kliendi ülevaatust, sest mina neid
kontrollida ei saa.

- **PageSpeed skoor.** Eesmärgiks võetud 90 või rohkem mobiilis. Testida
  saab alles siis, kui leht on päris aadressil. Ma ei väida, et testisin.
- **Postiindeks** JSON-LD plokis, vaata punkt 1.
- **Fotode õigused.** Enne avaldamist kinnita, et fotod on kliendi omad
  või on luba olemas. Droonipildid ja profifotod kuuluvad sageli
  fotograafile, mitte tellijale.
- **Hinnad, garantiid, sertifikaadid.** Lehel ei ole ühtegi hinda ega
  garantiid, sest neid mulle ei antud. Kui need lisada, siis ainult
  kliendi kinnitusel.

---

## 9. Mobiili murdepunktid

CSS-i on lisatud järgmised murdepunktid. Testida ma ei saa, seega
loetlen ainult selle, mis koodis on.

| Murdepunkt | Mis muutub |
|---|---|
| kuni 900 px | Menüü läheb hamburgeri alla, avaneb päise all täislaiuses. Menüülinkide puutekõrgus 52 px. |
| alates 700 px | Teenusekaardid kahte veergu, galerii kahte veergu, jaluse plokid kahte veergu. |
| alates 768 px | Näitajate riba neljaveeruliseks. |
| alates 800 px | Tsitaadid kahte veergu. |
| alates 820 px | Hinnangud kahte veergu. |
| alates 900 px | Teenuse plokk kaheveeruliseks, kaks veergu jaotus, kutseplokk kaheveeruliseks. |
| alates 1000 px | Kontaktileht kaheveeruliseks, jalus neljaveeruliseks. |
| alates 1024 px | Hero kaheveeruliseks. |
| alates 1100 px | Teenusekaardid neljaveeruliseks, galerii kolmeveeruliseks. |
| alates 1240 px | Sisu laius lukustub, veerised kasvavad. |

Puutealad on vähemalt 44 px, nupud 48 px, vormiväljad 50 px.
Pikad e-posti aadressid murduvad `overflow-wrap` abil.
Kerivas konteineris absoluutselt positsioneeritud elemente ei ole.

---

## 10. Kontrollnimekiri, läbitud

1. Kõik JSON-LD plokid parsivad vigadeta. Kontrollitud koodiga.
2. Igal lehel täpselt üks h1, tasemed ei hüppa.
3. Igal lehel unikaalne title ja description, kontrollitud koodiga.
4. Kõik sisemised lingid ja ankrud viitavad olemasolevale failile.
5. HTML-i sildid tasakaalus, kontrollitud parseriga.
6. Ühtegi pikka mõttekriipsu ei ole, kontrollitud koodiga.
7. Koma ei ole rinnastava sidesõna ees. Kaks järelejäänud juhtu on
   kõrvallauset sulgevad, mis on reeglipärane.
8. Kohatäiteid nagu `[NIMI]` koodis ei ole.
9. Kõik pildiviited on olemas või asendatud triibulise kohatäitega.
10. `jagamispilt.png` on päriselt olemas, genereeritud lehe värvide ja
    logoga.
11. Jaluses on täisnimi, õiguslik vorm, registrikood, KMKR, aadress,
    e-post ja telefon.
12. Privaatsusleht on olemas ja lingitud nii vormi juurest kui jalusest.
13. Väljamõeldud fakte, tagasisidet ega numbreid ei ole. Kõik hinnangud
    on need, mis Hange.ee-st tulid. Hinnangute arvu lehel ei nimetata,
    et see ei vananeks uute hinnangute lisandudes.
14. Iga värvipaar vastab kontrastile 4.5:1, kontrollitud arvutusega.
    Madalaim on 5,57.
15. Fookusraam on klaviatuuriga nähtav, `:focus-visible` 2 px aktsent.
16. Murdepunktid loetletud punktis 9.
17. Fondid tulevad kaustast `fondid/`, mitte Google'i serverist.
    Kontrollitud, et õ ä ö ü on latin-alamhulgas ja ž š latin-ext-is.
18. API võtit üheski failis ei ole, ainult `process.env.RESEND_API_KEY`.
19. Vana lehte ei olnud, seega ümbersuunamisi vaja ei ole.
