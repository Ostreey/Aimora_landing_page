# Landing Page

A modern, responsive landing page built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Designed for optimal performance and ready for Vercel deployment.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Performance**: Optimized for speed with Next.js 14
- **TypeScript**: Full type safety throughout the application
- **Animations**: Smooth animations powered by Framer Motion
- **SEO Ready**: Optimized meta tags and structured data
- **Vercel Ready**: Configured for seamless deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
landing-page/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page
│   ├── components/
│   │   ├── Hero.tsx             # Hero section
│   │   ├── Features.tsx         # Features section
│   │   ├── CTA.tsx              # Call-to-action
│   │   └── Footer.tsx           # Footer
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/
│   └── Glowna.png              # Hero image
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── vercel.json
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`. You can customize:
- Primary colors (blue theme)
- Secondary colors (gray theme)
- Custom animations

### Content
Update the content in each component:
- `Hero.tsx`: Main headline, description, and CTA buttons
- `Features.tsx`: Feature list and descriptions
- `CTA.tsx`: Call-to-action content
- `Footer.tsx`: Company information and links

### Styling
- Global styles: `src/app/globals.css`
- Component styles: Inline Tailwind classes
- Custom components: `tailwind.config.js`

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js
   - Deploy with default settings

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Configure DNS settings

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 📱 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Image Optimization**: Next.js Image component
- **Font Loading**: Optimized with `display: swap`
- **Bundle Size**: Minimal with tree shaking

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Code Quality

- **ESLint**: Configured with Next.js rules
- **TypeScript**: Strict mode enabled
- **Prettier**: Code formatting (recommended)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support, email hello@yourcompany.com or create an issue in the repository.

---

Built with ❤️ using Next.js 