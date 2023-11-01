import { useCategoryStore } from '@/stores/CategoryCategory';

export function useGetCategory(){
  const categoryStore = useCategoryStore();
  return {categoryStore}
}

