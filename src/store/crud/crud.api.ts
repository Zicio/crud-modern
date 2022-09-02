import { IService } from "./../../models/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StatusCode } from "status-code-enum";

export const crudApi = createApi({
  reducerPath: "crud/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7777/",
  }),
  refetchOnFocus: true,
  tagTypes: ["Services", "Form"],
  endpoints: (build) => ({
    services: build.query<IService[], void>({
      query: () => ({
        url: "services",
      }),
      providesTags: (result) => ["Services"],
    }),

    formService: build.query<IService, string>({
      query: (id: string) => ({
        url: `services?id=${id}`,
      }),
      providesTags: (result) => ["Form"],
    }),

    deleteService: build.mutation<StatusCode.SuccessNoContent, number>({
      query: (id: number) => ({
        url: `services`,
        params: {
          id: id,
        },
        method: "DELETE",
      }),
      invalidatesTags: ["Services"],
    }),

    modifyService: build.mutation<StatusCode.SuccessNoContent, IService>({
      query: (data: IService) => ({
        url: `services`,
        method: "PUT",
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["Services", "Form"],
    }),
  }),
});

export const {
  useServicesQuery,
  useDeleteServiceMutation,
  useLazyFormServiceQuery,
  useModifyServiceMutation,
} = crudApi;
