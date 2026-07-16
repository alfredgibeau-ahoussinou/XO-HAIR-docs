# XOhair — Informations projet

Documentation **publique** pour **XOhair** (Melun) : salon de pose de perruques, customisation et mèches Virgin hair.

> Le **code source** du site (Next.js, admin, API) est dans un dépôt GitHub **privé**. Ce dépôt ne contient que des guides et infos utiles pour l'équipe — **aucune clé API, aucun mot de passe admin**.

## Liens utiles

| Ressource | Lien |
|-----------|------|
| Site en ligne | [xo-hair-melun.netlify.app](https://xo-hair-melun.netlify.app) |
| Instagram | [@xo.haiir](https://www.instagram.com/xo.haiir/) |
| Politiques RDV (sur le site) | [Politiques](https://xo-hair-melun.netlify.app/politiques) |
| Réservation | [Réserver](https://xo-hair-melun.netlify.app/reservation) |

## Contenu de ce dépôt

| Fichier | Description |
|---------|-------------|
| [GUIDE-Ola.md](./GUIDE-Ola.md) | Guide principal pour Ola (admin, emails, paiements) |
| [docs/horaires.md](./docs/horaires.md) | Modèle et réglages des horaires / créneaux |
| [docs/politiques-resume.md](./docs/politiques-resume.md) | Résumé des politiques clientes |
| [docs/guide-admin.md](./docs/guide-admin.md) | Utiliser l'espace admin du site |
| [docs/brevo-email.md](./docs/brevo-email.md) | Configurer les emails (Brevo + Netlify) |
| [docs/paiements-paypal-revolut.md](./docs/paiements-paypal-revolut.md) | Acompte 10 € — PayPal & Revolut |
| [docs/valorisation-site-xohair.pdf](./docs/valorisation-site-xohair.pdf) | Note de valorisation professionnelle (FR) : architecture, inventaire 13 modules, comparatif marché, décomposition prix |
| [docs/valorisation-site-xohair-en.pdf](./docs/valorisation-site-xohair-en.pdf) | Valuation report (EN) — same structure, full English translation |
| [docs/valorisation-site-xohair.md](./docs/valorisation-site-xohair.md) | Source Markdown FR de la note de valorisation |
| [docs/valorisation-site-xohair-en.md](./docs/valorisation-site-xohair-en.md) | Source Markdown EN (English translation) |

## Dépôt code (privé)

L'accès au code est réservé aux personnes autorisées sur GitHub. Pour toute question technique, contacte la personne qui gère le dépôt privé **XO-HAIR**.

## Regénérer les PDFs de valorisation

```bash
cd scripts && npm install && node generate-valorisation-pdf.mjs
```

Génère les deux versions depuis les templates HTML (`valorisation-template-fr.html`, `valorisation-template-en.html`) — design noir & cuivre, marges A4 2 cm, diagrammes Mermaid, numéros de page. Sources éditoriales : `docs/valorisation-site-xohair.md` (FR) et `docs/valorisation-site-xohair-en.md` (EN).
