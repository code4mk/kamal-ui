import { useState, useCallback } from 'react';

interface Item {
  id: number | string;
  [key: string]: any;
}

type SelectionType = 'single' | 'multiple';

export const useRowSelection = <T extends Item>(items: T[], selectionType: SelectionType = 'multiple') => {
  const [selectedRows, setSelectedRows] = useState<(number | string)[]>([]);

  const handleSelectAll = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectionType === 'single') {
      return; // Do nothing for single selection mode
    }
    if (e.target.checked) {
      setSelectedRows(items.map(item => item.id));
    } else {
      setSelectedRows([]);
    }
  }, [items, selectionType]);

  const handleSelectRow = useCallback((id: number | string) => {
    if (selectionType === 'single') {
      setSelectedRows(prev => 
        prev[0] === id ? [] : [id]
      );
    } else {
      setSelectedRows(prev => 
        prev.includes(id) 
          ? prev.filter(rowId => rowId !== id)
          : [...prev, id]
      );
    }
  }, [selectionType]);

  const removeAllSelectedRows = useCallback(() => {
    setSelectedRows([]);
  }, []);

  return {
    selectedRows,
    handleSelectAll,
    handleSelectRow,
    removeAllSelectedRows
  };
};