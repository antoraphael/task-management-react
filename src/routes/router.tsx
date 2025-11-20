import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import AppLayout from "../layouts/AppLayout";
import RequireAuth from "../guards/RequireAuth";
import RequireGuest from "../guards/RequireGuest";

import LoginPage from "../pages/auth/LoginPage";
import VerifyOtpPage from "../pages/auth/VerifyOtpPage";

import DashboardPage from "../pages/dashboard/DashboardPage";
import TasksBoardPage from "../pages/tasks/TasksBoardPage";
import ProjectsListPage from "../pages/projects/ProjectsListPage";
import ProjectDetailsPage from "../pages/projects/ProjectDetailsPage";
import AnalyticsDashboardPage from "../pages/analytics/AnalyticsDashboardPage";
import UsersPage from "../pages/users/UsersPage";

export const router = createBrowserRouter([
  {
    element: <RequireGuest />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          { path: "/auth/login", element: <LoginPage /> },
          { path: "/auth/verify-otp", element: <VerifyOtpPage /> },
        ],
      },
    ],
  },
  {
    element: <RequireAuth />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: "/", element: <DashboardPage /> },
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/tasks", element: <TasksBoardPage /> },
          { path: "/projects", element: <ProjectsListPage /> },
          { path: "/projects/:id", element: <ProjectDetailsPage /> },
          { path: "/analytics", element: <AnalyticsDashboardPage /> },
          { path: "/users", element: <UsersPage /> },
        ],
      },
    ],
  },
]);
