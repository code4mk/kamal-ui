import React from 'react';

const MultipleCards = () => {
  return (
    <div className="px-6 space-y-4">
      {/* Create Project Card */}
      <div className="w-full bg-white rounded-lg border border-gray-200">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">Create project</h2>
          <p className="text-sm text-gray-500 mt-1">
            Deploy your new project in one-click.
          </p>
        </div>
        <div className="px-6 mb-6">
          <div className="h-[200px] w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 bg-gray-50">
            <p className="text-sm">Implementation area</p>
          </div>
        </div>
      </div>

      {/* Deploy Card */}
      <div className="w-full bg-white rounded-lg border border-gray-200">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">Deploy files</h2>
          <p className="text-sm text-gray-500 mt-1">
            Upload and deploy your files instantly.
          </p>
        </div>
        <div className="px-6 mb-6">
          <div className="h-[200px] w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 bg-gray-50">
            <p className="text-sm">Drop files here</p>
          </div>
        </div>
      </div>

      {/* Database Card */}
      <div className="w-full bg-white rounded-lg border border-gray-200">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">Configure database</h2>
          <p className="text-sm text-gray-500 mt-1">
            Set up your database connection and schema.
          </p>
        </div>
        <div className="px-6 mb-6">
          <div className="h-[200px] w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 bg-gray-50">
            <p className="text-sm">Database configuration</p>
          </div>
        </div>
      </div>

      {/* Settings Card */}
      <div className="w-full bg-white rounded-lg border border-gray-200">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">Project settings</h2>
          <p className="text-sm text-gray-500 mt-1">
            Customize your project configurations.
          </p>
        </div>
        <div className="px-6 mb-6">
          <div className="h-[200px] w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 bg-gray-50">
            <p className="text-sm">Settings panel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleCards;