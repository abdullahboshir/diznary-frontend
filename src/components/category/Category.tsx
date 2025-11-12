"use client";
import React, { useEffect } from "react";
import { useGetCategoriesQuery } from "@/redux/api/categoryApi";
import { useGetSubCategoriesQuery } from "@/redux/api/subCategoryApi";
import { useGetChildCategoriesQuery } from "@/redux/api/childCategoryApi";
import Image from "next/image";

type CategoryType = {
  _id: string;
  name: string;
  department: string;
};

type subCategoryType = {
  _id: string;
  name: string;
  department: string;
};

type childCategoryType = {
  _id: string;
  name: string;
  department: string;
};

type ApiResponse<T> = {
  data: T[];
};

const Category = ({ departmentId }: any) => {
  const [categoryId, setCategoryId] = React.useState<string | null>(null);
  const [subCategoryId, setSubCategoryId] = React.useState<string | null>(null);

  const { data: getCategories = { data: [] }, isLoading: categoryLoading } =
    useGetCategoriesQuery(departmentId || null) as {
      data: ApiResponse<CategoryType>;
      isLoading: boolean;
    };

  const { data: getSubCategories, isLoading: subCategoryLoading } =
    useGetSubCategoriesQuery(categoryId || "") as {
      data: ApiResponse<subCategoryType>;
      isLoading: boolean;
    };

  const { data: getChildCategories, isLoading: chlidCategoryLoading } =
    useGetChildCategoriesQuery(subCategoryId || "") as {
      data: ApiResponse<childCategoryType>;
      isLoading: boolean;
    };


  useEffect(() => {
    if (getCategories?.data?.length > 0) {
      const firstCategory = getCategories.data[0];
      setCategoryId(firstCategory._id);

      if (getSubCategories?.data?.length > 0) {
        const firstSubCategory = getSubCategories.data.find(
          (sub: any) => sub.category === firstCategory._id
        );
        if (firstSubCategory) setSubCategoryId(firstSubCategory._id);
      }
    }
  }, []);

  useEffect(() => {
    if (categoryId && getSubCategories?.data?.length > 0) {
      const firstSubCategory = getSubCategories.data.find(
        (sub: any) => sub.category === categoryId
      );
      setSubCategoryId(firstSubCategory ? firstSubCategory._id : null);
    }
  }, [categoryId, getSubCategories?.data]);



  return (
    <div className="w-[100%] md:w-[300px] lg:w-[1200px] flex rounded-md p-1">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="flex min-h-[500px]">
          {/* Categories */}
          <div className="w-64 border-r border-gray-100 bg-gradient-to-b from-gray-50 to-white">
            <div className="p-5">
              <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {categoryLoading? "Loading..." : getCategories?.data.map((cat: any) => (
                  <li key={cat._id}>
                    <button
                      onMouseEnter={() => setCategoryId(cat._id)}
                      className={`w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        categoryId === cat._id
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                    >
                      <span className="truncate">
                        {departmentId
                          ? departmentId === cat.department && cat.name
                          : cat.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Subcategories */}
          <div className="w-64 border-r border-gray-100 bg-gray-50/40">
            <div className="p-5">
              <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-4">
                Subcategories
              </h3>
              <ul className="space-y-2">
                {subCategoryLoading? 'Loading...' : getSubCategories?.data
                  ?.filter((sub: any) => sub.category === categoryId)
                  .map((sub: any) => (
                    <li key={sub._id}>
                      <button
                        onMouseEnter={() => setSubCategoryId(sub._id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          subCategoryId === sub._id
                            ? "bg-blue-100 text-blue-700 border-l-3 border-blue-500"
                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                        }`}
                      >
                        {sub.name}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Child Categories */}
          <div className="flex-1 p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Browse Products
              </h3>
              <p className="text-sm text-gray-500">
                Explore our wide range of categories
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {chlidCategoryLoading? 'Loading...' : getChildCategories?.data
                ?.filter((child: any) => child.subCategory === subCategoryId)
                .map((child: any) => (
                  <div
                    key={child._id}
                    className="group cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden"
                  >
                    <div className="relative w-full aspect-square">
                      <Image
                        src={child?.image}
                        fill
                        alt={child?.name}
                        className="object-cover rounded-t-xl group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600">
                        {child?.name}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Empty State */}
            {(!getChildCategories?.data ||
              getChildCategories?.data?.filter(
                (child: any) => child.subCategory === subCategoryId
              ).length === 0) && (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-3">
                  <svg
                    className="w-14 h-14 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-16"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">
                  {categoryId
                    ? "No products found for this subcategory"
                    : "Select a category to view products"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
