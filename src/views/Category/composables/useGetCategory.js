import { useCategoryStore } from '@/stores/CategoryCategoryStore';

export function useGetCategory(){
  const categoryStore = useCategoryStore();
  return {categoryStore}
}

