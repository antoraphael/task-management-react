import type { Task, TaskStatus } from "../../api/tasksApi";
import TaskColumn from "./TaskColumn";

type Props = {
  tasks: Task[];
};

const columns: TaskStatus[] = ["Todo", "In Progress", "Completed"];

const TaskKanbanBoard: React.FC<Props> = ({ tasks }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {columns.map((status) => (
        <TaskColumn
          key={status}
          title={status}
          tasks={tasks.filter((t) => t.status === status)}
        />
      ))}
    </div>
  );
};

export default TaskKanbanBoard;
