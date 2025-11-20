import { baseApi } from "./baseApi";

export type User = {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "member";
};

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    requestOtp: builder.mutation<void, { email: string }>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    verifyOtp: builder.mutation<{ user: User }, { email: string; otp: string }>(
      {
        query: (body) => ({
          url: "/auth/verify-otp",
          method: "POST",
          body,
        }),
        invalidatesTags: ["Auth"],
      }
    ),
    getSession: builder.query<User, void>({
      query: () => "/users/session", // implement this in backend if not there
      providesTags: ["Auth"],
    }),
  }),
});

export const {
  useRequestOtpMutation,
  useVerifyOtpMutation,
  useGetSessionQuery,
} = authApi;
