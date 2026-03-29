# Gurudwara Daun Sahib

A modern, responsive website for Gurudwara Sahib Daun, built with Next.js and inspired by the official SGPC website design.

## 🌟 Features

### 🏠 Main Website

- **Responsive Design**: Mobile-first design that works on all devices
- **SGPC-Inspired UI**: Professional blue and white color scheme matching SGPC standards
- **Bilingual Content**: Punjabi and English text throughout the site
- **Smooth Navigation**: Single-page application with anchor links
- **Hero Section**: Eye-catching introduction with gurudwara imagery
- **History & Heritage**: Detailed information about architecture and significance
- **Daily Routine**: Complete prayer schedule and timings
- **Contact Information**: Location, hours, and visitor guidelines

### 💳 Donations System

- **Multiple Payment Options**: Online, Bank Transfer, and QR Code payments
- **UPI Integration**: Scan-to-pay functionality for mobile users
- **International Donations**: FCRA-compliant foreign contribution support
- **Donation Form**: Comprehensive information collection
- **Secure Processing**: Professional payment gateway integration

## 🛠️ Technology Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Images**: Next.js Image optimization
- **Icons**: Unicode emoji and SVG graphics

## 📁 Project Structure

```
daun/
├── frontend/
│   ├── app/
│   │   ├── page.tsx              # Main homepage
│   │   └── donations/
│   │       └── page.tsx          # Donations page
│   ├── public/
│   │   └── gurudwara/
│   │       └── 609b.jpeg          # Gurudwara image
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd daun
```

2. Install dependencies:

```bash
cd frontend
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Pages & Routes

### `/` - Homepage

- Gurudwara introduction and hero section
- History and heritage information
- Daily prayer schedule
- Contact and visit information
- Navigation to donations page

### `/donations` - Donations Page

- Multiple payment methods (Online, Bank, QR Code)
- UPI and mobile payment support
- International donation options
- Comprehensive donation form
- Receipt and acknowledgment system

## 🎨 Design Features

### Color Scheme

- **Primary**: Blue-900 (`#1e3a8a`) - Headers and accents
- **Secondary**: White (`#ffffff`) - Main backgrounds
- **Accent**: Blue-100 (`#dbeafe`) - Icon backgrounds
- **Text**: Gray-900 (`#111827`) - Primary text

### Typography

- **Headings**: Bold, responsive sizing (3xl to 5xl)
- **Body**: Regular weight, line-height optimized
- **Bilingual**: Punjabi (Gurmukhi) and English support

### Layout

- **Container**: Max-width centered layouts
- **Grid**: Responsive 2-3 column layouts
- **Spacing**: Consistent padding and margins
- **Shadows**: Subtle elevation for cards

## 🔧 Development

### Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Environment Variables

Create `.env.local` for environment-specific settings:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GURDWARA_NAME=Gurudwara Sahib Daun
```

## 📸 Assets

### Images

- Gurudwara main image: `/public/gurudwara/609b.jpeg`
- Optimized for web with Next.js Image component
- Responsive sizing and lazy loading

### Icons

- Unicode emoji for universal compatibility
- Custom SVG for QR code pattern
- Consistent sizing and spacing

## 🌐 Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (sm)
- **Tablet**: 768px - 1024px (md)
- **Desktop**: > 1024px (lg)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspired by [SGPC Official Website](https://sgpc.net/)
- Built with modern web technologies for community service
- Dedicated to the devotees of Gurudwara Sahib Daun

---

**ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ | ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫਤਿਹ**

_Waheguru Ji Ka Khalsa | Waheguru Ji Ki Fateh_
