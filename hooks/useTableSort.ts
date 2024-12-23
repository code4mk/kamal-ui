import { useState } from 'react';

export type SortDirection = 'none' | 'asc' | 'desc';

export interface SortConfig {
  key: string;
  direction: 'asc' | 'desc';
}

export function useTableSort() {
  const [sortConfig, setSortConfig] = useState<SortConfig[]>([]);

  const toggleSort = (path: string) => {
    setSortConfig(prevConfig => {
      const existingSort = prevConfig.find(sort => sort.key === path);
      if (!existingSort) {
        return [...prevConfig, { key: path, direction: 'asc' }];
      }
      if (existingSort.direction === 'asc') {
        return prevConfig.map(sort =>
          sort.key === path ? { ...sort, direction: 'desc' } : sort
        );
      }
      return prevConfig.filter(sort => sort.key !== path);
    });
  };

  const getSortDirection = (path: string): SortDirection => {
    const sort = sortConfig.find(s => s.key === path);
    return sort ? sort.direction : 'none';
  };

  return {
    sortConfig,
    toggleSort,
    getSortDirection,
  };
} 