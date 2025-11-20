import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/api/v1`,
    credentials: "include", // send HTTP-only cookie
  }),
  tagTypes: ["Auth", "Task", "Project", "Analytics", "User"],
  endpoints: () => ({}),
});
