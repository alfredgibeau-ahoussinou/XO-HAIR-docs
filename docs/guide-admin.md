# Guide — Espace admin

## Accès

- URL : [https://xo-hair-melun.netlify.app/admin](https://xo-hair-melun.netlify.app/admin)
- **Code d'accès** : fourni en privé par le responsable technique (variable `ADMIN_CODE` sur Netlify).  
  **Ne jamais** publier ce code sur GitHub public, Instagram ou email non chiffré.

## Onglets

| Onglet | Usage |
|--------|--------|
| **Tableau de bord** | Vue d'ensemble, actions prioritaires |
| **Calendrier** | Jours / créneaux bloqués, vue par date |
| **Aujourd'hui** | RDV du jour |
| **Réservations** | Accepter, refuser, filtrer (en attente, à venir, refusés) |
| **Horaires** | Jours travaillés, heures, pauses, préavis, horizon |

## Traiter une demande

1. Onglet **Réservations** → filtre **En attente**.
2. Ouvre la fiche : nom, email, téléphone, prestation, date/heure, message.
3. **Accepter** ou **Refuser** → la cliente reçoit un email automatique (si Brevo est bien configuré).
4. Après acceptation : rappelle l'**acompte 10 €** si besoin (liens dans l'email de confirmation).

## Bloquer du temps

- **Calendrier** : clic sur un créneau pour le bloquer / débloquer.
- **Horaires** : fermer un jour entier via jours travaillés ou dates bloquées.

## Export & notes

- Copier les infos client (bouton copie sur les fiches).
- Export CSV possible depuis la liste des réservations.
- Notes internes sur une réservation (visibles admin uniquement).

## Emails

Si une cliente ne reçoit pas d'email, vérifie [Brevo](./brevo-email.md) et l'onglet statut email sur la fiche RDV.
