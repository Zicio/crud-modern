import { IService } from "./../../models/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const crudApi = createApi({
  reducerPath: "crud/api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:7777/",
    baseUrl: "https://api-redux-server.vercel.app/",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    services: build.query<IService[], void>({
      query: () => ({
        url: "services",
      }),
    }),
  }),
});

export const { useServicesQuery } = crudApi;
