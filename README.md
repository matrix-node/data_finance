# Data Finance Analytics Dashboard

A modern, responsive data analytics landing page built with React and Tailwind CSS. This project showcases a professional finance analytics dashboard with clean UI components and smooth animations.

## 🚀 Features

- **Modern Design**: Clean, professional interface with Tailwind CSS styling
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Engaging UI components including:
  - Navigation bar with smooth scrolling
  - Hero section with animated text
  - Analytics dashboard with data visualization
  - Newsletter subscription form
  - Feature cards with hover effects
  - Footer with social links
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Type Safety**: ESLint configuration for code quality
- **Modern React**: Uses React 19 with functional components and hooks

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Styling**: Tailwind CSS 4.1.16
- **Build Tool**: Vite 7.1.7
- **Icons**: React Icons 5.5.0
- **Animations**: React Typed 2.0.12
- **Linting**: ESLint 9.36.0
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd data_finance
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── NavBar.jsx      # Navigation component
│   ├── Hero.jsx        # Hero section
│   ├── Analytics.jsx   # Analytics dashboard
│   ├── Newsletter.jsx  # Newsletter subscription
│   ├── Cards.jsx       # Feature cards
│   └── Footer.jsx      # Footer component
├── assets/             # Static assets
│   ├── data_finance.svg
│   ├── double.png
│   ├── laptop.jpg
│   ├── single.png
│   └── triple.png
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by:
- Modifying Tailwind classes in components
- Updating the `tailwind.config.cjs` file for custom themes
- Adding custom CSS in `index.css`

### Components
All components are modular and can be easily customized:
- Update component props for different content
- Modify styling classes for visual changes
- Add new components following the existing pattern

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help with the project, please:
- Open an issue on GitHub
- Check the documentation
- Review the code comments

---

**Built with ❤️ using React and Tailwind CSS**