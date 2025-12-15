# Planning Guide

A delightful, interactive website that showcases a whimsical gingerbread house with charming details and festive atmosphere.

**Experience Qualities**:
1. **Whimsical** - The design should evoke childlike wonder and holiday magic through playful elements and sweet details
2. **Cozy** - Warm colors and soft elements create an inviting, comforting atmosphere reminiscent of holiday baking
3. **Delightful** - Subtle animations and carefully crafted details surprise and enchant users

**Complexity Level**: Micro Tool (single-purpose application)
This is a focused showcase piece with a single primary purpose: displaying a charming gingerbread house illustration with interactive elements.

## Essential Features

### Gingerbread House Display
- **Functionality**: Renders an illustrated or CSS-crafted gingerbread house with recognizable features (walls, roof, door, windows, candy decorations)
- **Purpose**: Serves as the centerpiece and primary visual content
- **Trigger**: Loads automatically on page load
- **Progression**: Page loads → House animates in with a gentle entrance → Settles into place → Interactive elements become available
- **Success criteria**: House is clearly recognizable, visually appealing, and displays properly across all screen sizes

### Interactive Candy Decorations
- **Functionality**: Decorative elements (gumdrops, candy canes, peppermints) respond to hover/touch with subtle animations
- **Purpose**: Adds engagement and playfulness to encourage exploration
- **Trigger**: User hovers over or taps decorative elements
- **Progression**: Hover/touch → Element animates (wiggle, glow, scale) → Returns to rest state
- **Success criteria**: All interactive elements respond smoothly within 100ms, animations feel natural

### Snowfall Atmosphere
- **Functionality**: Gentle animated snowflakes falling in the background
- **Purpose**: Enhances the winter/holiday atmosphere without overwhelming the main content
- **Trigger**: Starts automatically on page load
- **Progression**: Continuous subtle animation throughout user session
- **Success criteria**: Snow is visible but doesn't distract from the house, performs smoothly without frame drops

## Edge Case Handling

- **Small screens**: House scales proportionally and maintains readability on mobile devices
- **Reduced motion preference**: Respects `prefers-reduced-motion` to disable animations for accessibility
- **Slow connections**: House structure appears first, then decorative elements load progressively
- **Touch vs mouse**: Interactive elements have adequate touch targets (44px minimum) and work with both input types

## Design Direction

The design should evoke the warmth of a cozy holiday kitchen filled with the smell of fresh gingerbread - sweet, inviting, and nostalgic. Think childhood memories of decorating cookies, vibrant candy colors against warm browns, and the soft glow of holiday lights.

## Color Selection

A warm, festive holiday palette with deep reds, rich golds, and cozy browns that evoke a cozy fireside holiday evening.

- **Primary Color**: Festive Crimson Red `oklch(0.55 0.22 25)` - Bold, warm red that captures the spirit of the holidays
- **Secondary Colors**: 
  - Warm Gold `oklch(0.62 0.15 45)` - Rich, buttery gold for accents and highlights
  - Forest Green `oklch(0.68 0.18 140)` - Deep evergreen for balance and traditional holiday feel
- **Accent Color**: Bright Gold `oklch(0.68 0.18 140)` - Festive green accent for decorative elements
- **Background Color**: Deep Burgundy Brown `oklch(0.20 0.06 30)` - Rich, warm dark background that creates intimate atmosphere
- **Foreground/Background Pairings**: 
  - Background (Deep Burgundy `oklch(0.20 0.06 30)`): Cream text `oklch(0.96 0.02 60)` - Ratio 12.8:1 ✓
  - Festive Red `oklch(0.55 0.22 25)`: White text `oklch(0.98 0.01 60)` - Ratio 4.8:1 ✓
  - Warm Gold `oklch(0.62 0.15 45)`: White text `oklch(0.98 0.01 60)` - Ratio 5.1:1 ✓

## Font Selection

Typography should feel hand-crafted yet readable, combining the playful spirit of holiday decorating with clean legibility.

- **Primary Font**: "Fredoka" - A friendly, rounded sans-serif that feels approachable and whimsical without being overly childish
- **Accent Font**: "Covered By Your Grace" - A handwritten style for special decorative text that suggests hand-icing on cookies

- **Typographic Hierarchy**:
  - H1 (Title): Fredoka Bold/48px/tight letter spacing - Optional festive heading
  - H2 (Labels): Fredoka Medium/24px/normal spacing - For any descriptive text
  - Body: Fredoka Regular/16px/1.5 line-height - For supporting content if needed

## Animations

Animations should feel gentle and magical, like watching sugar dust settle on fresh frosting. Use subtle entrance animations for the house structure (fade-in with slight scale), gentle continuous movement for snowfall, and playful micro-interactions on decorative elements (bounce, wiggle, glow on hover). The house should animate in piece-by-piece on load (foundation → walls → roof → decorations) creating a sense of being "built" before the user's eyes.

## Component Selection

- **Components**: 
  - Custom SVG or CSS-based house structure (no specific Shadcn component needed for the house itself)
  - Potential use of `Card` for any surrounding informational panels if needed
  - `Button` components styled as candy elements if interactive controls are added
  
- **Customizations**:
  - Custom CSS for gingerbread house structure using geometric shapes
  - Custom SVG elements for candy decorations (gumdrops, candy canes, peppermints)
  - Custom snowfall animation using CSS keyframes or framer-motion
  
- **States**:
  - Candy decorations: rest → hover (scale 1.1, rotate slightly, add glow) → press (scale 0.95)
  - House entrance: opacity 0 scale 0.8 → opacity 1 scale 1 (staggered by section)
  
- **Icon Selection**:
  - Phosphor icons not heavily needed; decorative elements will be custom
  - Potentially `Snowflake` from Phosphor for any UI controls
  
- **Spacing**:
  - Use generous padding around the house (p-8 to p-16)
  - Candy decorations spaced with gap-4 to gap-6 for visual breathing room
  - House elements use relative positioning with rem-based spacing
  
- **Mobile**:
  - House scales down proportionally maintaining aspect ratio
  - Stack any side content vertically below the house on mobile
  - Touch targets for interactive elements min 44px (scale decorations up on small screens if needed)
  - Reduce snowfall density on mobile for performance
