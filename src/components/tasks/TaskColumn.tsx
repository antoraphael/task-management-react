import type { Task } from "../../api/tasksApi";
import TaskCard from "./TaskCard";

type Props = {
  title: string;
  tasks: Task[];
};

const TaskColumn: React.FC<Props> = ({ title, tasks }) => {
  return (
    <div className="bg-slate-900 rounded-xl p-3 border border-slate-800">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">{title}</h3>
        <span className="text-xs text-slate-400">{tasks.length}</span>
      </div>
      <div className="space-y-2 max-h-[70vh] overflow-y-auto">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
