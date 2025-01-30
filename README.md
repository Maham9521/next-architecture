### **Next.js Architecture 2025**

---
# Next.js Architecture 2025

A modern Next.js architecture with the latest tech stacks as of 2025. This project is designed to be a scalable, maintainable, and future-ready template for building Next.js applications.

---

## **Features**
- **Next.js 15+** with App Router
- **React 19+** with Server Components
- **TypeScript 5.5+** for type safety
- **Tailwind CSS 4.0+** for styling
- **RTK Query** for API management
- **Atomic Design** for UI components
- **Authentication** with route guards
- **Testing** with Jest, Vitest, and Cypress
- **CI/CD** with GitHub Actions

---

## **Tech Stack**
| **Category**       | **Tools**                                                                 |
|---------------------|---------------------------------------------------------------------------|
| **Core**            | Next.js 15+, React 19+, TypeScript 5.5+                                   |
| **State Management**| Redux Toolkit 3.0+, Zustand 5.0+, or Recoil 2.0+                          |
| **Styling**         | Tailwind CSS 4.0+, CSS Modules                                            |
| **API Layer**       | RTK Query, Axios 2.0+, or tRPC 12+                                        |
| **Routing**         | Next.js App Router                                                        |
| **Testing**         | Jest 30+, Vitest 2.0+, React Testing Library, Cypress 12+                 |
| **Bundler**         | Turbopack (Next.js)                                                       |
| **Linting/Formatting**| ESLint 9+, Prettier 4+, Husky 9+                                        |
| **Auth**            | NextAuth.js 5+, Clerk, or Auth0                                           |
| **Deployment**      | Vercel, Netlify, or AWS Amplify                                           |
| **Analytics**       | Vercel Analytics, PostHog                                                 |
| **Documentation**   | Storybook 8+, Docusaurus 3.0+                                             |

---

## **Folder Structure**
```bash
/
├── app/                  # Next.js App Router
│   ├── (auth)/           # Authentication routes
│   ├── (main)/           # Protected routes
│   ├── api/              # API routes
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── core/                 # Backend logic, API endpoints, and services
│   ├── api/              # API service definitions using RTK Query
├── shared/               # Shared utilities, context, and global state
│   ├── context/          # React context providers
│   ├── data/             # Shared data or constants
│   ├── store/            # Redux store configuration
│        └── slices/           # Redux Toolkit slices for local state (optional)
│   └── utils/            # Utility functions and helpers
├── ui/                   # UI components organized using Atomic Design
│   ├── atoms/            # Smallest components (e.g., buttons, inputs)
│   ├── molecules/        # Combined atoms (e.g., cards, forms)
│   ├── layouts/          # Shared layouts for pages
│   └── pages/            # Complete page components with logic
├── public/               # Static assets (e.g., images, fonts)
├── .github/              # GitHub Actions and issue templates
├── .storybook/           # Storybook configuration
├── .husky/               # Git hooks for pre-commit checks
├── .vscode/              # Editor settings for VS Code
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

---

## **Setup Instructions**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nextjs-architecture-2025.git
   ```
2. Navigate to the project directory:
   ```bash
   cd nextjs-architecture-2025
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## **Usage Examples**

### **1. API Route with Next.js**
#### **File: `app/api/users/route.ts`**
```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];
  return NextResponse.json(users);
}
```

#### **Usage in a Component**
```typescript
import React from 'react';

const UsersPage = async () => {
  const res = await fetch('/api/users');
  const users = await res.json();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
```

---

### **2. Authentication with NextAuth.js**
#### **File: `app/api/auth/[...nextauth]/route.ts`**
```typescript
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
```

#### **Usage in a Component**
```typescript
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>Please sign in to view your profile.</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {session.user?.name}!</p>
    </div>
  );
};

export default ProfilePage;
```

---

### **3. Atomic Design Components**
#### **File: `ui/atoms/Button.tsx`**
```typescript
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const Button = ({ children, onClick, type = 'button', disabled = false, className = '' }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
```

---

## **Contributing**
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**
- [Next.js](https://nextjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/)

---

This updated project structure and documentation align with **Next.js Architecture 2025**, making it a comprehensive and future-ready template for Next.js developers. 🚀