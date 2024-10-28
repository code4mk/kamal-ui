import React, { useState, useEffect, useRef, useMemo, Fragment } from 'react';
import { useRowSelection } from '@/hooks/useRowSelection';
import { useTableColumns, TableField } from '@/hooks/useTableColumns';
import { Menu, Transition } from '@headlessui/react';
import { 
  Search, 
  Plus, 
  Upload, 
  MoreVertical, 
  ChevronFirst, 
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  Download,
  Trash2,
  Columns,
  Check,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  X,
  RefreshCw
} from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  address: {
    street: string;
    city: string;
    country: string;
  };
  company: {
    name: string;
    department: string;
  };
}

interface SortConfig {
  key: string;
  direction: 'asc' | 'desc';
}

const initialTableFields: TableField[] = [
  { title: "Name", path: "name", is_sortable: true, sorted_type: "none", is_hidden: false },
  { title: "Email", path: "email", is_sortable: true, sorted_type: "none", is_hidden: true },
  { title: "Role", path: "role", is_sortable: true, sorted_type: "none", is_hidden: false },
  { title: "Status", path: "status", is_sortable: true, sorted_type: "none", is_hidden: false },
  { title: "City", path: "address.city", is_sortable: true, sorted_type: "none", is_hidden: false },
  { title: "Country", path: "address.country", is_sortable: false, sorted_type: "none", is_hidden: false },
  { title: "Company", path: "company.name", is_sortable: true, sorted_type: "none", is_hidden: false },
];

const getNestedValue = (obj: any, path: string) => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

