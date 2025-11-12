import { tagTypes } from "../tag-taypes";
import { baseApi } from "./base/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    createCategory: build.mutation({
      query: (data: any) => ({
        url: "/category/createCategory",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      providesTags: [tagTypes.subCategory],
    }),
    getCategories: build.query({
      query: (departmentId: string) => ({
       url: `/category/${departmentId}/getCategories`,
        method: "GET",
      }),
      providesTags: [tagTypes.subCategory],
    }),
      updateCategory: build.mutation({
        query: (data: any) => ({
          url: `/category/${data?.id}`,
          method: "PATCH",
          data: data.body,
        }),
        invalidatesTags: [tagTypes.subCategory],
      }),
  }),
});

export const { useCreateCategoryMutation, useGetCategoriesQuery, useUpdateCategoryMutation  } = categoryApi;
