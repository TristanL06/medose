# Pour faire passer des informations de l'application mobile

Pour faire passer des informations de l'application mobile à l'application serveur, on utilise une possibilité offerte par MIT AI2. Sans rentrer dans les détails, le plus simple est de se mettre d'accord sur un formalisme de communication.

On a donc listé les besoins de chaque application et attribué un mot-clé à chaque besoin :

## Médose

### Inputs
- **Passer le NFC en mode lecture** : `nfc_read`
- **Déclencher la lecture du code barre** : `barcode_read`

### Outputs
- **Envoyer le contenu du NFC** : `nfc-content`
- **Envoyer le contenu du code barre** : `barcode-content`


## Médisafe

### Inputs
- **Déclencher la lecture du NFC** : `nfc_read`
- **Déclencher l'écriture du NFC** : `nfc_write`

### Outputs
- **Envoyer le contenu du NFC** : `nfc-content`

