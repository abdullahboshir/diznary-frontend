import { tagTypes } from "../tag-taypes";
import { baseApi } from "./base/baseApi";

const childCategoryApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    createChildCategory: build.mutation({
      query: (data: any) => ({
        url: "/childCategory/createChildCategory",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      providesTags: [tagTypes.childCategory],
    }),
    getChildCategories: build.query({
      query: (subCategoryId: string) => ({
       url: `/childCategory/${subCategoryId}/getChildCategories`,
        method: "GET",
      }),
      providesTags: [tagTypes.childCategory],
    }),
      updateChildCategory: build.mutation({
        query: (data: any) => ({
          url: `/childCategory/${data?.id}`,
          method: "PATCH",
          data: data.body,
        }),
        invalidatesTags: [tagTypes.childCategory],
      }),
  }),
});

export const { useCreateChildCategoryMutation, useGetChildCategoriesQuery, useUpdateChildCategoryMutation } = childCategoryApi;
