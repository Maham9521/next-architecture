# Core
The `core` folder contains all the backend-related logic, including API endpoints, services, and state management using **Redux Toolkit Query (RTK Query)**.

## Structure
- `api/`: API service definitions and endpoints using `createApi`.

## API Services with RTK Query
RTK Query is a powerful data fetching and caching tool built into Redux Toolkit. It simplifies API interactions by automatically generating hooks for queries and mutations.

### Example: `core/api/userApi.ts`
```typescript
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface User {
  id: string;
  name: string;
  email: string;
}

// Define the API service
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    // Query to fetch a user by ID
    getUser: builder.query<User, string>({
      query: (id) => `users/${id}`,
    }),
    // Mutation to update a user
    updateUser: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: `users/${user.id}`,
        method: 'PUT',
        body: user,
      }),
    }),
  }),
});

// Export hooks for usage in components
export const { useGetUserQuery, useUpdateUserMutation } = userApi;



#### Usage in component Example

import React from 'react';
import { useGetUserQuery, useUpdateUserMutation } from '../core/api/userApi';

const UserProfile = ({ userId }: { userId: string }) => {
  const { data: user, isLoading } = useGetUserQuery(userId);
  const [updateUser] = useUpdateUserMutation();

  const handleUpdate = () => {
    updateUser({ id: userId, name: 'New Name' });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
      <button onClick={handleUpdate}>Update Name</button>
    </div>
  );
};

export default UserProfile;