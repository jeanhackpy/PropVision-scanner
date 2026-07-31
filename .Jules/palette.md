# Journal de Palette 🎨

## 2025-07-31 - Accessibilité de la Carte de Recherche Interactive
**Learning:** Les cartes interactives simulées ne disposent généralement pas d'éléments HTML sémantiques ou d'interactions clavier par défaut. Les utilisateurs de lecteurs d'écran ou de navigation exclusivement au clavier se retrouvent exclus de l'action principale de l'application (le drop de pin-point search). Permettre de focaliser la carte via `tabIndex`, déclarer son rôle via `role="region"`, et capter les touches fléchées ainsi que `Space`/`Enter` restaure une équité d'interaction complète.
**Action:** Toujours rendre les composants de cartes/simulations focalisables au clavier, leur associer des ARIA labels descriptifs et gérer des raccourcis clavier sémantiques (touches fléchées, Entrée) pour simuler le clic de coordonnées de manière inclusive.

## 2025-07-31 - Intégration Native des Actions de Contact Téléphonique
**Learning:** L'utilisation de boutons génériques avec un événement de clic factice ou une modale personnalisée pour initier un contact téléphonique crée des frictions sur mobile et prive l'utilisateur de l'intégration native avec son application de numérotation. L'utilisation d'une balise d'ancrage `<a>` sémantique avec le protocole `tel:` résout ce problème de manière universelle sans surcharger le code.
**Action:** Préférer systématiquement l'élément `<a>` avec `href="tel:..."` pour les actions de numérotation d'agent afin de déclencher instantanément le composeur natif de l'appareil de l'utilisateur.
