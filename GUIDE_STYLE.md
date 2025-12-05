# 🎨 Guide de Style Ultra Moderne - Coulouche-Bot (Édition Cyberpunk Glass)

## Comparaison Avant/Après

### 🎨 Design Visuel

#### AVANT (Blue/White)
- Fond bleu basique ou blanc
- Style simple
- Couleurs standard

#### APRÈS ✨ (Ultra Modern)
- **Glassmorphism Premium**: Effets de verre dépoli avec flou d'arrière-plan (`backdrop-filter: blur(24px)`).
- **Ambiance Cyber/Neon**: Fond sombre (`#030712`) avec des accents Indigo (`#6366f1`) et Rose (`#ec4899`).
- **Animations Sophistiquées**:
    - Arrière-plan pulsant (`pulseBackground`).
    - Grille animée en arrière-plan (`slideGrid`).
    - Effets de brillance sur les icônes (`shimmer`).
- **Typographie**: Police `Outfit` pour un look tech et propre.

### 🎯 Éléments Clés

#### 1. Arrière-plan Animé
```css
background: radial-gradient(circle at 50% 50%, 
  rgba(99, 102, 241, 0.15) 0%, 
  rgba(236, 72, 153, 0.1) 25%, 
  rgba(3, 7, 18, 1) 70%);
animation: pulseBackground 10s ease-in-out infinite alternate;
```

#### 2. Carte en Verre (Chat Window)
```css
background: rgba(17, 24, 39, 0.7);
backdrop-filter: blur(24px);
border: 1px solid rgba(255, 255, 255, 0.08);
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
```

#### 3. Palette de Couleurs
| Nom | Hex | Usage |
|-----|-----|-------|
| Indigo | `#6366f1` | Primaire, accents, dégradés |
| Pink | `#ec4899` | Secondaire, accents |
| Violet | `#8b5cf6` | Accents |
| Dark BG | `#030712` | Fond principal |
| Glass | `rgba(17, 24, 39, 0.7)` | Fenêtres |

---

**Style Version**: 4.0 Ultra Modern
**Date**: 2025-12-05
