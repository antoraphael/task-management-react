import { useState } from "react";
import type { TaskPriority, TaskStatus } from "../api/tasksApi";

export const useTaskFilters = () => {
  const [status, setStatus] = useState<TaskStatus | undefined>();
  const [priority, setPriority] = useState<TaskPriority | undefined>();
  const [assignee, setAssignee] = useState<string | undefined>();
  const [projectId, setProjectId] = useState<string | undefined>();

  return {
    status,
    setStatus,
    priority,
    setPriority,
    assignee,
    setAssignee,
    projectId,
    setProjectId,
  };
};
