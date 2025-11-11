# Recipe Sharing Website - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Pinterest's visual grid layouts, Tasty's recipe presentation, and Airbnb's card-based design system. This creates an appetizing, image-forward experience where recipes are the hero.

## Typography System

**Font Families:**
- Primary: 'Playfair Display' (serif) - for recipe titles and headings
- Secondary: 'Inter' (sans-serif) - for body text, navigation, and UI elements

**Hierarchy:**
- H1 (Recipe Titles): 3xl to 4xl, Playfair Display, semibold
- H2 (Section Headers): 2xl to 3xl, Playfair Display, medium
- H3 (Category Labels): xl, Inter, semibold
- Body: base to lg, Inter, regular
- Small Text (Meta info): sm, Inter, medium

## Layout & Spacing

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, and 16 for consistent rhythm
- Component padding: p-4 to p-8
- Section spacing: py-12 to py-20
- Card gaps: gap-6 to gap-8
- Element margins: mb-4, mt-6, mx-8

**Container Strategy:**
- Full-width sections with inner max-w-7xl containers
- Recipe grids: 12-column responsive grid (1 col mobile, 2 tablet, 3-4 desktop)
- Content areas: max-w-4xl for forms and detail pages

## Component Library

### Navigation Bar
Top-aligned sticky header with logo left, nav links center-right, user profile right-most. Height: h-16 to h-20. Clean, minimal design with subtle bottom border.

### Search Bar
Prominent search with icon prefix, rounded corners (rounded-lg), positioned below nav or in hero. Width: full on mobile, max-w-2xl on desktop. Include ingredient tag suggestions below input.

### Hero Banner
Full-width hero section (h-[500px] to h-[600px]) with high-quality food photography. Overlay gradient for text readability. Centered content with large heading (text-5xl), subtitle, and dual CTA buttons. Buttons with blurred backgrounds for visibility over images.

### Recipe Cards
Vertical cards with 4:3 aspect ratio image at top, content padding p-4 to p-6. Display: recipe name, brief description (2 lines max), rating stars, category badge, difficulty level, cooking time icon. Subtle shadow and border. Hover state: slight elevation increase.

### Category Pills
Horizontal scrollable row of category buttons. Rounded-full design, padding px-6 py-2. Active state with solid fill, inactive with border only.

### Recipe Detail Layout
Two-column desktop layout: left column for ingredients list (max-w-sm), right column for step-by-step instructions. Mobile stacks vertically. Generous spacing between instruction steps (mb-6).

### Forms (Submit Recipe)
Single column form, max-w-2xl centered. Clear section groupings for title, ingredients (dynamic add/remove), instructions (numbered textarea fields), metadata (category dropdown, time input). Large submit button at bottom.

### Rating System
Star icons using Font Awesome. Display both numeric average and visual stars. Interactive on detail pages for user ratings.

### Filter Panel
Sidebar on desktop (w-64), slide-out drawer on mobile. Checkbox groups for categories, radio buttons for difficulty, range slider for cooking time.

## Images

**Primary Images:**
1. **Hero Image**: Full-width banner image of beautifully plated dishes or cooking action shots. Vibrant, appetizing food photography. Position: Homepage top, h-[500px]-[600px]

2. **Recipe Card Thumbnails**: Square or 4:3 ratio images for each recipe card. High-quality food photos showing finished dish. Must be consistent in styling (similar lighting, plating style)

3. **Recipe Detail Hero**: Large image at top of recipe detail page showing finished dish, h-[400px], full width of content area

4. **Category Icons**: Use Font Awesome or Heroicons for category representations (breakfast fork, leaf for vegan, cake for desserts)

**Image Treatment:**
- Subtle rounded corners (rounded-lg) on all recipe images
- Slight shadow for depth
- Lazy loading for grid performance
- Placeholder gradients during load

## Interaction Patterns

**Micro-interactions:**
- Card hover: subtle scale (1.02) and shadow increase
- Button press: slight scale down (0.98)
- Filter apply: smooth transition for recipe grid re-layout
- Search: debounced input with loading spinner

**No animations needed for:**
- Page transitions
- Scroll effects
- Complex parallax

## Accessibility
- High contrast ratios for text over images (use overlay gradients)
- All interactive elements keyboard accessible
- Form inputs with clear labels and error states
- Alt text required for all recipe images
- Focus indicators on all clickable elements

## Visual Principles
- **Image-First**: Recipes are primarily visual - images dominate, text supports
- **Clean Hierarchy**: Clear visual separation between sections using spacing, not borders
- **Warmth**: Food imagery should feel inviting and appetizing
- **Scannable**: Easy to browse and filter quickly through grid layouts
- **Trust Signals**: Ratings, difficulty, and time prominently displayed for quick decision-making