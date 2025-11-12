import { tagTypes } from "../tag-taypes";
import { baseApi } from "./base/baseApi";

const subCategoryApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    createSubCategory: build.mutation({
      query: (data: any) => ({
        url: "/subCategory/createSubCategory",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      providesTags: [tagTypes.subCategory],
    }),
    getSubCategories: build.query({
      query: (categoryId: string) => ({
       url: `/subCategory/${categoryId}/getSubCategories`,
        method: "GET",
      }),
      providesTags: [tagTypes.subCategory],
    }),
      updateSubCategory: build.mutation({
        query: (data: any) => ({
          url: `/subCategory/${data?.id}`,
          method: "PATCH",
          data: data.body,
        }),
        invalidatesTags: [tagTypes.subCategory],
      }),
  }),
});

export const { useCreateSubCategoryMutation, useGetSubCategoriesQuery, useUpdateSubCategoryMutation } = subCategoryApi;
