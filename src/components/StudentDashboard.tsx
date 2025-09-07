import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Star, 
  Play, 
  Calculator, 
  Atom, 
  Brain,
  Target,
  Clock,
  Award,
  Zap,
  BookOpen,
  ChevronRight,
  Flame
} from "lucide-react";

const StudentDashboard = () => {
  const [selectedSubject, setSelectedSubject] = useState("mathematics");

  const studentData = {
    name: "Priya Patel",
    grade: "Class 8",
    totalXP: 2850,
    level: 12,
    streak: 7,
    completedLessons: 24,
    totalLessons: 45
  };

  const achievements = [
    { 
      id: 1, 
      name: "Math Master", 
      icon: Calculator, 
      description: "Complete 20 math lessons", 
      earned: true,
      rarity: "gold"
    },
    { 
      id: 2, 
      name: "Science Explorer", 
      icon: Atom, 
      description: "Discover 15 science concepts", 
      earned: true,
      rarity: "silver"
    },
    { 
      id: 3, 
      name: "Problem Solver", 
      icon: Brain, 
      description: "Solve 50 challenging problems", 
      earned: false,
      rarity: "bronze"
    },
    { 
      id: 4, 
      name: "Learning Streak", 
      icon: Flame, 
      description: "Learn for 7 days straight", 
      earned: true,
      rarity: "gold"
    }
  ];

  const subjects = [
    {
      id: "mathematics",
      name: "Mathematics",
      icon: Calculator,
      progress: 75,
      color: "primary",
      nextLesson: "Quadratic Equations",
      xpEarned: 1250,
      lessons: [
        { name: "Linear Equations", completed: true, xp: 100 },
        { name: "Geometry Basics", completed: true, xp: 150 },
        { name: "Quadratic Equations", completed: false, xp: 200 },
        { name: "Trigonometry", completed: false, xp: 250 }
      ]
    },
    {
      id: "science",
      name: "Science",
      icon: Atom,
      progress: 60,
      color: "secondary",
      nextLesson: "Chemical Reactions",
      xpEarned: 950,
      lessons: [
        { name: "Periodic Table", completed: true, xp: 120 },
        { name: "Chemical Bonds", completed: true, xp: 130 },
        { name: "Chemical Reactions", completed: false, xp: 180 },
        { name: "Organic Chemistry", completed: false, xp: 220 }
      ]
    },
    {
      id: "physics",
      name: "Physics",
      icon: Brain,
      progress: 40,
      color: "success",
      nextLesson: "Motion and Forces",
      xpEarned: 650,
      lessons: [
        { name: "Introduction to Physics", completed: true, xp: 100 },
        { name: "Matter and Energy", completed: true, xp: 120 },
        { name: "Motion and Forces", completed: false, xp: 150 },
        { name: "Electricity", completed: false, xp: 200 }
      ]
    }
  ];

  const currentSubject = subjects.find(s => s.id === selectedSubject) || subjects[0];

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, <span className="text-gradient-primary">{studentData.name}!</span>
              </h1>
              <p className="text-muted-foreground">{studentData.grade} • Ready for your next adventure?</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Badge variant="secondary" className="flex items-center space-x-2 text-sm">
                <Flame className="h-4 w-4 text-warning" />
                <span>{studentData.streak} Day Streak</span>
              </Badge>
              <Badge className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>Level {studentData.level}</span>
              </Badge>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Total XP</span>
                  <Zap className="h-4 w-4 text-warning" />
                </div>
                <div className="text-2xl font-bold text-primary">{studentData.totalXP.toLocaleString()}</div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Lessons Completed</span>
                  <BookOpen className="h-4 w-4 text-success" />
                </div>
                <div className="text-2xl font-bold text-success">
                  {studentData.completedLessons}/{studentData.totalLessons}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Current Level</span>
                  <Star className="h-4 w-4 text-warning" />
                </div>
                <div className="text-2xl font-bold text-warning">Level {studentData.level}</div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Learning Streak</span>
                  <Flame className="h-4 w-4 text-destructive" />
                </div>
                <div className="text-2xl font-bold text-destructive">{studentData.streak} Days</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Subject Selection */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Choose Your Subject</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {subjects.map((subject) => (
                  <Card 
                    key={subject.id}
                    className={`cursor-pointer shadow-card hover:shadow-floating transition-smooth ${
                      selectedSubject === subject.id ? 'ring-2 ring-primary ring-offset-2' : ''
                    }`}
                    onClick={() => setSelectedSubject(subject.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 bg-${subject.color} rounded-lg flex items-center justify-center`}>
                          <subject.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{subject.name}</h3>
                          <p className="text-sm text-muted-foreground">{subject.progress}% Complete</p>
                        </div>
                      </div>
                      <Progress value={subject.progress} className="mb-2" />
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">XP: {subject.xpEarned}</span>
                        <Badge variant="outline" className="text-xs">
                          Next: {subject.nextLesson}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Current Subject Lessons */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <currentSubject.icon className="h-6 w-6 text-primary" />
                  <span>{currentSubject.name} Lessons</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentSubject.lessons.map((lesson, index) => (
                    <div 
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-lg border transition-smooth hover:shadow-sm ${
                        lesson.completed 
                          ? 'bg-success/10 border-success/20' 
                          : 'bg-card hover:bg-muted/30 cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          lesson.completed 
                            ? 'bg-success text-white' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          {lesson.completed ? (
                            <Trophy className="h-5 w-5" />
                          ) : (
                            <Play className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium">{lesson.name}</h4>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Zap className="h-3 w-3" />
                            <span>{lesson.xp} XP</span>
                            {lesson.completed && (
                              <>
                                <span>•</span>
                                <span className="text-success">Completed</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      {!lesson.completed && (
                        <Button size="sm" className="flex items-center space-x-2">
                          <Play className="h-4 w-4" />
                          <span>Start</span>
                        </Button>
                      )}
                      {lesson.completed && (
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-warning" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.id}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-smooth ${
                        achievement.earned 
                          ? 'bg-gradient-card badge-glow' 
                          : 'bg-muted/30 opacity-60'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        achievement.earned 
                          ? achievement.rarity === 'gold' 
                            ? 'bg-warning' 
                            : achievement.rarity === 'silver' 
                            ? 'bg-muted' 
                            : 'bg-secondary'
                          : 'bg-muted'
                      }`}>
                        <achievement.icon className={`h-5 w-5 ${
                          achievement.earned ? 'text-white' : 'text-muted-foreground'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{achievement.name}</h4>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                      {achievement.earned && (
                        <Trophy className="h-4 w-4 text-warning" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Daily Challenge */}
            <Card className="shadow-card bg-gradient-secondary text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Daily Challenge</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Solve 3 Math Problems</h4>
                    <Progress value={66} className="bg-white/20" />
                    <p className="text-sm text-white/80 mt-2">2/3 completed • 150 XP reward</p>
                  </div>
                  <Button variant="secondary" className="w-full bg-white text-secondary hover:bg-white/90">
                    <Play className="mr-2 h-4 w-4" />
                    Continue Challenge
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-sm">This Week</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Time Spent</span>
                  <span className="font-medium">4h 30m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Problems Solved</span>
                  <span className="font-medium">42</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">XP Gained</span>
                  <span className="font-medium text-primary">850</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;