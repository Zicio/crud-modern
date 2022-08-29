import { IService } from "./../../models/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const crudApi = createApi({
  reducerPath: "crud/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7777/",
    // baseUrl:
    //   "https://6307c6c34a7a5f007d97a70a--silly-peony-29035d.netlify.app/",
  }),
  refetchOnFocus: true,
  tagTypes: ["Services"],
  endpoints: (build) => ({
    services: build.query<IService[], void>({
      query: () => ({
        url: "services",
      }),
      providesTags: (result) => ["Services"],
    }),

    editService: build.query<IService, string>({
      query: (id: string) => ({
        url: `services?id=${id}`,
      }),
    }),

    deleteService: build.mutation<any, number>({
      query: (id) => ({
        url: `services`,
        params: {
          id: id,
        },
        method: "DELETE",
      }),
      invalidatesTags: ["Services"],
    }),
  }),
});

export const {
  useServicesQuery,
  useDeleteServiceMutation,
  useEditServiceQuery,
} = crudApi;
