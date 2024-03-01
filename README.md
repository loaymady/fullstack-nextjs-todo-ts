# Fullstack Next.js Todo App (TypeScript)

## Overview

The Fullstack Next.js Todo App is a TypeScript-based application that combines a user-friendly frontend with a robust backend, allowing users to seamlessly add, edit, and delete todos. Each todo is associated with the user account, ensuring a personalized experience. Leveraging technologies like Next.js, React, Prisma, Clerk Authentication, and TypeScript, this app provides a secure and feature-rich todo management solution.

## Technologies Used

- **Next.js**: React framework for building web applications.
- **TypeScript**: Typed superset of JavaScript.
- **Prisma**: Database toolkit for TypeScript and Node.js.
- **Clerk**: Authentication library for Next.js.
- **React-Hook-Form**: Form validation library for React.
- **Shadcn/UI**
  - **Radix UI**: Set of low-level UI primitives for React.
  - **Class Variance Authority**: Library for class variance in TypeScript.
  - **Clsx**: Utility for conditionally joining class names together.
- **Tailwind CSS**: Utility-first CSS framework.
- **Lucide React**: Library for icons as React components.
- **Moment**: Library for handling dates and times.
- **Zod**: TypeScript-first schema declaration and validation library.

## Demo

[Explore Fullstack Next.js Todo TS App](https://fullstack-nextjs-todo-ts.vercel.app/)

## How to Run

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed
- MongoDB server running

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/loaymady/fullstack-nextjs-todo-ts.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd fullstack-nextjs-todo-ts
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory with the necessary environment variables. Include details such as MongoDB connection string, Clerk API keys, etc.

   ```env
   DATABASE_URL=your_mongodb_connection_string
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   # Add other environment variables as needed
   ```

5. **Run the development server:**

   ```bash
   npm run dev
   ```

6. **Open in your browser:**

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

**Note:** Adjust the environment variables based on your specific configurations.

## Project Structure

- `app/`: Main application folder.

  - `sign-in/[[...sign-in]]`
    - `page.tsx`: Page component for the sign-in route.
  - `sign-up/[[...sign-up]]`
    - `page.tsx`: Page component for the sign-up route.
  - `error.tsx`: Component for handling and displaying errors.
  - `globals.css`: Global styles for the application.
  - `layout.tsx`: Layout component defining the overall structure of pages.
  - `page.tsx`: Base page component for individual pages.

- `components/`: Directory containing application components.

  - `ui/`: UI components.
  - `AddTodoForm.tsx`: Component for adding new todos.
  - `EditTodoForm.tsx`: Component for editing existing todos.
  - `ModeToggle.tsx`: Component for toggling display modes.
  - `Nav.tsx`: Navigation component.
  - `Spinner.tsx`: Loading spinner component.
  - `TodosTable.tsx`: Table component for displaying todos.
  - `TodosTableActions.tsx`: Component for todo table actions.

- `interfaces/`: Directory containing TypeScript interfaces.

  - `index.ts`: File exporting TypeScript interfaces used throughout the project.

- `lib/`: Directory containing utility functions.

  - `utils.ts`: General utility functions.

- `prisma/`: Prisma configuration folder.

  - `schema.prisma`: Prisma schema definition.

- `providers/`: Directory for context providers.

  - `theme-provider.tsx`: Theme provider component.

- `validation/`: Directory containing validation-related files.

  - `index.ts`: File exporting validation functions.

- `.env`: Environment configuration file.
- `.env.local`: Local environment configuration file.
- `middleware.ts`: Middleware file for handling application-level logic.

## Usage

### Main Page

The main page of your application serves as the central hub, providing an overview of todos and encouraging users to interact with the platform. Key features include:

- **Authentication Redirect:**

  - If users are not signed in, attempting to add or view todos will automatically redirect them to the Sign-In page powered by Clerk Authentication.

- **Assigned Todos:**

  - Todos are associated with individual user accounts. Each user sees only their assigned todos upon signing in.

- **Todo Listing:**

  - The main page displays a list of todos, showcasing essential details like titles and completion status.

### Todo Actions (Server Actions)

1. **Add New Todo:**

   - Users can add a new todo by clicking the "New Todo" button.
   - This action opens the "Add a new Todo" dialog for entering todo details.
     - **Title**: Enter the name of your new todo.
     - **Body**: Optionally, provide a short description for your todo.
     - **Completed**: Check this box if the todo is already completed.
   - Click "Save" button to add the new todo to your list.

2. **Edit Todo:**

   - Click the edit icon (pencil icon) next to a todo to open the "Edit Todo" dialog.
   - Modify the title, body, and completion status as needed.
   - Click "Save" to update the todo.

3. **Delete Todo:**

   - Click the delete icon (trash icon) next to a todo to delete it.
   - Confirm the deletion when prompted.

### Validation

- Refer to the validation functions in the `validation` folder for input validation.

### Navigation

1. Utilize the navigation bar at the top of the page for seamless navigation between different sections of your application.

2. If signed in, access options for managing your account and signing out using the user button. If not signed in, use the "Sign In" button.

### Prisma Configuration

1. Configure your MongoDB database connection in the `prisma/schema.prisma` file.

2. Ensure the `DATABASE_URL` environment variable is correctly set in your environment.

### Environment Configuration

1. Adjust the environment configuration in the `.env` and `.env.local` files as needed.

2. Make sure all necessary environment variables are set for your application.

### Middleware Logic

1. Explore and modify application-level logic in the `middleware.ts` file.

2. Implement additional middleware functions to enhance application behavior.

### Theme Customization

- Toggle between light and dark themes seamlessly using the `ModeToggle` component in the navigation bar.

### Error Handling

- The application includes error handling components, such as `error.tsx`, to gracefully handle and display error page.
