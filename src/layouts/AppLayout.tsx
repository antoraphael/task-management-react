import { Outlet, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const AppLayout: React.FC = () => {
  const user = useAppSelector((s) => s.auth.user);

  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-100">
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-4">
        <div className="mb-6">
          <h2 className="font-bold text-lg">Task Dashboard</h2>
          <p className="text-sm text-slate-400">
            {user ? `${user.name} (${user.role})` : "Loading..."}
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/analytics">Analytics</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
