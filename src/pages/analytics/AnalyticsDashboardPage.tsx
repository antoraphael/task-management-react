const AnalyticsDashboardPage: React.FC = () => {
  // later: useAnalytics queries like:
  // const { data: teamProductivity } = useTeamProductivityQuery();
  // const { data: overdue } = useOverdueTasksQuery();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold">Analytics</h1>
        <p className="text-sm text-slate-400">
          Understand productivity, bottlenecks and estimation accuracy.
        </p>
      </header>

      <section className="grid grid-cols-2 gap-4">
        {/* <TeamProductivityChart data={teamProductivity} /> */}
        {/* <ProjectCompletionChart data={...} /> */}
      </section>

      <section className="grid grid-cols-[2fr,1fr] gap-4">
        {/* <OverdueTasksTable data={overdue} /> */}
        {/* <WorkloadDistributionChart data={...} /> */}
      </section>
    </div>
  );
};

export default AnalyticsDashboardPage;
