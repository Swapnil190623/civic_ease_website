import React, { useState } from "react";
import {
  Zap,
  Bell,
  User,
  LogOut,
  TrendingUp,
  MapPin,
  Clock,
  MessageCircle,
  Share2,
  MoreHorizontal,
  CheckCircle,
  AlertCircle,
  Plus,
  Filter,
  Search,
  Home,
  FileText,
  Settings,
  ThumbsUp,
  Eye,
  Calendar,
} from "lucide-react";

const DashboardCitizen = () => {
  const [activeTab, setActiveTab] = useState("feed"); // 'feed' or 'myIssues'
  const [votedIssues, setVotedIssues] = useState([2, 5]); // IDs of issues user has voted for
  const [filterCategory, setFilterCategory] = useState("all");

  // Sample User Data
  const currentUser = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: null,
    issuesReported: 12,
    issuesResolved: 4,
    totalVotes: 45,
  };

  // Sample Issues Data (Feed)
  const allIssues = [
    {
      id: 1,
      title: "Large pothole on Main Street causing vehicle damage",
      description:
        "There is a dangerous pothole on Main Street near the intersection with 5th Avenue. Multiple vehicles have been damaged. The hole is approximately 2 feet deep and 3 feet wide.",
      category: "Roads & Infrastructure",
      priority: "high",
      status: "pending",
      votes: 23,
      comments: 5,
      location: "Main Street & 5th Avenue, Downtown",
      reportedBy: "John Doe",
      reportedById: 1,
      reportedDate: "2024-10-03",
      timeAgo: "2 hours ago",
      image:
        "https://images.unsplash.com/photo-1599666462556-ad7896ddfc53?w=800",
      anonymous: false,
    },
    {
      id: 2,
      title: "Overflowing garbage bins at Park Avenue",
      description:
        "The garbage bins have not been emptied for over 3 days and waste is spilling onto the street creating health hazards.",
      category: "Sanitation & Cleanliness",
      priority: "medium",
      status: "in-progress",
      votes: 15,
      comments: 3,
      location: "Park Avenue, Block 12",
      reportedBy: "Sarah Smith",
      reportedById: 2,
      reportedDate: "2024-10-02",
      timeAgo: "1 day ago",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800",
      anonymous: false,
    },
    {
      id: 3,
      title: "Broken street light creating safety hazard",
      description:
        "Street light has been non-functional for 2 weeks, making the area unsafe at night for pedestrians.",
      category: "Electricity & Power",
      priority: "high",
      status: "resolved",
      votes: 8,
      comments: 7,
      location: "Oak Road, Sector 7",
      reportedBy: "Michael Brown",
      reportedById: 3,
      reportedDate: "2024-09-28",
      timeAgo: "5 days ago",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800",
      anonymous: false,
      resolvedDate: "2024-10-01",
    },
    {
      id: 4,
      title: "Water leakage from main pipe",
      description:
        "Continuous water leakage causing road damage and water wastage since last week.",
      category: "Water Supply",
      priority: "high",
      status: "pending",
      votes: 31,
      comments: 12,
      location: "Elm Street, Near City Park",
      reportedBy: "Anonymous",
      reportedById: 4,
      reportedDate: "2024-10-04",
      timeAgo: "3 hours ago",
      image:
        "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800",
      anonymous: true,
    },
    {
      id: 5,
      title: "Illegal dumping site near residential area",
      description:
        "Construction waste and household garbage being illegally dumped, creating health hazards.",
      category: "Sanitation & Cleanliness",
      priority: "medium",
      status: "in-progress",
      votes: 19,
      comments: 8,
      location: "Cedar Lane, Behind Mall",
      reportedBy: "Emma Wilson",
      reportedById: 5,
      reportedDate: "2024-10-01",
      timeAgo: "2 days ago",
      image:
        "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800",
      anonymous: false,
    },
  ];

  // Filter issues
  const myIssues = allIssues.filter(
    (issue) => issue.reportedById === currentUser.id
  );
  const displayIssues = activeTab === "myIssues" ? myIssues : allIssues;
  const filteredIssues =
    filterCategory === "all"
      ? displayIssues
      : displayIssues.filter((issue) => issue.category === filterCategory);

  const handleVote = (issueId) => {
    if (votedIssues.includes(issueId)) {
      setVotedIssues(votedIssues.filter((id) => id !== issueId));
    } else {
      setVotedIssues([...votedIssues, issueId]);
    }
  };

  const getPriorityColor = (priority) => {
    if (priority === "high") return "text-red-600 bg-red-50";
    if (priority === "medium") return "text-yellow-600 bg-yellow-50";
    return "text-green-600 bg-green-50";
  };

  const getStatusColor = (status) => {
    if (status === "resolved") return "bg-green-500";
    if (status === "in-progress") return "bg-blue-500";
    return "bg-yellow-500";
  };

  const getStatusText = (status) => {
    if (status === "resolved") return "Resolved";
    if (status === "in-progress") return "In Progress";
    return "Pending";
  };

  const IssueCard = ({ issue }) => {
    const isVoted = votedIssues.includes(issue.id);
    const isMyIssue = issue.reportedById === currentUser.id;

    return (
      <div className="bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden">
        {/* Card Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">
                  {issue.anonymous ? "?" : issue.reportedBy.charAt(0)}
                </span>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <p className="font-bold text-gray-900">
                    {issue.anonymous ? "Anonymous" : issue.reportedBy}
                  </p>
                  {isMyIssue && (
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      You
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mt-0.5">
                  <span>{issue.timeAgo}</span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{issue.location.split(",")[0]}</span>
                  </span>
                </div>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Issue Content */}
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <h3 className="text-lg font-bold text-gray-900 leading-snug flex-1">
                {issue.title}
              </h3>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(
                  issue.priority
                )}`}
              >
                {issue.priority.toUpperCase()}
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">{issue.description}</p>
          </div>
        </div>

        {/* Issue Image */}
        {issue.image && (
          <div className="px-6 pb-4">
            <img
              src={issue.image}
              alt={issue.title}
              className="w-full rounded-xl object-cover max-h-96 cursor-pointer hover:opacity-95 transition"
            />
          </div>
        )}

        {/* Issue Meta */}
        <div className="px-6 pb-4">
          <div className="flex items-center flex-wrap gap-3 text-sm">
            <span className="flex items-center space-x-1 text-gray-600">
              <div
                className={`w-2 h-2 rounded-full ${getStatusColor(
                  issue.status
                )}`}
              ></div>
              <span className="font-medium">{getStatusText(issue.status)}</span>
            </span>
            <span className="text-gray-400">•</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
              {issue.category}
            </span>
            <span className="text-gray-400">•</span>
            <span className="flex items-center space-x-1 text-gray-600">
              <Eye className="w-4 h-4" />
              <span className="font-medium">{issue.votes * 10} views</span>
            </span>
          </div>
        </div>

        {/* Card Actions */}
        <div className="border-t border-gray-200 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => handleVote(issue.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  isVoted
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <ThumbsUp
                  className={`w-4 h-4 ${isVoted ? "fill-current" : ""}`}
                />
                <span>
                  {issue.votes +
                    (isVoted && !votedIssues.includes(issue.id)
                      ? 0
                      : isVoted
                      ? 0
                      : 0)}
                </span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
                <MessageCircle className="w-4 h-4" />
                <span>{issue.comments}</span>
              </button>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                CivicEase
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2.5 hover:bg-gray-100 rounded-lg transition">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="flex items-center space-x-3 px-4 py-2 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200 transition">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {currentUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {currentUser.name}
                  </p>
                  <p className="text-xs text-gray-500">Citizen</p>
                </div>
              </div>
              <button className="p-2.5 hover:bg-gray-100 rounded-lg transition text-gray-600">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Sidebar - User Stats */}
          <div className="lg:col-span-3 space-y-6">
            {/* User Profile Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {currentUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">
                  {currentUser.name}
                </h3>
                <p className="text-sm text-gray-500">{currentUser.email}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                  <span className="text-sm text-gray-700 font-medium">
                    Issues Reported
                  </span>
                  <span className="text-lg font-bold text-blue-600">
                    {currentUser.issuesReported}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                  <span className="text-sm text-gray-700 font-medium">
                    Resolved
                  </span>
                  <span className="text-lg font-bold text-green-600">
                    {currentUser.issuesResolved}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
                  <span className="text-sm text-gray-700 font-medium">
                    Total Votes
                  </span>
                  <span className="text-lg font-bold text-purple-600">
                    {currentUser.totalVotes}
                  </span>
                </div>
              </div>

              <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>Report New Issue</span>
              </button>
            </div>
          </div>

          {/* Main Content - Feed */}
          <div className="lg:col-span-6 space-y-6">
            {/* Tabs */}
            <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-200">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab("feed")}
                  className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeTab === "feed"
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Home className="w-5 h-5" />
                  <span>Community Feed</span>
                </button>
                <button
                  onClick={() => setActiveTab("myIssues")}
                  className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeTab === "myIssues"
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <FileText className="w-5 h-5" />
                  <span>My Issues ({myIssues.length})</span>
                </button>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center space-x-2 overflow-x-auto">
                  <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <button
                    onClick={() => setFilterCategory("all")}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                      filterCategory === "all"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilterCategory("Roads & Infrastructure")}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                      filterCategory === "Roads & Infrastructure"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Roads
                  </button>
                  <button
                    onClick={() =>
                      setFilterCategory("Sanitation & Cleanliness")
                    }
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                      filterCategory === "Sanitation & Cleanliness"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Sanitation
                  </button>
                  <button
                    onClick={() => setFilterCategory("Electricity & Power")}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                      filterCategory === "Electricity & Power"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Electricity
                  </button>
                </div>
                <div className="relative flex-shrink-0">
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition w-48"
                  />
                </div>
              </div>
            </div>

            {/* Issues Feed */}
            <div className="space-y-6">
              {filteredIssues.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-200">
                  <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    No issues found
                  </h3>
                  <p className="text-gray-600">
                    {activeTab === "myIssues"
                      ? "You haven't reported any issues yet"
                      : "No issues match your filter criteria"}
                  </p>
                </div>
              ) : (
                filteredIssues.map((issue) => (
                  <IssueCard key={issue.id} issue={issue} />
                ))
              )}
            </div>
          </div>

          {/* Right Sidebar - Trending & Stats */}
          <div className="lg:col-span-3 space-y-6">
            {/* Trending Issues */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 sticky top-24">
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span>Trending Issues</span>
              </h3>
              <div className="space-y-4">
                {allIssues
                  .sort((a, b) => b.votes - a.votes)
                  .slice(0, 5)
                  .map((issue, index) => (
                    <div
                      key={issue.id}
                      className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition cursor-pointer"
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
                          {issue.title}
                        </p>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <ThumbsUp className="w-3 h-3" />
                          <span>{issue.votes} votes</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 shadow-xl text-white">
              <h3 className="font-bold text-lg mb-4">Community Impact</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-blue-100 text-sm">Active Citizens</span>
                  <span className="text-2xl font-bold">200</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100 text-sm">Issues Resolved</span>
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100 text-sm">Avg Resolution</span>
                  <span className="text-2xl font-bold">3.5d</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCitizen;
