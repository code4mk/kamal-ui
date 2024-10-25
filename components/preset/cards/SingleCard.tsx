import { Plus, Upload } from 'lucide-react';

function SingleCard() {
  return (
    <div className="p-4 md:p-6">
      {/* Single Card */}
      <div className="w-full bg-white rounded-lg border border-gray-200">
        <div className="p-4 md:p-6 flex flex-wrap space-y-4 md:space-y-0 justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Create project</h2>
            <p className="text-sm text-gray-500 mt-1">
              Deploy your new project in one-click.
            </p>
          </div>
          
          <div className="flex gap-3">
            {/* Primary Button */}
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none">
              <Plus className="w-4 h-4 mr-2" />
              Create New
            </button>
            
            {/* Secondary Button */}
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white rounded-lg hover:bg-gray-50 focus:outline-none">
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </button>
          </div>
        </div>
        
        <div className="px-4 md:px-6 mb-6">
          <div className="h-[200px] w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 bg-gray-50">
            <p className="text-sm">Implementation area</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;