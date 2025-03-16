# Modern Next.js Template

A modern, full-featured Next.js application template with TypeScript, TailwindCSS, and more.

## Features

- ⚡️ Next.js 14 with App Router
- 🔒 TypeScript for type safety
- 💎 TailwindCSS for styling
- 📱 Responsive design
- 📁 Well-organized folder structure
- 🔄 Context API for state management
- 🪝 Custom React hooks
- 🛠️ Reusable components
- 📊 Data fetching patterns

## Getting Started

### Prerequisites

- Node.js (20.x or later recommended)
- pnpm (9.x or later)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/Prathamesh-Chougale-17/next-modern-portfolio-template.git
   cd next-modern-portfolio-template
   ```

2. Install dependencies

   ```bash
   pnpm install
   ```

3. Set up environment variables

   ```bash
   cp .env.example .env.local
   ```

   Then edit `.env.local` with your values.

4. Start the development server
   ```bash
   pnpm dev
   ```

## Project Structure

```
├── actions/       # Server actions for Next.js
├── app/           # App Router pages and layouts
├── components/    # Reusable UI components
├── context/       # React contexts
├── data/          # Data fetching and API functions
├── hooks/         # Custom React hooks
├── lib/           # Utility functions and libraries
├── public/        # Static assets
└── types/         # TypeScript type definitions
```

## Customizing Content

The website content is centralized in the `data/en.ts` file, making it easy to update text across the entire application without modifying component code.

To customize the website content:

1. Navigate to `data/en.ts`
2. Update the text values as needed
3. Save the file to see changes reflected throughout the site

This approach separates content from presentation, making it easier to maintain and update your application.

```typescript
// Example structure of data/en.ts
export const en = {
  leetcode_username: "prathameshchougale17", // Add your LeetCode username here to dynamically fetch your stats
  navItems: [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    // { title: "Blog", href: "/blog" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
  // Additional content sections...
};
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Technologies

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Deployment

This template is optimized for deployment on Vercel, the platform built by the creators of Next.js.

### Deploying to Vercel

1. Create a Vercel account at [vercel.com](https://vercel.com) if you don't have one

2. Install the Vercel CLI (optional)

   ```bash
   npm i -g vercel
   ```

3. Deploy using one of these methods:

   **Option A: Connect your GitHub repository**

   - Push your code to GitHub
   - Import your repository on Vercel's dashboard
   - Vercel will automatically detect Next.js and configure the build settings

   **Option B: Deploy from CLI**

   ```bash
   vercel
   ```

4. Configure environment variables in the Vercel dashboard under Project Settings > Environment Variables

5. Set up a custom domain (optional) under Project Settings > Domains

Vercel will automatically handle continuous deployments whenever you push changes to your connected repository. The platform is optimized for Next.js applications with features like Preview Deployments for pull requests and automatic HTTPS.
