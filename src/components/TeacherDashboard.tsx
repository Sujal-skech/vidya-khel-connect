import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  Award,
  Clock,
  Target,
  Calculator,
  Atom,
  Brain,
  ChevronRight,
  Eye,
  Download,
  Filter,
  Search,
  AlertCircle,
  CheckCircle,
  BarChart3
} from "lucide-react";

const TeacherDashboard = () => {
  const [selectedClass, setSelectedClass] = useState("class8A");

  const teacherData = {
    name: "Mrs. Sunita Sharma",
    school: "Government High School, Bhubaneswar",
    totalStudents: 145,
    activeToday: 89,
    avgEngagement: 78,
    completionRate: 84
  };

  const classes = [
    { id: "class8A", name: "Class 8-A", students: 35, avgProgress: 75 },
    { id: "class8B", name: "Class 8-B", students: 32, avgProgress: 68 },
    { id: "class9A", name: "Class 9-A", students: 38, avgProgress: 82 },
    { id: "class10A", name: "Class 10-A", students: 40, avgProgress: 71 }
  ];

  const subjectStats = [
    {
      name: "Mathematics",
      icon: Calculator,
      studentsEnrolled: 145,
      averageProgress: 72,
      completionRate: 68,
      engagementScore: 85,
      color: "primary"
    },
    {
      name: "Science", 
      icon: Atom,
      studentsEnrolled: 132,
      averageProgress: 64,
      completionRate: 59,
      engagementScore: 78,
      color: "secondary"
    },
    {
      name: "Physics",
      icon: Brain,
      studentsEnrolled: 89,
      averageProgress: 58,
      completionRate: 52,
      engagementScore: 73,
      color: "success"
    }
  ];

  const recentActivity = [
    {
      student: "Rahul Kumar",
      action: "Completed Linear Equations",
      subject: "Mathematics",
      score: 92,
      time: "2 hours ago",
      status: "completed"
    },
    {
      student: "Priya Patel",
      action: "Started Chemical Reactions",
      subject: "Science", 
      score: null,
      time: "3 hours ago",
      status: "in-progress"
    },
    {
      student: "Arjun Singh",
      action: "Achieved Math Master Badge",
      subject: "Mathematics",
      score: null,
      time: "4 hours ago",
      status: "achievement"
    },
    {
      student: "Sneha Rao",
      action: "Completed Daily Challenge",
      subject: "Physics",
      score: 87,
      time: "5 hours ago",
      status: "completed"
    }
  ];

  const strugglingStudents = [
    { name: "Ravi Mohan", subject: "Mathematics", progress: 35, lastActive: "2 days ago" },
    { name: "Kavya Reddy", subject: "Science", progress: 28, lastActive: "3 days ago" },
    { name: "Deepak Kumar", subject: "Physics", progress: 42, lastActive: "1 day ago" }
  ];

  const topPerformers = [
    { name: "Priya Patel", totalXP: 2850, level: 12, streak: 7 },
    { name: "Arjun Singh", totalXP: 2640, level: 11, streak: 5 },
    { name: "Sneha Rao", totalXP: 2430, level: 10, streak: 9 },
    { name: "Rahul Kumar", totalXP: 2285, level: 10, streak: 4 }
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Teacher Dashboard
              </h1>
              <p className="text-muted-foreground">
                {teacherData.name} • {teacherData.school}
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export Report</span>
              </Button>
              <Button className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Manage Students</span>
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Total Students</span>
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{teacherData.totalStudents}</div>
                <p className="text-xs text-muted-foreground mt-1">Across all classes</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Active Today</span>
                  <TrendingUp className="h-4 w-4 text-success" />
                </div>
                <div className="text-2xl font-bold text-success">{teacherData.activeToday}</div>
                <p className="text-xs text-success mt-1">+12% from yesterday</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Avg Engagement</span>
                  <Target className="h-4 w-4 text-warning" />
                </div>
                <div className="text-2xl font-bold text-warning">{teacherData.avgEngagement}%</div>
                <p className="text-xs text-muted-foreground mt-1">This week</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Completion Rate</span>
                  <Award className="h-4 w-4 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">{teacherData.completionRate}%</div>
                <p className="text-xs text-muted-foreground mt-1">All subjects</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="subjects">Subjects</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Recent Activity</span>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View All
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                          <div className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full ${
                              activity.status === 'completed' ? 'bg-success' :
                              activity.status === 'achievement' ? 'bg-warning' : 'bg-primary'
                            }`} />
                            <div>
                              <p className="font-medium text-sm">{activity.student}</p>
                              <p className="text-xs text-muted-foreground">{activity.action}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <Badge variant="outline" className="text-xs">{activity.subject}</Badge>
                                {activity.score && (
                                  <Badge variant="secondary" className="text-xs">Score: {activity.score}%</Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Stats */}
              <div className="space-y-6">
                {/* Top Performers */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Top Performers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {topPerformers.slice(0, 4).map((student, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                              index === 0 ? 'bg-warning text-white' :
                              index === 1 ? 'bg-muted text-foreground' :
                              index === 2 ? 'bg-secondary text-white' :
                              'bg-primary text-white'
                            }`}>
                              {index + 1}
                            </div>
                            <div>
                              <p className="text-sm font-medium">{student.name}</p>
                              <p className="text-xs text-muted-foreground">Level {student.level} • {student.totalXP} XP</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {student.streak}d streak
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Students Needing Attention */}
                <Card className="shadow-card border-warning/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-warning" />
                      <span>Needs Attention</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {strugglingStudents.map((student, index) => (
                        <div key={index} className="p-3 rounded-lg bg-warning/5 border border-warning/20">
                          <div className="flex justify-between items-start mb-2">
                            <p className="font-medium text-sm">{student.name}</p>
                            <Badge variant="outline" className="text-xs">{student.subject}</Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">Progress</span>
                              <span>{student.progress}%</span>
                            </div>
                            <Progress value={student.progress} className="h-2" />
                            <p className="text-xs text-muted-foreground">Last active: {student.lastActive}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="subjects" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {subjectStats.map((subject, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <div className={`w-10 h-10 bg-${subject.color} rounded-lg flex items-center justify-center`}>
                        <subject.icon className="h-5 w-5 text-white" />
                      </div>
                      <span>{subject.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-2xl font-bold text-primary">{subject.studentsEnrolled}</p>
                        <p className="text-xs text-muted-foreground">Students Enrolled</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-success">{subject.averageProgress}%</p>
                        <p className="text-xs text-muted-foreground">Avg Progress</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Completion Rate</span>
                          <span>{subject.completionRate}%</span>
                        </div>
                        <Progress value={subject.completionRate} />
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Engagement Score</span>
                          <span>{subject.engagementScore}%</span>
                        </div>
                        <Progress value={subject.engagementScore} />
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <CardTitle>Student Management</CardTitle>
                  <div className="flex items-center space-x-2 mt-4 md:mt-0">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  {classes.map((classItem) => (
                    <Card 
                      key={classItem.id}
                      className={`cursor-pointer transition-smooth ${
                        selectedClass === classItem.id ? 'ring-2 ring-primary ring-offset-2' : ''
                      }`}
                      onClick={() => setSelectedClass(classItem.id)}
                    >
                      <CardContent className="p-4">
                        <h3 className="font-medium mb-2">{classItem.name}</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Students</span>
                            <span>{classItem.students}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Avg Progress</span>
                            <span>{classItem.avgProgress}%</span>
                          </div>
                          <Progress value={classItem.avgProgress} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center text-muted-foreground">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Select a class to view detailed student information</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Analytics & Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-muted-foreground py-12">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-medium mb-2">Detailed Analytics Coming Soon</h3>
                  <p className="max-w-md mx-auto">
                    Advanced analytics dashboard with student performance trends, 
                    engagement metrics, and detailed progress reports.
                  </p>
                  <Button className="mt-4">
                    Request Early Access
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TeacherDashboard;