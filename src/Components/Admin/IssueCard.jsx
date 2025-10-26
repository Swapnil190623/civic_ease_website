import React from "react";
import { MapPin, TrendingUp, CheckCircle, Eye, Edit, Trash2 } from "lucide-react";

function getStatusColor(status) {
  switch (status) {
    case "pending":
      return "bg-emerald-50 text-emerald-700 border-emerald-300";
    case "in-progress":
      return "bg-emerald-100 text-emerald-800 border-emerald-400";
    case "resolved":
      return "bg-teal-100 text-teal-700 border-teal-400";
    default:
      return "bg-gray-100 text-gray-700 border-gray-300";
  }
}

function getPriorityColor(priority) {
  switch (priority?.toLowerCase()) {
    case "high":
      return "bg-emerald-200 text-emerald-800 border-emerald-400";
    case "medium":
      return "bg-teal-100 text-teal-800 border-teal-300";
    case "low":
      return "bg-green-100 text-green-700 border-green-300";
    default:
      return "bg-gray-100 text-gray-700 border-gray-300";
  }
}

function IssueCard({ issue, onView }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group mb-5">
      <div className="p-6">
        <div className="flex gap-6">
          {/* Issue Image */}
          <div className="shrink-0">
            <img
              src={issue.issue_image_url}
              alt={issue.title}
              className="w-36 h-36 rounded-xl object-cover shadow-md group-hover:shadow-xl transition-all duration-300"
            />
          </div>

          {/* Issue Details */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition">
                    {issue.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getPriorityColor(issue.priority)}`}>
                    {issue.priority?.toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                  {issue.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{issue.location}</span>
                  </span>
                  <span>•</span>
                  <span className="font-medium text-gray-700">{issue.category}</span>
                  <span>•</span>
                  <span>Reported: {new Date(issue.created_at).toLocaleDateString()}</span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold text-emerald-600">
                      {issue.issue_votes || 0} votes
                    </span>
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="ml-4">
                <span className={`px-4 py-2 rounded-xl text-sm font-bold border ${getStatusColor(issue.status)}`}>
                  {issue.status === "in-progress"
                    ? "In Progress"
                    : issue.status?.charAt(0).toUpperCase() + issue.status?.slice(1)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-gray-100">
              <button
                onClick={() => onView(issue)}
                className="px-5 py-2.5 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition shadow-sm hover:shadow-md flex items-center space-x-2"
              >
                <Eye className="w-4 h-4" />
                <span>View Details</span>
              </button>

              <button className="p-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                <Edit className="w-4 h-4" />
              </button>
              <button className="p-2.5 border-2 border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueCard;
