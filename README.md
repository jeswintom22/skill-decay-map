# Skill Decay Map

A React application for visualizing and tracking skill decay over time. This tool helps you understand how skills deteriorate without practice and provides insights through various analytical lenses.

## Features

- **Skill Management**: Add, edit, and track your skills
- **User Profiles**: Separate skill database for each user - login with username to access your skills
- **Decay Visualization**: Interactive skill map showing decay over time with color-coded status
- **Mark as Practiced**: Click any skill bubble to mark it as practiced and reset its decay
- **Multiple Lenses**: Different perspectives on skill data (interpretation, reflection, etc.)
- **Time Slider**: Navigate through skill history
- **Graveyard**: View decayed/archived skills
- **AI Reflection**: Get AI-powered insights on skill maintenance
- **Manifesto**: Philosophical take on skill decay
- **Landing Page**: Beautiful entrance with animated lava lamp effect
- **Login System**: Per-user authentication with separate skill databases
- **Custom Color Scheme**: Beach-inspired palette (Bright Blue, Blue Green, Dusty White, Pink Sand, Dark Sand)

## Tech Stack

- React 19
- Vite
- ESLint

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd skill-decay-map
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

1. **Landing Page**: The app opens with an animated title - click anywhere to proceed
2. **Login**: Enter your username to access your skill database
3. **Add Skills**: Use the "Add New Skill" form to create new skills with:
   - Skill name
   - Importance level (low, medium, critical)
   - Decay rate (slow, medium, fast)
   - Core level (peripheral, important, core)
4. **View Skill Map**: See your skills visualized based on:
   - Position: Distance from center reflects core level
   - Size: Importance of the skill
   - Color: Decay status (green = healthy, yellow = warning, red = critical)
5. **Mark as Practiced**: Click any skill bubble to open details and mark it as practiced
6. **Time Navigation**: Use the slider to explore how your skills decay over time
7. **Switch Lenses**: Change perspective using different analytical lenses
8. **Check Graveyard**: View skills that have completely decayed

## Color Scheme

The app uses a "Minimal Colors, Soft Beach" palette:
- **Bright Blue** (#51e2f5): Primary accent
- **Blue Green** (#9df9ef): Secondary accent
- **Dusty White** (#edf756): Light accents
- **Pink Sand** (#ffa8B6): Emphasis
- **Dark Sand** (#a28089): Text and headings

## Building for Production

```bash
npm run build
```

## Linting

```bash
npm run lint
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## License

This project is private and not licensed for public use.
