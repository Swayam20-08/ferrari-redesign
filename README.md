# Ferrari Website Redesign

A modern, responsive website redesign for Ferrari using Next.js, Tailwind CSS, and modern web technologies. This project showcases a premium automotive brand with stunning animations, interactive components, and a focus on user experience.

## 🚀 Features

### Design & UI/UX
- **Modern Design System**: Ferrari-inspired color palette with red (#FF2800), dark (#1A1A1A), and gold (#D4AF37)
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Components**: Hover effects, scroll animations, and micro-interactions
- **Typography**: Custom font combinations (Inter + Playfair Display)

### Technical Features
- **Next.js 14**: App Router with TypeScript
- **Tailwind CSS**: Custom design system with Ferrari brand colors
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Modern icon library
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized images and lazy loading

### Sections
1. **Hero Section**: Stunning landing with SF90 Stradale showcase
2. **Models**: Interactive car showcase with specifications
3. **Heritage**: Timeline of Ferrari's history and achievements
4. **Racing**: Formula 1 legacy and current season information
5. **Experience**: Driving experiences and events
6. **Footer**: Comprehensive navigation and contact information

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Images**: Unsplash (placeholder images)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ferrari-redesign
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

## 🎨 Design System

### Colors
- **Ferrari Red**: `#FF2800` - Primary brand color
- **Dark**: `#1A1A1A` - Background and text
- **Gold**: `#D4AF37` - Accent color
- **Silver**: `#C0C0C0` - Secondary text
- **Gray**: `#2A2A2A` - Cards and sections

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Inter (body text)

### Components
- **Buttons**: Primary and secondary button styles
- **Cards**: Hover effects and glass morphism
- **Navigation**: Sticky header with scroll effects
- **Animations**: Fade-in, slide-up, and scale animations

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance

- **Lazy Loading**: Images and components load on demand
- **Optimized Images**: WebP format with responsive sizes
- **Code Splitting**: Automatic code splitting with Next.js
- **SEO**: Optimized meta tags and structured data

## 🔧 Customization

### Adding New Models
Edit the `models` array in `src/components/Models.tsx`:
```typescript
const models = [
  {
    id: 5,
    name: 'New Model',
    category: 'Supercar',
    price: '$500,000',
    image: 'path/to/image.jpg',
    specs: {
      power: '800 HP',
      acceleration: '3.0s',
      topSpeed: '200 mph'
    }
  }
]
```

### Changing Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  ferrari: {
    red: '#FF2800',
    dark: '#1A1A1A',
    gold: '#D4AF37',
    // ... other colors
  }
}
```

## 📄 Project Structure

```
ferrari-redesign/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Models.tsx
│       ├── Heritage.tsx
│       ├── Racing.tsx
│       ├── Experience.tsx
│       └── Footer.tsx
├── public/
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
```

## 🎯 Key Features Implemented

### ✅ Modernized UI & UX
- Clean, modern design with Ferrari branding
- Smooth animations and transitions
- Interactive hover effects
- Mobile-first responsive design

### ✅ AI-Inspired Design Elements
- Custom color scheme based on Ferrari brand
- Modern typography combinations
- Glass morphism effects
- Gradient overlays and backgrounds

### ✅ SEO & Mobile Optimization
- Comprehensive meta tags
- Open Graph and Twitter cards
- Responsive images
- Fast loading times
- Mobile-optimized navigation

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`
- **AWS Amplify**: Connect repository and deploy
- **Traditional Hosting**: Build with `npm run build` and upload `out` folder

## 📈 Future Enhancements

- **CMS Integration**: Strapi backend for content management
- **E-commerce**: Online car configuration and ordering
- **3D Models**: Interactive 3D car viewers
- **AR/VR**: Virtual showroom experiences
- **Multi-language**: Internationalization support
- **Analytics**: User behavior tracking
- **A/B Testing**: Performance optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes. Ferrari is a registered trademark of Ferrari N.V.

## 🙏 Acknowledgments

- Ferrari for inspiration
- Unsplash for placeholder images
- Framer Motion for animations
- Tailwind CSS for styling
- Next.js team for the framework

---

**Built with ❤️ and 🏎️ for the love of automotive excellence** 