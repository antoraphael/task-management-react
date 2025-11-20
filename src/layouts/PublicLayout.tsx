import { Outlet } from "react-router-dom";

const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100">
      <div className="w-full max-w-md bg-slate-800 rounded-xl p-6 shadow-lg">
        <h1 className="text-xl font-semibold mb-4 text-center">
          Task Manager – Login
        </h1>
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
