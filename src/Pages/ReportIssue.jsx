import React from 'react';
import { useState } from 'react';
import { Zap, MapPin, Upload, Camera, Send, X, CheckCircle, TrendingUp, Users, Shield, Clock, ArrowRight, Star } from 'lucide-react';


function ReportIssue() {


const [currentPage, setCurrentPage] = useState('home');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    priority: '',
    location: '',
    anonymous: false
  })

  return (
   
    <div className="min-h-screen bg-linear-to-br from-orange-100 via-white to-cyan-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => setCurrentPage('home')} className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-linear-to-br from-orange-600 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">CivicEase</span>
            </button>
            <button 
              onClick={() => setCurrentPage('home')} 
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
            <Clock className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">Takes less than 2 minutes</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Report a Civic Issue</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us improve your community. Your report will be reviewed by local authorities within 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="bg-linear-to-r from-orange-600 to-yellow-400 px-8 py-6">
            <h2 className="text-2xl font-bold text-white">Issue Details</h2>
            <p className="text-orange-100 mt-1">Fill in the information below</p>
          </div>

          <form className="p-8 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Issue Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g., Broken street light on Main Road"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition text-gray-900 placeholder-gray-400"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Detailed Description <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                placeholder="Provide as much detail as possible about the issue, including when you noticed it and how it affects the community..."
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition resize-none text-gray-900 placeholder-gray-400"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
              <p className="text-sm text-gray-500 mt-2">Minimum 20 characters</p>
            </div>

            {/* Category and Priority */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Category <span className="text-red-500">*</span>
                </label>
                <select 
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition text-gray-900"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option value="">Select a category</option>
                  <option value="roads">🛣️ Roads & Infrastructure</option>
                  <option value="sanitation">🗑️ Sanitation & Cleanliness</option>
                  <option value="electricity">⚡ Electricity & Power</option>
                  <option value="water">💧 Water Supply</option>
                  <option value="safety">🚨 Public Safety</option>
                  <option value="parks">🌳 Parks & Recreation</option>
                  <option value="other">📋 Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Priority Level <span className="text-red-500">*</span>
                </label>
                <select 
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition text-gray-900"
                  value={formData.priority}
                  onChange={(e) => setFormData({...formData, priority: e.target.value})}
                >
                  <option value="">Select priority</option>
                  <option value="low">🟢 Low - Can wait</option>
                  <option value="medium">🟡 Medium - Needs attention</option>
                  <option value="high">🔴 High - Urgent</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Location <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter street address or landmark"
                  className="w-full pl-12 pr-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition text-gray-900 placeholder-gray-400"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>
              <button type="button" className="mt-3 text-sm text-orange-600 font-semibold hover:text-orange-700 flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Use my current location</span>
              </button>
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Upload Photo <span className="text-gray-500">(Optional but recommended)</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-orange-500 hover:bg-orange-50/50 transition cursor-pointer group">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition">
                  <Camera className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-gray-700 font-semibold mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PNG, JPG, JPEG up to 10MB</p>
                <p className="text-xs text-gray-400 mt-2">Photos help authorities understand and resolve issues faster</p>
              </div>
            </div>

            {/* Anonymous Toggle */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="anonymous"
                  className="w-5 h-5 mt-0.5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  checked={formData.anonymous}
                  onChange={(e) => setFormData({...formData, anonymous: e.target.checked})}
                />
                <div className="flex-1">
                  <label htmlFor="anonymous" className="font-semibold text-gray-900 cursor-pointer">
                    Report anonymously
                  </label>
                  <p className="text-sm text-gray-600 mt-1">
                    Your personal information will not be shared publicly. Only authorities will have access to your details.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={() => setCurrentPage('home')}
                className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-4 bg-linear-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Submit Report</span>
              </button>
            </div>

            {/* Help Text */}
            <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
              <p className="text-sm text-orange-900">
                <strong>💡 Pro Tip:</strong> Include clear photos and specific location details to help authorities resolve your issue faster. Average resolution time: 3.5 days.
              </p>
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <p className="font-semibold text-gray-900">500+ Issues Resolved</p>
            <p className="text-sm text-gray-600 mt-1">Proven track record</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <Shield className="w-8 h-8 text-orange-500 mx-auto mb-3" />
            <p className="font-semibold text-gray-900">100% Secure</p>
            <p className="text-sm text-gray-600 mt-1">Your data is protected</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <Clock className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <p className="font-semibold text-gray-900">24hr Response Time</p>
            <p className="text-sm text-gray-600 mt-1">Quick acknowledgment</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportIssue