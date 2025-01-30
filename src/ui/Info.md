# UI
The `ui` folder contains all the UI-related logic and components, organized using **Atomic Design principles**.

## Structure
- `atoms/`: Smallest components (e.g., buttons, inputs).
- `molecules/`: Combined atoms (e.g., cards, forms).
- `layouts/`: Shared layouts for pages.
- `pages/`: Complete page components with logic.

## Example: `ui/atoms/Button.tsx`
```typescript
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white p-2 rounded">
      {children}
    </button>
  );
};

export default Button;