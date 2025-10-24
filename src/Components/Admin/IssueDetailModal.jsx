import React from "react";
import { X, MapPin, TrendingUp, CheckCircle, MoreVertical } from "lucide-react";

const getStatusColor = (status) => {
  switch (status) {
    case "pending":
      return "bg-orange-50 text-orange-700 border-orange-300";
    case "in-progress":
      return "bg-orange-100 text-orange-800 border-orange-400";
    case "resolved":
      return "bg-green-100 text-green-700 border-green-400";
    default:
      return "bg-gray-100 text-gray-700 border-gray-300";
  }
};

const getPriorityColor = (priority) => {
  switch (priority?.toLowerCase()) {
    case "high":
      return "bg-orange-200 text-orange-800 border-orange-400";
    case "medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-300";
    case "low":
      return "bg-green-100 text-green-700 border-green-300";
    default:
      return "bg-gray-100 text-gray-700 border-gray-300";
  }
};

const IssueDetailModal = ({ issue, onClose, handleStatusChange }) => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all">
      
      {/* 🔶 Modal Header */}
      <div className="sticky top-0 bg-linear-to-r from-orange-500 to-orange-600 px-8 py-6 flex items-center justify-between shadow-md">
        <div>
          <h2 className="text-2xl font-bold text-white">Issue Details</h2>
          <p className="text-orange-100 text-sm mt-1">ID: #{issue.id}</p>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/20 rounded-lg transition text-white"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* 🔶 Modal Body */}
      <div className="p-8 space-y-6">
        
        {/* Status and Priority */}
        <div className="flex items-center space-x-3">
          <span className={`px-4 py-2 rounded-xl text-sm font-semibold border ${getStatusColor(issue.status)}`}>
            {issue.status === "in-progress" ? "In Progress" : issue.status?.charAt(0).toUpperCase() + issue.status?.slice(1)}
          </span>
          <span className={`px-4 py-2 rounded-xl text-sm font-semibold border ${getPriorityColor(issue.priority)}`}>
            {issue.priority?.toUpperCase()} PRIORITY
          </span>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-orange-100">
          <img
            src={issue.image}
            alt={issue.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {issue.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{issue.description}</p>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Category</p>
              <p className="font-semibold text-gray-900">{issue.category}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Location</p>
              <p className="font-semibold text-gray-900 flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-orange-600" />
                <span>{issue.location}</span>
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Reported Date</p>
              <p className="font-semibold text-gray-900">{issue.reportedDate}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Reported By</p>
              <p className="font-semibold text-gray-900">{issue.reportedBy}</p>
              {!issue.anonymous && issue.email && (
                <p className="text-sm text-gray-600 mt-1">{issue.email}</p>
              )}
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Community Votes</p>
              <p className="font-semibold text-gray-900 flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-orange-600" />
                <span>{issue.votes} citizens support this</span>
              </p>
            </div>
            {issue.assignedTo && (
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Assigned To</p>
                <p className="font-semibold text-gray-900">{issue.assignedTo}</p>
              </div>
            )}
          </div>
        </div>

        {/* Resolution Notes */}
        {issue.status === "resolved" && issue.resolutionNotes && (
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h4 className="font-semibold text-orange-900 mb-2 flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-orange-600" />
              <span>Resolution Notes</span>
            </h4>
            <p className="text-orange-800">{issue.resolutionNotes}</p>
            <p className="text-sm text-orange-700 mt-2">
              Resolved on: {issue.resolvedDate}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex space-x-3 pt-4 border-t border-gray-200">
          {issue.status === "pending" && (
            <button
              onClick={() => handleStatusChange(issue.id, "in-progress")}
              className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700 transition shadow-lg"
            >
              Start Working
            </button>
          )}
          {issue.status === "in-progress" && (
            <button
              onClick={() => handleStatusChange(issue.id, "resolved")}
              className="flex-1 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition shadow-lg"
            >
              Mark as Resolved
            </button>
          )}
          <button className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition">
            Assign Team
          </button>
          <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default IssueDetailModal;