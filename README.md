# Room for All 2025

Room for All 2025 is a single-page React application that introduces a transitional housing
initiative for returning citizens and neighbors experiencing housing instability. The site combines
story-driven content, program highlights, and multi-form engagement flows so visitors can learn,
tour, donate, and connect with the organization.

## Features
- Impact-first hero, mission, and program sections that articulate the Room for All vision.
- Employment pathway content that walks through the A Job → Better Job → Career model.
- Image gallery with accessible captions and lightbox experience.
- Contact hub with Web3Forms-powered flows for housing applications, donations, and partnerships.
- Responsive layout with sticky navigation and clear calls to action.

## Tech Stack
- React 18 with functional components and hooks
- Vite 4 for fast local development and optimized builds
- Modern CSS, including responsive and accessibility-focused styling

## Getting Started

### Prerequisites
- Node.js 18+ (earlier LTS releases should also work)
- npm 9+ (bundled with Node.js)

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```
Vite will print a local development URL (default `http://localhost:5173`) where you can preview the
site with hot module replacement.

### Production Build
```bash
npm run build
npm run preview
```
`npm run build` outputs the optimized production bundle inside `dist/`. Use `npm run preview` to
locally test that build with Vite’s static server.

## Environment Variables
The contact forms are wired to [Web3Forms](https://web3forms.com/). Create a `.env` file (or set an
environment variable) with:
```bash
VITE_WEB3FORMS_KEY=your-access-key
```
Without this value the forms will show an error state and skip submission.

## Project Structure
```text
room-for-all2025/
├── public/
│   └── assets/               # Static images used by the hero, gallery, and other sections
├── src/
│   ├── App.jsx               # Top-level composition of the site sections
│   ├── App.css               # Global styles and responsive rules
│   ├── main.jsx              # React entry point rendered by Vite
│   └── components/           # Feature-specific sections (Header, Hero, Mission, Programs, Gallery, Contact, Footer)
├── index.html                # Base HTML template used by Vite
├── package.json              # Dependencies and script definitions
├── package-lock.json         # Locked dependency tree
└── README.md                 # Project documentation
```

## Customization Notes
- Update section copy inside `src/components/*.jsx` to reflect new initiatives or campaigns.
- Replace or add imagery by placing files in `public/assets/images` and updating component paths.
- Adjust color, typography, and layout tokens inside `src/App.css`.

## Accessibility & Responsiveness
The UI favors semantic HTML, labeled interactions, and keyboard-accessible components (e.g., the
gallery lightbox and form states). CSS breakpoints ensure the page renders cleanly on mobile, tablet,
and desktop viewports.

## License
This project is distributed under the [Apache License 2.0](LICENSE).
