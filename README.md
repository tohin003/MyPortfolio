# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- ✨ Smooth animations with Framer Motion
- 📱 Mobile-first approach
- 🎯 Interactive sections: Hero, About, Projects, Experience, Contact
- 🌟 Beautiful UI components with Radix UI
- 🎭 Custom animations and transitions

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd DevPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
client/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components
│   ├── lib/                # Utility functions
│   ├── hooks/              # Custom React hooks
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
└── ...
```

## Customization

### Personal Information

Update the following files with your information:
- `client/src/components/hero-section.jsx` - Name, title, description
- `client/src/components/about-section.jsx` - Skills and about text
- `client/src/components/projects-section.jsx` - Your projects
- `client/src/components/experience-section.jsx` - Work experience
- `client/src/components/contact-section.jsx` - Contact details

### Styling

The website uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.ts`
- Global styles in `client/src/index.css`
- Component-specific styles in each component file

### Animations

Animations are powered by Framer Motion. You can modify:
- Animation durations and delays
- Transition effects
- Hover animations

## Deployment

The website can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

## License

MIT License - feel free to use this template for your own portfolio!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 