function MultiRawMultiple() {
  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* First Row - 2 cards */}
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
        {/* Create Project Card */}
        <div className="w-full md:flex-1 bg-white rounded-lg border border-gray-200">
          <div className="p-4 md:p-6">
            <h2 className="text-xl font-semibold text-gray-800">Create project</h2>
            <p className="text-sm text-gray-500 mt-1 md:text-red ">
              Deploy your new project in one-click.
            </p>
          </div>
          <div className="px-4 md:px-6 mb-6">
            <div className="h-[200px] w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 bg-gray-50">
              <p className="text-sm">Implementation area</p>
            </div>
          </div>
        </div>
        
        {/* Deploy Card */}
        <div className="w-full md:flex-1 bg-white rounded-lg border border-gray-200">
          <div className="p-4 md:p-6">
            <h2 className="text-xl font-semibold text-gray-800">Deploy files</h2>
            <p className="text-sm text-gray-500 mt-1">
              Upload and deploy your files instantly.
            </p>
          </div>
          <div className="px-4 md:px-6 mb-6">
            <div className="h-[200px] w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 bg-gray-50">
              <p className="text-sm">Drop files here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - 3 cards */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {/* Database Card */}
        <div className="w-full md:flex-1 bg-white rounded-lg border border-gray-200">
          <div className="p-4 md:p-6">
            <h2 className="text-xl font-semibold text-gray-800">Configure database</h2>
            <p className="text-sm text-gray-500 mt-1">
              Set up your database connection and schema.
            </p>
          </div>
          <div className="px-4 md:px-6 mb-6">
            <div className="h-[200px] w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 bg-gray-50">
              <p className="text-sm">Database configuration</p>
            </div>
          </div>
        </div>

        {/* Analytics Card */}
        <div className="w-full md:flex-1 bg-white rounded-lg border border-gray-200">
          <div className="p-4 md:p-6">
            <h2 className="text-xl font-semibold text-gray-800">Analytics</h2>
            <p className="text-sm text-gray-500 mt-1">
              Track your project metrics and performance.
            </p>
          </div>
          <div className="px-4 md:px-6 mb-6">
            <div className="h-[200px] w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 bg-gray-50">
              <p className="text-sm">Analytics dashboard</p>
            </div>
          </div>
        </div>

        {/* Monitoring Card */}
        <div className="w-full md:flex-1 bg-white rounded-lg border border-gray-200">
          <div className="p-4 md:p-6">
            <h2 className="text-xl font-semibold text-gray-800">Monitoring</h2>
            <p className="text-sm text-gray-500 mt-1">
              Monitor your application health and status.
            </p>
          </div>
          <div className="px-4 md:px-6 mb-6">
            <div className="h-[200px] w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 bg-gray-50">
              <p className="text-sm">Monitoring panel</p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Row - 1 card */}
      <div className="flex">
        {/* Settings Card */}
        <div className="w-full bg-white rounded-lg border border-gray-200">
          <div className="p-4 md:p-6">
            <h2 className="text-xl font-semibold text-gray-800">Project settings</h2>
            <p className="text-sm text-gray-500 mt-1">
              Customize your project configurations.
            </p>
          </div>
          <div className="px-4 md:px-6 mb-6">
            <div className="h-[200px] w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 bg-gray-50">
              <p className="text-sm">Settings panel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultiRawMultiple