import { baseApi } from "./baseApi";

export type TaskStatus = "Todo" | "In Progress" | "Completed";
export type TaskPriority = "Low" | "Medium" | "High";

export type Task = {
  _id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee?: string; // userId
  estimatedHours?: number;
  actualHours?: number;
  projectId?: string;
  createdAt: string;
  dueDate?: string;
  completedDate?: string;
};

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<
      Task[],
      {
        status?: TaskStatus;
        assignee?: string;
        projectId?: string;
        priority?: TaskPriority;
      }
    >({
      query: (params) => ({
        url: "/tasks",
        params,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map((t) => ({ type: "Task" as const, id: t._id })),
              { type: "Task" as const, id: "LIST" },
            ]
          : [{ type: "Task" as const, id: "LIST" }],
    }),

    getTaskById: builder.query<Task, string>({
      query: (id) => `/tasks/${id}`,
      providesTags: (result, _error, id) => [{ type: "Task", id }],
    }),

    createTask: builder.mutation<Task, Partial<Task>>({
      query: (body) => ({
        url: "/tasks",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Task", id: "LIST" }],
    }),

    updateTask: builder.mutation<Task, { id: string; data: Partial<Task> }>({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, _error, { id }) => [
        { type: "Task", id },
        { type: "Task", id: "LIST" },
      ],
    }),

    updateTaskStatus: builder.mutation<
      Task,
      { id: string; status: TaskStatus }
    >({
      query: ({ id, status }) => ({
        url: `/tasks/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: (result, _error, { id }) => [
        { type: "Task", id },
        { type: "Task", id: "LIST" },
      ],
    }),

    assignTask: builder.mutation<Task, { id: string; assignee: string }>({
      query: ({ id, assignee }) => ({
        url: `/tasks/${id}/assign`,
        method: "POST",
        body: { assignee },
      }),
      invalidatesTags: (result, _error, { id }) => [
        { type: "Task", id },
        { type: "Task", id: "LIST" },
      ],
    }),

    logTime: builder.mutation<
      Task,
      { id: string; hours: number; note?: string }
    >({
      query: ({ id, hours, note }) => ({
        url: `/tasks/${id}/time-entries`,
        method: "POST",
        body: { hours, note },
      }),
      invalidatesTags: (result, _error, { id }) => [
        { type: "Task", id },
        { type: "Task", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskByIdQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useUpdateTaskStatusMutation,
  useAssignTaskMutation,
  useLogTimeMutation,
} = tasksApi;
