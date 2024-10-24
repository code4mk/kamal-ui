import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { THE_COMPONENT_MAP } from '@/constants/componentMap';

// Map of component identifiers to their paths
const COMPONENT_MAP = THE_COMPONENT_MAP

type ComponentKey = keyof typeof COMPONENT_MAP;

const DemoPreview = () => {
  const router = useRouter();
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      const { i } = router.query;
      
      if (!i || typeof i !== 'string') {
        setError('Please specify a component using the "i" parameter');
        return;
      }

      if (!Object.keys(COMPONENT_MAP).includes(i)) {
        setError(`Component "${i}" not found`);
        return;
      }

      try {
        // Dynamically import the component from the demo folder
        const DynamicComponent = dynamic(() => 
          import(`@/demo/${COMPONENT_MAP[i as ComponentKey]}`).catch((err) => {
            console.error('Failed to load component:', err);
            setError(`Failed to load component: ${i}`);
            return () => null;
          })
        );
        
        setComponent(() => DynamicComponent);
        setError(null);
      } catch (err) {
        console.error('Error loading component:', err);
        setError(`Error loading component: ${i}`);
      }
    };

    loadComponent();
  }, [router.query]);

  return (
    <div className="w-full">
      <div className="">
        
        <div className="">
          {error ? (
            <div className="text-red-500 p-4 rounded bg-red-50">
              {error}
            </div>
          ) : !Component ? (
            <div className="flex items-center justify-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <Component />
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoPreview;