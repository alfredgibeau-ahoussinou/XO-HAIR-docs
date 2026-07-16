# Acompte 10 € — PayPal & Revolut

L'acompte s'affiche après réservation **acceptée** (écran de succès + email), sauf prestations **sans acompte** (ex. dépose de mèches seule).

## Ce qu'Ola doit fournir

Liens de paiement **personnels** (PayPal.me / Revolut.me) avec montant **10 EUR** — **sans** les coller dans ce dépôt public.

## Variables Netlify

**Option 1 — URLs complètes (recommandé)**

| Variable | Exemple de format (à adapter) |
|----------|-------------------------------|
| `PAYPAL_PAYMENT_URL` | `https://paypal.me/TON_PSEUDO/10EUR` |
| `REVOLUT_PAYMENT_URL` | `https://revolut.me/@TON_PSEUDO/10eur` |

**Option 2 — pseudos seuls**

| Variable | Rôle |
|----------|------|
| `PAYPAL_ME_USERNAME` | Construit l'URL PayPal automatiquement |
| `REVOLUT_USERNAME` | Construit l'URL Revolut automatiquement |

Si aucune variable n'est définie, le site indique que les liens arriveront par email après confirmation.

## Vérification

1. Faire une réservation test → accepter dans l'admin.
2. Ouvrir l'email de confirmation : les boutons PayPal / Revolut doivent ouvrir **10 €** sur le bon compte.

## Solde jour J

Rappel politique : solde en **espèces** ou **Revolut** (hors scope des variables ci-dessus).
