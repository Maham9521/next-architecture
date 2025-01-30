# Shared
The `shared` folder contains reusable utilities, context, and global state management.

## Structure
- `context/`: React context providers for global state.
- `data/`: Shared data or constants (e.g., configuration, mock data).
- `store/`: Redux store configuration.
- `utils/`: Utility functions and helpers.

## Example: `shared/utils/formatDate.ts`
```typescript
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};