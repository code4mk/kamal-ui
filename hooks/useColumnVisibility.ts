import { useState } from 'react';

export interface TableField {
  title: string;
  path: string;
  is_sortable: boolean;
  is_hidden: boolean;
}

export function useColumnVisibility(initialFields: TableField[]) {
  const [fields, setFields] = useState(initialFields);

  const visibleFields = fields.filter(field => !field.is_hidden);
  const hiddenFields = fields.filter(field => field.is_hidden);

  const toggleVisibility = (path: string) => {
    setFields(fields.map(field => 
      field.path === path 
        ? { ...field, is_hidden: !field.is_hidden }
        : field
    ));
  };

  const resetToDefault = () => {
    setFields(initialFields);
  };

  return {
    fields,
    visibleFields,
    hiddenFields,
    toggleVisibility,
    resetToDefault,
  };
} 