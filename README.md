# Base Project Template

This is my base layout/template that I use for almost all my new projects. May or may not use it for some cases though.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **shadcn/ui** - Beautiful component library built with Radix UI
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript

## Features

- 🎨 Beautiful UI components with shadcn/ui
- 🌙 Dark mode support
- 📱 Fully responsive design
- ♿ Accessible components
- 🎯 Interactive component examples
- 🔧 Dropdown-based example selector
- 📦 Pre-configured with essential components:
  - Buttons (all variants and sizes)
  - Dialogs & Alert Dialogs
  - Context Menus
  - Navigation Menus
  - Select Components
  - Forms & Inputs
  - Typography examples

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding More Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

Browse all available components at [ui.shadcn.com](https://ui.shadcn.com/docs/components)

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx          # Main demo page
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   └── lib/
│       └── utils.ts
├── components.json           # shadcn/ui config
└── tailwind.config.js
```

## Customization

This template includes a comprehensive showcase page that demonstrates all the installed components. You can:

1. **Replace the demo page** with your actual application
2. **Keep the components** and build upon them
3. **Use the examples** as reference for implementation
4. **Customize the theme** in `globals.css` and `tailwind.config.js`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
