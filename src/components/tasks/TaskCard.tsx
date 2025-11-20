import type { Task } from "../../api/tasksApi";

type Props = {
  task: Task;
};

const TaskCard: React.FC<Props> = ({ task }) => {
  return (
    <div className="rounded-lg bg-slate-800 p-3 text-xs cursor-pointer hover:bg-slate-700 transition">
      <div className="font-semibold text-sm mb-1">{task.title}</div>
      {task.description && (
        <p className="text-slate-400 line-clamp-2 mb-1">{task.description}</p>
      )}
      <div className="flex justify-between items-center text-[11px]">
        <span className="px-2 py-0.5 rounded-full bg-slate-900">
          {task.priority}
        </span>
        {task.assignee && <span>{task.assignee}</span>}
      </div>
    </div>
  );
};

export default TaskCard;
