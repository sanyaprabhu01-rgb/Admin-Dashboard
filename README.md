# Frontend Application

A modern React-based frontend application built with Vite, featuring authentication components for administrators and trainers.

## 🚀 Features

- **Admin Authentication**: Secure login system for administrators
- **Trainer Authentication**: Login system for trainers (in development)
- **Modern React**: Built with React 19.1.0 for optimal performance
- **Fast Development**: Powered by Vite for lightning-fast HMR
- **Code Quality**: ESLint configuration for consistent code quality
- **CSS Modules**: Scoped styling with CSS Modules support

## 🛠️ Tech Stack

- **Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: CSS Modules
- **Linting**: ESLint with React-specific rules
- **Development**: Hot Module Replacement (HMR)

## 📦 Dependencies

### Production Dependencies
- `react` - Core React library
- `react-dom` - React DOM rendering

### Development Dependencies
- `@vitejs/plugin-react` - Vite React plugin with Babel
- `eslint` - JavaScript/React linting
- `eslint-plugin-react-hooks` - React Hooks linting rules
- `eslint-plugin-react-refresh` - React Refresh linting rules
- `@types/react` & `@types/react-dom` - TypeScript definitions
- `globals` - Global variables for ESLint

## 🏗️ Project Structure

```
frontend/
├── public/
│   └── vite.svg                 # Vite logo
├── src/
│   ├── assets/                  # Static assets
│   ├── component/
│   │   ├── Admin/
│   │   │   └── Ad-Login/
│   │   │       ├── AdminLog.jsx      # Admin login component
│   │   │       └── AdminLog.module.css # Admin login styles
│   │   └── Trainers/
│   │       └── TraLogin/        # Trainer login (in development)
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles
├── eslint.config.js             # ESLint configuration
├── vite.config.js               # Vite configuration
├── package.json                 # Project dependencies and scripts
└── README.md                    # Project documentation
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## 🔐 Authentication

### Admin Login

The application currently features an admin login system with the following functionality:
- Form validation for username and password fields
- Loading state during authentication
- Success/error message display
- Demo credentials (for development):
  - Username: `admin`
  - Password: `admin123`

### Trainer Login

Trainer authentication system is currently in development and will be available in future releases.

## 🎨 Styling

The project uses CSS Modules for component-scoped styling, ensuring:
- No style conflicts between components
- Better maintainability
- Clear separation of concerns

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Vite Configuration

The project uses a minimal Vite configuration with React plugin for optimal development experience.

### ESLint Configuration

ESLint is configured with React-specific rules including:
- React Hooks rules
- React Refresh rules
- Modern JavaScript standards

## 🚀 Deployment

To deploy this application:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform
3. Configure your server to serve the `index.html` for all routes (SPA routing)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is private and not licensed for public use.

## 🔮 Future Enhancements

- Complete trainer authentication system
- User dashboard implementation
- Role-based access control
- API integration
- Enhanced form validation
- Unit and integration tests
