import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface Page {
  title: string;
  slug: string;
  has_child: boolean;
  sub_pages?: Page[];
}

interface NavigationItemProps {
  page: Page;
  level?: number;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ 
  page, 
  level = 0
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  
  // Check if current path matches this item's slug
  const isActive = router.asPath === page.slug;
  
  // Check if any child pages are active
  const hasActiveChild = page.sub_pages?.some(subPage => 
    router.asPath.startsWith(subPage.slug)
  );

  // Auto-expand parent if child is active
  useEffect(() => {
    if (hasActiveChild) {
      setIsOpen(true);
    }
  }, [hasActiveChild]);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <li className="my-1">
      <div 
        className={`
          flex items-center gap-2 px-2 py-1.5 rounded-md
          ${isActive ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}
          ${hasActiveChild ? 'text-blue-600' : ''}
          cursor-pointer text-sm transition-colors
        `}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
      >
        {page.has_child && page.sub_pages && page.sub_pages.length > 0 && (
          <button
            onClick={handleToggle}
            className="p-0.5 hover:bg-gray-200 rounded"
          >
            {isOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        )}
        <Link 
          href={page.slug || '#'} 
          className={`flex-1 ${isActive ? 'font-medium' : 'hover:text-blue-600 hover:bg-gray-300'}`}
        >
          {page.title || 'Untitled'}
        </Link>
      </div>
      {isOpen && page.has_child && page.sub_pages && (
        <ul className="ml-2">
          {page.sub_pages.map((subPage, index) => (
            <NavigationItem
              key={`${subPage.slug}-${index}`}
              page={subPage}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

interface SidebarProps {
  className?: string;
  pages: Page[];
}

const Sidebar: React.FC<SidebarProps> = ({ 
  className, 
  pages,
}) => {
  return (
    <nav className={`p-4 overflow-y-auto ${className}`}>
      <h2 className="text-xl font-bold mb-4">Documentation</h2>
      <ul className="space-y-1">
        {pages.map((page, index) => (
          <NavigationItem 
            key={`${page.slug}-${index}`} 
            page={page}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;