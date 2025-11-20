import TaskKanbanBoard from "../../components/tasks/TaskKanbanBoard";
import TaskFilters from "../../components/tasks/TaskFilters";
import { useTaskFilters } from "../../hooks/useTaskFilters";
import { useGetTasksQuery } from "../../api/tasksApi";

const TasksBoardPage: React.FC = () => {
  const filters = useTaskFilters();

  const { data: tasks, isLoading } = useGetTasksQuery({
    status: filters.status,
    priority: filters.priority,
    assignee: filters.assignee,
    projectId: filters.projectId,
  });

  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Tasks</h1>
        {/* button to open TaskFormModal */}
      </header>

      <TaskFilters {...filters} />

      {isLoading && <div>Loading tasks…</div>}
      {tasks && <TaskKanbanBoard tasks={tasks} />}
    </div>
  );
};

export default TasksBoardPage;
