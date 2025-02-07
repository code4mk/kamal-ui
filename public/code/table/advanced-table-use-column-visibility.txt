import { useMemo } from 'react';

interface SortConfig {
  key: string;
  direction: 'asc' | 'desc';
}

export function useFilterSort<T extends Record<string, any>>(
  data: T[],
  searchQuery: string,
  sortConfig: SortConfig[],
  options?: {
    searchFields?: (keyof T | string)[];
    getNestedValue?: (obj: T, path: string) => any;
  }
) {
  // Default nested value getter
  const defaultGetNestedValue = (obj: T, path: string) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  const getNestedValue = options?.getNestedValue || defaultGetNestedValue;

  return useMemo(() => {
    return data
      .filter(item => {
        if (!searchQuery) return true;
        
        // If searchFields are provided, only search those fields
        if (options?.searchFields) {
          return options.searchFields.some(field => {
            const value = getNestedValue(item, field.toString());
            return value?.toString().toLowerCase().includes(searchQuery.toLowerCase());
          });
        }

        // Otherwise, search all values (including nested objects)
        const allValues = Object.values(item)
          .map(value => {
            if (value && typeof value === 'object') {
              return Object.values(value);
            }
            return value;
          })
          .flat()
          .filter(Boolean)
          .join(' ');

        return allValues.toLowerCase().includes(searchQuery.toLowerCase());
      })
      .sort((a, b) => {
        for (const sort of sortConfig) {
          const aValue = getNestedValue(a, sort.key);
          const bValue = getNestedValue(b, sort.key);
          
          if (aValue < bValue) return sort.direction === 'asc' ? -1 : 1;
          if (aValue > bValue) return sort.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
  }, [data, searchQuery, sortConfig, options?.searchFields]);
} 