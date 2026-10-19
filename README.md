# ParcelDesk — Nested Order Routes

## Aim
Parceldesk — a React practical built with Vite, React, React Router DOM where relevant, and Tailwind CSS v4.

## Concepts used
- React functional components and JSX
- Component-based UI and responsive utility-first styling
- React Router DOM
- Form state, validation, and interactive feedback where relevant

## Requirements
- Node.js 20.19+ or 22.12+ recommended
- npm

## Run the project
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```

Each practical is independent. Open its folder in VS Code and run the commands from that folder.


## Nested routing and Outlet
The `/orders` route renders `OrdersLayout`. Its child routes render inside the layout's `<Outlet />`, so the sidebar and page shell stay visible while the order view changes.
