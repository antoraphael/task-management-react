import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1",
    credentials: "include", // send HTTP-only cookie
  }),
  tagTypes: ["Auth", "Task", "Project", "Analytics", "User"],
  endpoints: () => ({}),
});
