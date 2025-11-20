const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold mb-2">Overview</h1>
      <p className="text-sm text-slate-400 mb-4">
        Quick glance at team productivity, project progress and workload.
      </p>

      {/* cards for key metrics; you can hook them to analyticsApi later */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
          <h2 className="text-xs text-slate-400 mb-1">Team Productivity</h2>
          <div className="text-2xl font-bold">--%</div>
        </div>
        <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
          <h2 className="text-xs text-slate-400 mb-1">Overdue Tasks</h2>
          <div className="text-2xl font-bold">--</div>
        </div>
        <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
          <h2 className="text-xs text-slate-400 mb-1">Avg Estimation Error</h2>
          <div className="text-2xl font-bold">-- h</div>
        </div>
        <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
          <h2 className="text-xs text-slate-400 mb-1">Active Projects</h2>
          <div className="text-2xl font-bold">--</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
