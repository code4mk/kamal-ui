import { useState, useCallback, useMemo } from 'react';

export type TableField = {
  title: string;
  path: string;
  is_sortable: boolean;
  sorted_type: 'none' | 'asc' | 'desc';
  is_hidden: boolean;
};

export const useTableColumns = (initialFields: TableField[]) => {
  const [fields, setFields] = useState<TableField[]>(initialFields);

  const toggleVisibility = useCallback((path: string) => {
    setFields(prevFields =>
      prevFields.map(field =>
        field.path === path ? { ...field, is_hidden: !field.is_hidden } : field
      )
    );
  }, []);

  const resetToDefault = useCallback(() => {
    setFields(initialFields);
  }, [initialFields]);

  const visibleFields = useMemo(() => fields.filter(field => !field.is_hidden), [fields]);
  const hiddenFields = useMemo(() => fields.filter(field => field.is_hidden), [fields]);

  return {
    fields,
    visibleFields,
    hiddenFields,
    toggleVisibility,
    resetToDefault
  };
};