const UserTable: React.FC = () => {
  // State management
  const [users, setUsers] = useState<User[]>([
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      role: 'Admin', 
      status: 'Active',
      address: { street: '123 Main St', city: 'New York', country: 'USA' },
      company: { name: 'Tech Corp', department: 'IT' }
    },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', address: { street: '456 Elm St', city: 'Los Angeles', country: 'USA' }, company: { name: 'Tech Corp', department: 'HR' } },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive', address: { street: '789 Oak St', city: 'Chicago', country: 'USA' }, company: { name: 'Tech Corp', department: 'Marketing' } },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active', address: { street: '101 Pine St', city: 'San Francisco', country: 'USA' }, company: { name: 'Tech Corp', department: 'Design' } },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sortConfig, setSortConfig] = useState<SortConfig[]>([]);
  const [columnSearch, setColumnSearch] = useState('');
  const [isColumnMenuOpen, setIsColumnMenuOpen] = useState(false);
  const columnMenuRef = useRef<HTMLDivElement>(null);
  const columnButtonRef = useRef<HTMLButtonElement>(null);

  const { selectedRows, handleSelectAll, handleSelectRow, removeAllSelectedRows } = useRowSelection(users, 'multiple');

  const { 
    fields, 
    visibleFields, 
    hiddenFields, 
    toggleVisibility,
    resetToDefault
  } = useTableColumns(initialTableFields);

  const filteredFields = useMemo(() => {
    return fields.filter(field => 
      field.title.toLowerCase().includes(columnSearch.toLowerCase())
    );
  }, [fields, columnSearch]);

  const toggleColumnMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsColumnMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        columnMenuRef.current && 
        !columnMenuRef.current.contains(event.target as Node) &&
        columnButtonRef.current && 
        !columnButtonRef.current.contains(event.target as Node)
      ) {
        setIsColumnMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Updated sorting function
  const toggleSort = (path: string) => {
    setSortConfig(prevSort => {
      const newSort = [...prevSort];
      const index = newSort.findIndex(item => item.key === path);
      if (index === -1) {
        newSort.unshift({ key: path, direction: 'asc' });
      } else if (newSort[index].direction === 'asc') {
        newSort[index].direction = 'desc';
      } else {
        newSort.splice(index, 1);
      }
      return newSort;
    });
  };

  // Get current sort direction for a field
  const getSortDirection = (path: string): 'asc' | 'desc' | 'none' => {
    const sort = sortConfig.find(item => item.key === path);
    return sort ? sort.direction : 'none';
  };

  // Handle delete
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${selectedRows.length} selected user(s)?`)) {
      const newUsers = users.filter(user => !selectedRows.includes(user.id));
      setUsers(newUsers);
    }
  };

  // Apply filtering and sorting
  const filteredAndSortedUsers = useMemo(() => {
    return users
      .filter(user => 
        Object.values(user)
          .concat(Object.values(user.address), Object.values(user.company))
          .join(' ')
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        for (const sort of sortConfig) {
          const aValue = getNestedValue(a, sort.key);
          const bValue = getNestedValue(b, sort.key);
          if (aValue < bValue) return sort.direction === 'asc' ? -1 : 1;
          if (aValue > bValue) return sort.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
  }, [users, searchQuery, sortConfig]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedUsers.length / rowsPerPage);
  const paginatedUsers = filteredAndSortedUsers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const TableHeader: React.FC<{ field: TableField }> = ({ field }) => (
    <th 
      className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      <div className="flex items-center">
        <span 
          className={`inline-flex items-center gap-2 ${
            field.is_sortable 
              ? 'cursor-pointer hover:bg-gray-100 rounded px-2 py-1 transition-colors duration-150 ease-in-out' 
              : ''
          }`}
          onClick={() => field.is_sortable && toggleSort(field.path)}
        >
          {field.title}
          {field.is_sortable && (
            <span className="text-gray-400">
              {getSortDirection(field.path) === 'none' && <ArrowUpDown className="w-4 h-4" />}
              {getSortDirection(field.path) === 'asc' && <ArrowUp className="w-4 h-4" />}
              {getSortDirection(field.path) === 'desc' && <ArrowDown className="w-4 h-4" />}
            </span>
          )}
        </span>
      </div>
    </th>
  );

  return (
    <div className="p-4 md:p-6">
      <div className="w-full bg-white rounded-lg border border-gray-200">
        {/* Header Section */}
        <div className="p-4 md:p-6 flex flex-wrap space-y-4 md:space-y-0 justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">User Management</h2>
            <p className="text-sm text-gray-500 mt-1">
              Manage your organization's users and their permissions
            </p>
          </div>
          
          <div className="flex gap-3">
            <button 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add User
            </button>
            
            <button 
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white rounded-lg hover:bg-gray-50 focus:outline-none"
            >
              <Upload className="w-4 h-4 mr-2" />
              Import
            </button>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="p-4 md:p-6 flex flex-wrap space-y-4 md:space-y-0 justify-between items-center border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-600  "
            />
          </div>
          
          <div className="flex gap-3">
            <button 
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white rounded-lg hover:bg-gray-50 focus:outline-none disabled:opacity-50"
              disabled={selectedRows.length === 0}
              onClick={handleDelete}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Selected
            </button>
            
            <button 
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white rounded-lg hover:bg-gray-50 focus:outline-none"
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
            
            <div className="relative inline-block text-left">
              <button 
                ref={columnButtonRef}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white rounded-lg hover:bg-gray-50 focus:outline-none"
                onClick={toggleColumnMenu}
              >
                <Columns className="w-4 h-4 mr-2" />
                Columns
              </button>
              <Transition
                show={isColumnMenuOpen}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div 
                  ref={columnMenuRef}
                  className="absolute right-0 mt-2 w-72 origin-top-right bg-white rounded-md shadow-lg z-10 focus:outline-none"
                >
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="text-sm font-medium text-gray-900">Manage Columns</h3>
                  </div>
                  <div className="p-2">
                    <div className="relative mb-2">
                      <input
                        type="text"
                        placeholder="Search columns..."
                        value={columnSearch}
                        onChange={(e) => setColumnSearch(e.target.value)}
                        className="w-full pl-8 pr-4 py-1 bg-gray-50 rounded-md text-sm"
                      />
                      <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      {columnSearch && (
                        <button
                          onClick={() => setColumnSearch('')}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                      {filteredFields.map(field => (
                        <label
                          key={field.path}
                          className="flex items-center py-1 px-2 hover:bg-gray-100 rounded-md cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={!field.is_hidden}
                            onChange={() => toggleVisibility(field.path)}
                            className="rounded text-blue-600 mr-2"
                          />
                          <span className="text-sm text-gray-700">{field.title}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-gray-50 text-right border-t border-gray-200">
                    <button
                      onClick={() => {
                        resetToDefault();
                        setColumnSearch('');
                      }}
                      className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <RefreshCw className="w-3 h-3 mr-1" />
                      Reset
                    </button>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={selectedRows.length === filteredAndSortedUsers.length}
                    onChange={handleSelectAll}
                  />
                </th>
                {visibleFields.map(field => (
                  <TableHeader key={field.path} field={field} />
                ))}
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedRows.includes(user.id)}
                      onChange={() => handleSelectRow(user.id)}
                    />
                  </td>
                  {visibleFields.map(field => (
                    <td key={field.path} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {field.path === 'status' ? (
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          getNestedValue(user, field.path) === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {getNestedValue(user, field.path)}
                        </span>
                      ) : (
                        getNestedValue(user, field.path)
                      )}
                    </td>
                  ))}
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1"
                      onClick={() => {
                        if (window.confirm('Do you want to delete this user?')) {
                          setUsers(users.filter(u => u.id !== user.id));
                        }
                      }}
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <div className="text-sm text-gray-500">
            {selectedRows.length} of {filteredAndSortedUsers.length} row(s) selected
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Rows per page</span>
              <select 
                className="border border-gray-300 rounded-lg text-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">
                Page {currentPage} of {totalPages}
              </span>
              <div className="flex gap-1">
                <button 
                  className="p-1 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                >
                  <ChevronFirst className="w-4 h-4" />
                </button>
                <button 
                  className="p-1 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  className="p-1 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button 
                  className="p-1 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronLast className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
