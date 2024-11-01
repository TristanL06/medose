# Pour faire passer des informations de l'application mobile

Pour faire passer des informations de l'application mobile à l'application serveur, on utilise une possibilité offerte par MIT AI2. Sans rentrer dans les détails, le plus simple est de se mettre d'accord sur un formalisme de communication.

On a donc listé les besoins de chaque application et attribué un mot-clé à chaque besoin :

## Médose

### Inputs
- **Passer le NFC en mode lecture** : `read_nfc`
- **Déclencher la lecture du code barre** : `read_barcode`

### Outputs
- **Envoyer le contenu du NFC** : `{"nfc_result":data, "block_id": id}`
- **Envoyer le contenu du code barre** : `barcode-content`


## Médisafe

### Inputs
- **Déclencher la lecture du NFC** : `read_nfc`
- **Déclencher l'écriture du NFC** : `write_nfc`

### Outputs
- **Envoyer le contenu du NFC** : `{"nfc_result":data, "block_id": id}`

