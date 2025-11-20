import type { FC, ChangeEvent } from "react";
import type { TaskStatus, TaskPriority } from "../../api/tasksApi";

type Props = {
  status?: TaskStatus;
  setStatus: (value: TaskStatus | undefined) => void;

  priority?: TaskPriority;
  setPriority: (value: TaskPriority | undefined) => void;

  assignee?: string;
  setAssignee: (value: string | undefined) => void;

  projectId?: string;
  setProjectId: (value: string | undefined) => void;
};

const TaskFilters: FC<Props> = ({
  status,
  setStatus,
  priority,
  setPriority,
  assignee,
  setAssignee,
  projectId,
  setProjectId,
}) => {
  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as TaskStatus | "";
    setStatus(value === "" ? undefined : value);
  };

  const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as TaskPriority | "";
    setPriority(value === "" ? undefined : value);
  };

  const handleAssigneeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAssignee(value === "" ? undefined : value);
  };

  const handleProjectChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setProjectId(value === "" ? undefined : value);
  };

  const handleClear = () => {
    setStatus(undefined);
    setPriority(undefined);
    setAssignee(undefined);
    setProjectId(undefined);
  };

  return (
    <div className="flex flex-wrap gap-3 items-end bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm">
      {/* Status */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-slate-400">Status</label>
        <select
          value={status ?? ""}
          onChange={handleStatusChange}
          className="min-w-[130px] rounded-md bg-slate-950 border border-slate-700 px-2 py-1.5 text-xs"
        >
          <option value="">All</option>
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Priority */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-slate-400">Priority</label>
        <select
          value={priority ?? ""}
          onChange={handlePriorityChange}
          className="min-w-[130px] rounded-md bg-slate-950 border border-slate-700 px-2 py-1.5 text-xs"
        >
          <option value="">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      {/* Assignee (could later become a dropdown with users) */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-slate-400">
          Assignee (email / name)
        </label>
        <input
          type="text"
          value={assignee ?? ""}
          onChange={handleAssigneeChange}
          placeholder="Search by assignee"
          className="min-w-[180px] rounded-md bg-slate-950 border border-slate-700 px-2 py-1.5 text-xs"
        />
      </div>

      {/* Project (id or name search) */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-slate-400">Project</label>
        <input
          type="text"
          value={projectId ?? ""}
          onChange={handleProjectChange}
          placeholder="Project ID or name"
          className="min-w-[180px] rounded-md bg-slate-950 border border-slate-700 px-2 py-1.5 text-xs"
        />
      </div>

      {/* Clear button */}
      <button
        type="button"
        onClick={handleClear}
        className="ml-auto rounded-md border border-slate-600 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-800"
      >
        Clear filters
      </button>
    </div>
  );
};

export default TaskFilters;
