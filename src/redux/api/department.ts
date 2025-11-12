import { tagTypes } from "../tag-taypes";
import { baseApi } from "./base/baseApi";

const departmentApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    createDepartment: build.mutation({
      query: (data: any) => ({
        url: "/department/create",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      providesTags: [tagTypes.department],
    }),
    getDepartments: build.query({
      query: () => ({
       url: "/department/getDepartments",
        method: "GET",
      }),
      providesTags: [tagTypes.department],
    }),
      updateDepartment: build.mutation({
        query: (data: any) => ({
          url: `/department/${data?.id}`,
          method: "PATCH",
          data: data.body,
        }),
        invalidatesTags: [tagTypes.subCategory],
      }),
  }),
});

export const { useCreateDepartmentMutation, useGetDepartmentsQuery, useUpdateDepartmentMutation } = departmentApi;
