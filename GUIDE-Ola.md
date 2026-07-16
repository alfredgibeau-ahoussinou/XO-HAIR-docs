# Guide Ola — XOhair

Ce guide regroupe ce que tu dois savoir pour gérer le site au quotidien, **sans toucher au code**.

## 1. Par où commencer

1. Lis le [résumé des politiques](./docs/politiques-resume.md) (aligné avec la page `/politiques` du site).
2. Ouvre l'**espace admin** : [xo-hair-melun.netlify.app/admin](https://xo-hair-melun.netlify.app/admin)  
   Le **code d'accès** t'est communiqué **en privé** (message, mot de passe manager) — il n'est **pas** dans ce dépôt public.
3. Consulte [guide admin](./docs/guide-admin.md) pour accepter/refuser les RDV et bloquer des créneaux.
4. Pour les emails et l'acompte : [Brevo](./docs/brevo-email.md) et [PayPal / Revolut](./docs/paiements-paypal-revolut.md).

## 2. Flux réservation (rappel)

1. La cliente envoie une demande sur le site → elle reçoit un email « demande reçue ».
2. Tu **acceptes** ou **refuses** dans l'admin → elle reçoit un second email.
3. Si accepté : elle paie l'**acompte de 10 €** (Revolut ou PayPal), sauf **dépose de mèches seule** (pas d'acompte).
4. Le **solde** se règle le jour J (espèces ou Revolut).

## 3. Horaires par défaut (modifiables dans l'admin)

Voir le détail dans [docs/horaires.md](./docs/horaires.md). En résumé :

- Jours ouvrés typiques : **mardi → samedi**
- Ouverture : **10h00 – 19h00**
- Créneaux : toutes les **30 minutes**
- Délai minimum avant réservation : **24 h**
- Réservation jusqu'à **60 jours** à l'avance

Tu peux tout ajuster dans l'onglet **Horaires** de l'admin.

## 4. Urgences

Les prestations **urgentes** ne se réservent **pas** en ligne. La cliente doit te contacter (Instagram [@xo.haiir](https://www.instagram.com/xo.haiir/), mail ou message).

## 5. Netlify (variables secrètes)

Les clés (Brevo, code admin, liens de paiement) se configurent dans **Netlify** → Site → **Environment variables**.  
Ne les mets **jamais** dans ce dépôt public ni dans un message non sécurisé.

## 6. Besoin d'aide technique ?

Contacte la personne qui maintient le dépôt privé **XO-HAIR** sur GitHub.
