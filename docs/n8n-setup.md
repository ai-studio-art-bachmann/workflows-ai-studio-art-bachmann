# n8n Töövoo Seadistamise Juhend

See dokument selgitab, kuidas seadistada n8n töövoogu, et see töötaks korrektselt meie chat rakendusega.

## Üldine ülevaade

Meie rakendus saadab sõnumid n8n webhookile, mis peaks töötlema need ja saatma vastuse tagasi. Rakendus eeldab, et n8n vastus on ühes järgmistest formaatidest:

## Vastuse formaadid

Rakendus toetab järgmisi vastuse formaate:

### Formaat 1: `response` väli

```json
{
  "response": "Sinu vastuse tekst siin"
}
```

### Formaat 2: `Value` väli

```json
{
  "Value": "Sinu vastuse tekst siin"
}
```

### Formaat 3: `message.content` struktuur

```json
{
  "message": {
    "content": "Sinu vastuse tekst siin"
  }
}
```

### Formaat 4: Otsene string

```
"Sinu vastuse tekst siin"
```

## n8n töövoo seadistamine

1. **Webhook sõlm**:
   - Loo uus n8n töövoog
   - Lisa "Webhook" sõlm
   - Vali "Respond to Webhook" režiim
   - Salvesta webhook URL, see peaks olema kujul: `https://joosep.app.n8n.cloud/webhook/2e6d9caa-dde9-4d59-8a61-368fa1d89ab4`

2. **OpenAI sõlm (või muu töötlus)**:
   - Lisa OpenAI sõlm või muu loogika sõnumite töötlemiseks
   - Seadista see nii, et see võtaks sisendi webhook sõlmist

3. **"Respond to Webhook" sõlm**:
   - Veendu, et töövoo lõpus on "Respond to Webhook" sõlm
   - Seadista vastuse formaat vastavalt ühele ülaltoodud formaadile
   - Näiteks:
     ```
     {
       "response": "{{$node["OpenAI"].json["message"]["content"]}}"
     }
     ```
     või
     ```
     {
       "Value": "{{$node["OpenAI"].json["message"]["content"]}}"
     }
     ```

## Testimine

Testi oma töövoogu:

1. Mine meie rakenduses `/test` lehele
2. Sisesta oma webhook URL
3. Saada testisõnum
4. Kontrolli vastust ja veendu, et see on ühes toetatud formaadis

## Tõrkeotsing

- Kui vastus ei ilmu chat aknas, kontrolli, et vastuse formaat oleks õige
- Kontrolli n8n töövoo logisid võimalike vigade leidmiseks
- Veendu, et "Respond to Webhook" sõlm on seadistatud õigesti

## Näide: Lihtne Echo Töövoog

1. Webhook sõlm (Respond to Webhook režiimis)
2. Function sõlm:
   ```javascript
   return {
     response: `Sain teie sõnumi: "${$input.body.message}"`
   };
   ```
3. Respond to Webhook sõlm (seadistatud tagastama Function sõlmi väljundit)

See lihtne töövoog lihtsalt kordab kasutaja sõnumit, lisades selle ette teksti "Sain teie sõnumi: ".
