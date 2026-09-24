---
name: Rapport quotidien du dépôt
on:
  schedule: daily
  workflow_dispatch:
permissions:
  contents: read
  issues: read
  pull-requests: read
  copilot-requests: write
network:
  allowed: [defaults, github]
tools:
  github:
    mode: gh-proxy
    toolsets: [default]
safe-outputs:
  create-issue:
    title-prefix: "Rapport quotidien : "
    labels: [report]
    close-older-issues: true
  mentions: false
  allowed-github-references: []
---

# Rapport quotidien des activités récentes

Produis un rapport quotidien en **français** sur l'activité récente du dépôt `Maevamaignann/form-validator`.

## Fenêtre et périmètre

- Fenêtre d'analyse: les 24 dernières heures complètes en UTC, jusqu'au démarrage du workflow.
- Inclure les événements pertinents observables via GitHub:
  - issues ouvertes, fermées et commentées
  - pull requests ouvertes, fusionnées ou mises à jour
  - commits récents sur la branche par défaut

## Sortie attendue

Rédige un rapport clair en français avec:

### Résumé
- total des issues actives sur la période
- total des pull requests actives sur la période
- points marquants

### Détails
- liste concise des éléments importants avec liens GitHub

### Recommandations
- prochaines actions utiles pour les mainteneurs

Si aucune activité n'est détectée sur la fenêtre, appelle `noop` avec la raison en français en mentionnant la période analysée.
