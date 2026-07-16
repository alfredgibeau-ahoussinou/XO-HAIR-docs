# Emails — Brevo & Netlify

Les confirmations passent par **Brevo** (plan gratuit). Pas de clé API dans ce dépôt.

## Rôle des emails

| Moment | Destinataire |
|--------|----------------|
| Demande envoyée | Cliente (+ alerte possible vers l'email pro) |
| Acceptation / refus | Cliente |

## Côté Brevo (compte Ola / responsable)

1. Créer ou ouvrir un compte sur [brevo.com](https://www.brevo.com).
2. **Expéditeurs** : ajouter et **vérifier** l'adresse d'envoi (domaine ou Gmail selon config).
3. **Clés API** : créer une clé avec droit d'envoi transactionnel — la copier **une seule fois** dans Netlify.

## Variables Netlify (noms exacts)

À configurer dans **Site settings → Environment variables** (valeurs **secrètes**, jamais dans GitHub public) :

| Variable | Rôle |
|----------|------|
| `BREVO_API_KEY` | Clé API Brevo |
| `BREVO_VERIFIED_SENDER` | Email expéditeur **vérifié** chez Brevo |
| `OLA_EMAIL` | Email pro (alertes, reply-to pour que les clientes répondent à Ola) |
| `BOOKING_FROM_EMAIL` | Libellé expéditeur affiché (ex. `XOhair <email@...>`) |

Optionnel : `RESEND_API_KEY` si Brevo n'est pas configuré (fallback technique).

## Bonnes pratiques

- Tester avec une réservation fictive après chaque changement.
- Vérifier les spams si la cliente ne voit rien.
- Renouveler la clé API si elle a fuité (ancien dépôt public, capture d'écran, etc.).
