import {
  Bell,
  Check,
  ChevronDown,
  CircleCheck,
  Edit,
  ExternalLink,
  Facebook,
  Github,
  Loader2,
  Plus,
  Search,
  Settings,
  Trash,
  Twitter,
  X,
} from "lucide-react";

const ButtonCollection = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Primary Buttons Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Primary Buttons
        </h3>
        <div className="flex items-baseline gap-4">
          <div>
            <button
              type="button"
              className="rounded bg-blue-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Button Name
            </button>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-blue-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Button Name
            </button>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Button Name
            </button>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Button Name
            </button>
          </div>
        </div>
      </div>

      {/* Secondary & Outline Buttons Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Secondary & Outline Buttons
        </h3>
        <div className="flex flex-wrap gap-4">
          <div>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none font-medium">
              Secondary Button
            </button>
          </div>
          <div>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none font-medium">
              Outline Button
            </button>
          </div>
          <div>
            <button className="px-4 py-2 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none font-medium">
              Primary Outline
            </button>
          </div>
        </div>
      </div>
      {/* Buttons with a leading icon */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Buttons with a leading icon
        </h3>
        <div className="flex items-end flex-wrap gap-4">
          <div>
            <button
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              <CircleCheck aria-hidden="true" className="-ml-0.5 h-5 w-5" />
              Primary Button
            </button>
          </div>
          <div>
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none font-medium">
              <CircleCheck aria-hidden="true" className="-ml-0.5 h-5 w-5" />
              Secondary Button
            </button>
          </div>
          <div>
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none font-medium">
              <CircleCheck aria-hidden="true" className="-ml-0.5 h-5 w-5" />
              Outline Button
            </button>
          </div>
          <div>
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none font-medium">
              <CircleCheck aria-hidden="true" className="-ml-0.5 h-5 w-5" />
              Primary Outline
            </button>
          </div>
        </div>
      </div>

      {/* Buttons with a trailing icon */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Buttons with a trailing icon
        </h3>
        <div className="flex items-end flex-wrap gap-4">
          <div>
            <button
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none "
            >
              Primary Button
              <CircleCheck aria-hidden="true" className="-ml-0.5 h-5 w-5" />
            </button>
          </div>
          <div>
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none font-medium">
              Secondary Button
              <CircleCheck aria-hidden="true" className="-ml-0.5 h-5 w-5" />
            </button>
          </div>
          <div>
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none font-medium">
              Outline Button
              <CircleCheck aria-hidden="true" className="-ml-0.5 h-5 w-5" />
            </button>
          </div>
          <div>
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none font-medium">
              Primary Outline
              <CircleCheck aria-hidden="true" className="-ml-0.5 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      {/* Buttons without a focus ring */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Buttons without a focus ring
        </h3>
        <div className="flex items-end flex-wrap gap-4">
          <div>
            <button
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-blue-700"
            >
              <CircleCheck aria-hidden="true" className="-ml-0.5 h-5 w-5" />
              Primary Button
            </button>
          </div>
          <div>
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
              <CircleCheck aria-hidden="true" className="-ml-0.5 h-5 w-5" />
              Secondary Button
            </button>
          </div>
          <div>
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50  font-medium">
              <CircleCheck aria-hidden="true" className="-ml-0.5 h-5 w-5" />
              Outline Button
            </button>
          </div>
          <div>
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 font-medium">
              <CircleCheck aria-hidden="true" className="-ml-0.5 h-5 w-5" />
              Primary Outline
            </button>
          </div>
        </div>
      </div>
      {/* Button with a group */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Button with a group
        </h3>
        <span className="isolate inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            Years
          </button>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            Months
          </button>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            Days
          </button>
        </span>
      </div>
      {/* Icon Buttons Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Icon Buttons
        </h3>
        <div className="flex flex-wrap gap-4">
          <button className="p-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none">
            <Plus className="w-4 h-4" />
          </button>
          <button className="p-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none">
            <Settings className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none">
            <Bell className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Status Buttons Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Status Buttons
        </h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none font-medium inline-flex items-center space-x-2">
            <Check className="w-4 h-4" />
            <span>Success</span>
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none font-medium inline-flex items-center space-x-2">
            <X className="w-4 h-4" />
            <span>Error</span>
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none font-medium">
            Warning
          </button>
        </div>
      </div>

      {/* Social Media Buttons Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Social Media Buttons
        </h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none font-medium inline-flex items-center space-x-2">
            <Github className="w-4 h-4" />
            <span>Github</span>
          </button>
          <button className="px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none font-medium inline-flex items-center space-x-2">
            <Twitter className="w-4 h-4" />
            <span>Twitter</span>
          </button>
          <button className="px-4 py-2 bg-[#4267B2] text-white rounded-lg hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none font-medium inline-flex items-center space-x-2">
            <Facebook className="w-4 h-4" />
            <span>Facebook</span>
          </button>
        </div>
      </div>

      {/* Action Buttons Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Action Buttons
        </h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none text-sm font-medium inline-flex items-center space-x-1">
            <Edit className="w-3 h-3" />
            <span>Edit</span>
          </button>
          <button className="px-3 py-1.5 bg-red-100 text-red-700 rounded-md hover:bg-red-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none text-sm font-medium inline-flex items-center space-x-1">
            <Trash className="w-3 h-3" />
            <span>Delete</span>
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none font-medium inline-flex items-center space-x-2">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Loading State Buttons Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Loading State Buttons
        </h3>
        <div className="flex flex-wrap gap-4">
          <button
            disabled
            className="px-4 py-2 bg-blue-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none font-medium inline-flex items-center space-x-2 opacity-70 cursor-not-allowed"
          >
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Loading...</span>
          </button>
          <button
            disabled
            className="px-4 py-2 bg-green-600 text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none font-medium inline-flex items-center space-x-2 opacity-70 cursor-not-allowed"
          >
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Processing...</span>
          </button>
          <button
            disabled
            className="px-4 py-2 bg-purple-600 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none font-medium inline-flex items-center space-x-2 opacity-70 cursor-not-allowed"
          >
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting...</span>
          </button>
        </div>
      </div>

      {/* Misc Buttons Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Miscellaneous Buttons
        </h3>
        <div className="flex flex-wrap gap-4">
          <button
            disabled
            className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed font-medium"
          >
            Disabled
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none font-medium inline-flex items-center space-x-2">
            <span>Dropdown</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="text-blue-600 hover:text-blue-700 hover:underline rounded font-medium inline-flex items-center space-x-1">
            <span>Learn More</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonCollection;
