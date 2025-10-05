import React, { useState } from 'react';
import { 
  Shield, 
  Bell, 
  X, 
  FileText, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle, 
  Users, 
  MapPin, 
  Filter, 
  Search,
  Download,
  MoreVertical,
  Calendar,
  BarChart3,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';

const DashboardAdmin = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [showIssueModal, setShowIssueModal] = useState(false);

  // Sample Issues Data
  const issues = [
    {
      id: 1,
      title: 'Large pothole on Main Street causing vehicle damage',
      description: 'There is a dangerous pothole on Main Street near the intersection with 5th Avenue. Multiple vehicles have been damaged. The hole is approximately 2 feet deep and 3 feet wide.',
      category: 'Roads & Infrastructure',
      priority: 'high',
      status: 'pending',
      votes: 23,
      location: 'Main Street & 5th Avenue, Downtown',
      reportedBy: 'John Doe',
      reportedDate: '2024-10-03',
      image: 'https://images.unsplash.com/photo-1599666462556-ad7896ddfc53?w=800',
      anonymous: false,
      email: 'john.doe@example.com',
      phone: '+1 234-567-8900'
    },
    {
      id: 2,
      title: 'Overflowing garbage bins at Park Avenue',
      description: 'The garbage bins have not been emptied for over 3 days and waste is spilling onto the street creating health hazards.',
      category: 'Sanitation & Cleanliness',
      priority: 'medium',
      status: 'in-progress',
      votes: 15,
      location: 'Park Avenue, Block 12',
      reportedBy: 'Anonymous',
      reportedDate: '2024-10-02',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800',
      anonymous: true,
      assignedTo: 'Sanitation Team A'
    },
    {
      id: 3,
      title: 'Broken street light creating safety hazard',
      description: 'Street light has been non-functional for 2 weeks, making the area unsafe at night for pedestrians.',
      category: 'Electricity & Power',
      priority: 'high',
      status: 'resolved',
      votes: 8,
      location: 'Oak Road, Sector 7',
      reportedBy: 'Sarah Smith',
      reportedDate: '2024-09-28',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800',
      anonymous: false,
      resolvedDate: '2024-10-01',
      resolutionNotes: 'Street light repaired and tested. Working properly now.',
      email: 'sarah.smith@example.com'
    },
    {
      id: 4,
      title: 'Water leakage from main pipe',
      description: 'Continuous water leakage causing road damage and water wastage since last week.',
      category: 'Water Supply',
      priority: 'high',
      status: 'pending',
      votes: 31,
      location: 'Elm Street, Near City Park',
      reportedBy: 'Michael Brown',
      reportedDate: '2024-10-04',
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800',
      anonymous: false,
      email: 'michael.b@example.com',
      phone: '+1 234-567-8901'
    },
    {
      id: 5,
      title: 'Illegal dumping site near residential area',
      description: 'Construction waste and household garbage being illegally dumped, creating health hazards.',
      category: 'Sanitation & Cleanliness',
      priority: 'medium',
      status: 'in-progress',
      votes: 19,
      location: 'Cedar Lane, Behind Mall',
      reportedBy: 'Anonymous',
      reportedDate: '2024-10-01',
      image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800',
      anonymous: true,
      assignedTo: 'Sanitation Team B'
    }
  ];

  const stats = {
    total: issues.length,
    pending: issues.filter(i => i.status === 'pending').length,
    inProgress: issues.filter(i => i.status === 'in-progress').length,
    resolved: issues.filter(i => i.status === 'resolved').length,
    highPriority: issues.filter(i => i.priority === 'high').length,
    avgResolutionTime: '3.5 days',
    activeCitizens: 200,
    resolutionRate: '95.6%'
  };

  const filteredIssues = filterStatus === 'all' 
    ? issues 
    : issues.filter(issue => issue.status === filterStatus);

  const getPriorityColor = (priority) => {
    if (priority === 'high') return 'text-red-600 bg-red-50 border-red-200';
    if (priority === 'medium') return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-green-600 bg-green-50 border-green-200';
  };

  const getStatusColor = (status) => {
    if (status === 'resolved') return 'bg-green-100 text-green-700 border-green-200';
    if (status === 'in-progress') return 'bg-blue-100 text-blue-700 border-blue-200';
    return 'bg-yellow-100 text-yellow-700 border-yellow-200';
  };

  const handleStatusChange = (issueId, newStatus) => {
    console.log(`Changing issue ${issueId} to status: ${newStatus}`);
    // Implement status change logic with Supabase
  };

  const IssueDetailModal = ({ issue, onClose }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Modal Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-purple-500 px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Issue Details</h2>
            <p className="text-purple-100 text-sm mt-1">ID: #{issue.id}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8 space-y-6">
          {/* Status and Priority Badges */}
          <div className="flex items-center space-x-3">
            <span className={`px-4 py-2 rounded-xl text-sm font-semibold border ${getStatusColor(issue.status)}`}>
              {issue.status === 'in-progress' ? 'In Progress' : issue.status.charAt(0).toUpperCase() + issue.status.slice(1)}
            </span>
            <span className={`px-4 py-2 rounded-xl text-sm font-semibold border ${getPriorityColor(issue.priority)}`}>
              {issue.priority.toUpperCase()} PRIORITY
            </span>
          </div>

          {/* Issue Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={issue.image} alt={issue.title} className="w-full h-96 object-cover" />
          </div>

          {/* Issue Title and Description */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{issue.title}</h3>
            <p className="text-gray-700 leading-relaxed">{issue.description}</p>
          </div>

          {/* Issue Details Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Category</p>
                <p className="font-semibold text-gray-900">{issue.category}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Location</p>
                <p className="font-semibold text-gray-900 flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
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
                  <TrendingUp className="w-4 h-4 text-blue-600" />
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

          {/* Resolution Notes (if resolved) */}
          {issue.status === 'resolved' && issue.resolutionNotes && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-semibold text-green-900 mb-2 flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Resolution Notes</span>
              </h4>
              <p className="text-green-800">{issue.resolutionNotes}</p>
              <p className="text-sm text-green-700 mt-2">Resolved on: {issue.resolvedDate}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4 border-t border-gray-200">
            {issue.status === 'pending' && (
              <button
                onClick={() => handleStatusChange(issue.id, 'in-progress')}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg"
              >
                Start Working
              </button>
            )}
            {issue.status === 'in-progress' && (
              <button
                onClick={() => handleStatusChange(issue.id, 'resolved')}
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">CivicEase Authority</span>
                <p className="text-xs text-gray-500">Issue Management Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2.5 hover:bg-gray-100 rounded-lg transition relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="flex items-center space-x-3 px-4 py-2 bg-purple-50 rounded-xl border border-purple-200">
                <div className="w-9 h-9 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">AD</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Admin User</p>
                  <p className="text-xs text-purple-600">Authority</p>
                </div>
              </div>
              <button className="p-2.5 hover:bg-gray-100 rounded-lg transition text-gray-600">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Admin</h1>
          <p className="text-gray-600 flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Here's what's happening with civic issues today</span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                Total
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.total}</p>
            <p className="text-sm text-gray-600">All Issues</p>
            <div className="mt-3 flex items-center text-xs text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              <span>+12% from last week</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-semibold text-yellow-600 bg-yellow-50 px-3 py-1.5 rounded-full">
                New
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.pending}</p>
            <p className="text-sm text-gray-600">Pending Action</p>
            <div className="mt-3 flex items-center text-xs text-red-600">
              <AlertCircle className="w-3 h-3 mr-1" />
              <span>Requires attention</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                Active
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.inProgress}</p>
            <p className="text-sm text-gray-600">In Progress</p>
            <div className="mt-3 flex items-center text-xs text-blue-600">
              <Clock className="w-3 h-3 mr-1" />
              <span>Being worked on</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                Done
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.resolved}</p>
            <p className="text-sm text-gray-600">Resolved</p>
            <div className="mt-3 flex items-center text-xs text-green-600">
              <CheckCircle className="w-3 h-3 mr-1" />
              <span>Great work!</span>
            </div>
          </div>
        </div>

        {/* Quick Stats Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <AlertCircle className="w-10 h-10 opacity-80" />
              <span className="text-3xl font-bold">{stats.highPriority}</span>
            </div>
            <p className="text-red-100 text-sm font-semibold mb-1">High Priority Issues</p>
            <p className="text-red-200 text-xs">Requires immediate attention</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-10 h-10 opacity-80" />
              <span className="text-3xl font-bold">{stats.activeCitizens}</span>
            </div>
            <p className="text-blue-100 text-sm font-semibold mb-1">Active Citizens</p>
            <p className="text-blue-200 text-xs">Community engagement</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="w-10 h-10 opacity-80" />
              <span className="text-3xl font-bold">{stats.resolutionRate}</span>
            </div>
            <p className="text-purple-100 text-sm font-semibold mb-1">Resolution Rate</p>
            <p className="text-purple-200 text-xs">Performance metric</p>
          </div>
        </div>

        {/* Filters and Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="font-semibold text-gray-900">Filter by Status:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterStatus('all')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    filterStatus === 'all'
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All ({stats.total})
                </button>
                <button
                  onClick={() => setFilterStatus('pending')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    filterStatus === 'pending'
                      ? 'bg-yellow-500 text-white shadow-lg shadow-yellow-500/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Pending ({stats.pending})
                </button>
                <button
                  onClick={() => setFilterStatus('in-progress')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    filterStatus === 'in-progress'
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  In Progress ({stats.inProgress})
                </button>
                <button
                  onClick={() => setFilterStatus('resolved')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    filterStatus === 'resolved'
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Resolved ({stats.resolved})
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search issues..."
                  className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                />
              </div>
              <button className="px-4 py-2.5 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition shadow-sm flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Issues List */}
        <div className="space-y-4">
          {filteredIssues.map(issue => (
            <div
              key={issue.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex gap-6">
                  {/* Issue Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={issue.image}
                      alt={issue.title}
                      className="w-36 h-36 rounded-xl object-cover shadow-md group-hover:shadow-xl transition-all duration-300"
                    />
                  </div>

                  {/* Issue Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition">
                            {issue.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getPriorityColor(issue.priority)}`}>
                            {issue.priority.toUpperCase()}
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
                          <span>Reported: {issue.reportedDate}</span>
                          <span>•</span>
                          <span className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold text-blue-600">{issue.votes} votes</span>
                          </span>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="ml-4">
                        <span className={`px-4 py-2 rounded-xl text-sm font-bold border ${getStatusColor(issue.status)}`}>
                          {issue.status === 'in-progress' ? 'In Progress' : issue.status.charAt(0).toUpperCase() + issue.status.slice(1)}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-gray-100">
                      <button
                        onClick={() => {
                          setSelectedIssue(issue);
                          setShowIssueModal(true);
                        }}
                        className="px-5 py-2.5 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition shadow-sm hover:shadow-md flex items-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                      {issue.status === 'pending' && (
                        <button 
                          onClick={() => handleStatusChange(issue.id, 'in-progress')}
                          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-sm hover:shadow-md"
                        >
                          Start Work
                        </button>
                      )}
                      {issue.status === 'in-progress' && (
                        <button 
                          onClick={() => handleStatusChange(issue.id, 'resolved')}
                          className="px-5 py-2.5 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition shadow-sm hover:shadow-md flex items-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4" />
                          <span>Mark Resolved</span>
                        </button>
                      )}
                      <button className="px-5 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition">
                        Assign Team
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
          ))}
        </div>

        {/* No Issues Message */}
        {filteredIssues.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No issues found</h3>
            <p className="text-gray-600">There are no issues matching your filter criteria.</p>
          </div>
        )}

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold">{filteredIssues.length}</span> of <span className="font-semibold">{stats.total}</span> issues
          </p>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed">
              Previous
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Issue Detail Modal */}
      {showIssueModal && selectedIssue && (
        <IssueDetailModal 
          issue={selectedIssue} 
          onClose={() => {
            setShowIssueModal(false);
            setSelectedIssue(null);
          }} 
        />
      )}
    </div>
  );
};

export default DashboardAdmin;