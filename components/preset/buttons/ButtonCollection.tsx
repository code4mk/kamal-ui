import React from "react";
import {
  Bell,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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
  Download,
  Upload,
  Share,
  Mail,
  Phone,
  Calendar,
  User,
  Lock,
  Unlock,
  Heart,
  Star,
  Linkedin,
} from "lucide-react";

const ButtonCard = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-4 text-gray-700">{title}</h3>
    <div className="flex flex-wrap gap-4">{children}</div>
  </div>
);

const ButtonCollection = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Button Demo</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <ButtonCard title="Primary Buttons">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              Primary
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium">
              Success
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium">
              Danger
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 font-medium">
              Warning
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium">
              Info
            </button>
          </ButtonCard>

          <ButtonCard title="Buttons with Icons">
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              <Plus className="w-4 h-4" />
              Add Item
            </button>
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-medium">
              <Settings className="w-4 h-4" />
              Settings
            </button>
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
              <Bell className="w-4 h-4" />
              Notifications
            </button>
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium">
              <Download className="w-4 h-4" />
              Download
            </button>
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium">
              <Upload className="w-4 h-4" />
              Upload
            </button>
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium">
              <Trash className="w-4 h-4" />
              Delete
            </button>
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 font-medium">
              <Star className="w-4 h-4" />
              Favorite
            </button>
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
              <User className="w-4 h-4" />
              Profile
            </button>
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 font-medium">
              <Heart className="w-4 h-4" />
              Like
            </button>
            <button className="inline-flex items-center gap-x-1.5 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium">
              <Calendar className="w-4 h-4" />
              Schedule
            </button>
          </ButtonCard>

          <ButtonCard title="Social Media Buttons">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium inline-flex items-center space-x-2">
              <Github className="w-4 h-4" />
              <span>Github</span>
            </button>
            <button className="px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-blue-600 font-medium inline-flex items-center space-x-2">
              <Twitter className="w-4 h-4" />
              <span>Twitter</span>
            </button>
            <button className="px-4 py-2 bg-[#4267B2] text-white rounded-lg hover:bg-blue-800 font-medium inline-flex items-center space-x-2">
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </button>
            <button className="px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-blue-700 font-medium inline-flex items-center space-x-2">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </button>
          </ButtonCard>

          <ButtonCard title="Loading State Buttons">
            <button
              disabled
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium inline-flex items-center space-x-2 opacity-70 cursor-not-allowed"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Loading...</span>
            </button>
            <button
              disabled
              className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium inline-flex items-center space-x-2 opacity-70 cursor-not-allowed"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Processing...</span>
            </button>
            <button
              disabled
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg font-medium inline-flex items-center space-x-2 opacity-70 cursor-not-allowed"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Updating...</span>
            </button>
          </ButtonCard>

          <ButtonCard title="Icon-only Buttons">
            <button className="p-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 font-medium">
              <Plus className="w-4 h-4" />
            </button>
            <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 font-medium">
              <Bell className="w-4 h-4" />
            </button>
            <button className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 font-medium">
              <Check className="w-4 h-4" />
            </button>
            <button className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 font-medium">
              <X className="w-4 h-4" />
            </button>
            <button className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 font-medium">
              <Star className="w-4 h-4" />
            </button>
          </ButtonCard>

          <ButtonCard title="Button Groups with Text and Icons">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700">
                <ChevronLeft className="w-4 h-4 mr-2 inline" />
                Previous
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700">
                <Star className="w-4 h-4 mr-2 inline" />
                Favorite
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700">
                Next
                <ChevronRight className="w-4 h-4 ml-2 inline" />
              </button>
            </div>
          </ButtonCard>

          <ButtonCard title="Groups of Buttons">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700">
                Profile
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700">
                Settings
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700">
                Messages
              </button>
            </div>
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 rounded-l-lg hover:bg-blue-800">
                Save
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-700 border-t border-b border-blue-700 hover:bg-blue-800">
                Edit
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 rounded-r-lg hover:bg-blue-800">
                Delete
              </button>
            </div>
          </ButtonCard>

        </div>
        <div className="space-y-8">
          <ButtonCard title="Secondary & Outline Buttons">
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-medium">
              Secondary
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
              Outline
            </button>
            <button className="px-4 py-2 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 font-medium">
              Primary Outline
            </button>
            <button className="px-4 py-2 border-2 border-green-500 text-green-600 rounded-lg hover:bg-green-50 font-medium">
              Success Outline
            </button>
            <button className="px-4 py-2 border-2 border-red-500 text-red-600 rounded-lg hover:bg-red-50 font-medium">
              Danger Outline
            </button>
          </ButtonCard>

          <ButtonCard title="Status Buttons">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium inline-flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span>Success</span>
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium inline-flex items-center space-x-2">
              <X className="w-4 h-4" />
              <span>Error</span>
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 font-medium inline-flex items-center space-x-2">
              <Bell className="w-4 h-4" />
              <span>Warning</span>
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium inline-flex items-center space-x-2">
              <Share className="w-4 h-4" />
              <span>Share</span>
            </button>
          </ButtonCard>

          <ButtonCard title="Action Buttons">
            <button className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 font-medium inline-flex items-center space-x-1.5">
              <Edit className="w-4 h-4" />
              <span>Edit</span>
            </button>
            <button className="px-3 py-1.5 bg-red-100 text-red-700 rounded-md hover:bg-red-200 font-medium inline-flex items-center space-x-1.5">
              <Trash className="w-4 h-4" />
              <span>Delete</span>
            </button>
            <button className="px-3 py-1.5 bg-green-100 text-green-700 rounded-md hover:bg-green-200 font-medium inline-flex items-center space-x-1.5">
              <Check className="w-4 h-4" />
              <span>Approve</span>
            </button>
            <button className="px-3 py-1.5 bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200 font-medium inline-flex items-center space-x-1.5">
              <Star className="w-4 h-4" />
              <span>Favorite</span>
            </button>
            <button className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 font-medium inline-flex items-center space-x-1.5">
              <Share className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 font-medium inline-flex items-center space-x-1.5">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
            <button className="px-3 py-1.5 bg-pink-100 text-pink-700 rounded-md hover:bg-pink-200 font-medium inline-flex items-center space-x-1.5">
              <Heart className="w-4 h-4" />
              <span>Like</span>
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 font-medium inline-flex items-center space-x-1.5">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
          </ButtonCard>

          <ButtonCard title="Miscellaneous Buttons">
            <button
              disabled
              className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed font-medium"
            >
              Disabled
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium inline-flex items-center space-x-2">
              <span>Dropdown</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="text-blue-600 hover:text-blue-700 hover:underline rounded font-medium inline-flex items-center space-x-1">
              <span>Learn More</span>
              <ExternalLink className="w-3 h-3" />
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 font-medium">
              Gradient
            </button>
            <button className="px-4 py-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded">
              Hover Effect
            </button>
          </ButtonCard>

          <ButtonCard title="Specialized Buttons">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium inline-flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Schedule</span>
            </button>
            <button className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 font-medium inline-flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>Like</span>
            </button>
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium inline-flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Profile</span>
            </button>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-medium inline-flex items-center space-x-2">
              <Lock className="w-4 h-4" />
              <span>Lock</span>
            </button>
            <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 font-medium inline-flex items-center space-x-2">
              <Unlock className="w-4 h-4" />
              <span>Unlock</span>
            </button>
          </ButtonCard>

          <ButtonCard title="Gradient Buttons">
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 font-medium transition duration-300 ease-in-out transform hover:scale-105 inline-flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg hover:from-green-500 hover:to-blue-600 font-medium transition duration-300 ease-in-out transform hover:scale-105 inline-flex items-center space-x-2">
              <Share className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 font-medium transition duration-300 ease-in-out transform hover:scale-105">
              Purple to Pink
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg hover:from-yellow-500 hover:to-orange-600 font-medium transition duration-300 ease-in-out transform hover:scale-105">
              Yellow to Orange
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:from-red-600 hover:to-pink-600 font-medium transition duration-300 ease-in-out transform hover:scale-105">
              Red to Pink
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-lg hover:from-teal-500 hover:to-blue-600 font-medium transition duration-300 ease-in-out transform hover:scale-105">
              Teal to Blue
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 font-medium transition duration-300 ease-in-out transform hover:scale-105">
              Indigo to Purple
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg hover:from-pink-600 hover:to-orange-600 font-medium transition duration-300 ease-in-out transform hover:scale-105">
              Pink to Orange
            </button>
          </ButtonCard>
        </div>
      </div>
    </div>
  );
};

export default ButtonCollection;
