# Horaires & créneaux

## Valeurs par défaut (site)

| Paramètre | Valeur |
|-----------|--------|
| Jours travaillés | Mardi, mercredi, jeudi, vendredi, samedi |
| Heure d'ouverture | 10:00 |
| Heure de fermeture | 19:00 |
| Intervalle entre créneaux | 30 min |
| Préavis minimum | 24 h avant le RDV |
| Horizon de réservation | 60 jours |

> Ces valeurs sont modifiables dans l'admin → onglet **Horaires** (presets Mar–Sam, Lun–Ven, etc.).

## Modèle de planning hebdo (papier / Notion)

Copie et adapte :

```
Semaine du ___ / ___ / 20__

| Jour | Ouvert | Fermé | Notes |
|------|--------|-------|-------|
| Lundi | | ✓ | |
| Mardi | 10h–19h | | |
| Mercredi | 10h–19h | | |
| Jeudi | 10h–19h | | |
| Vendredi | 10h–19h | | |
| Samedi | 10h–19h | | |
| Dimanche | | ✓ | |

Pauses / blocages :
- 
Congés / jours fermés :
- 
```

## Dans l'admin

- **Calendrier** : bloquer un jour entier ou des créneaux précis.
- **Horaires** : jours travaillés, plages horaires, pauses (`blockedTimeRanges`), délai de préavis, avance max.
- Les prestations longues **occupent plusieurs créneaux** de 30 min (ex. pose 2h30 = 5 créneaux).

## Sync avec la réalité

Quand tu changes tes horaires dans l'admin, mets à jour ce fichier (optionnel) pour que l'équipe ait la même info sur GitHub.
