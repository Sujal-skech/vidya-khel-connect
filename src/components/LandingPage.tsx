import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Globe,
  Smartphone,
  WifiOff,
  BarChart3,
  Star,
  Gamepad2,
  Brain,
  Calculator,
  Atom,
  Github,
  Code,
  Heart
} from "lucide-react";

const LandingPage = () => {
  const features = [
    {
      icon: Gamepad2,
      title: "Gamified Learning",
      description: "Interactive games and challenges that make STEM subjects fun and engaging",
      color: "bg-gradient-primary"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Content available in English, Hindi, and Odia for better accessibility",
      color: "bg-gradient-secondary"
    },
    {
      icon: WifiOff,
      title: "Offline Access",
      description: "Download lessons and continue learning even without internet connectivity",
      color: "bg-gradient-success"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Teachers can monitor student progress with detailed analytics",
      color: "bg-gradient-hero"
    }
  ];

  const subjects = [
    {
      icon: Calculator,
      name: "Mathematics",
      lessons: 45,
      color: "primary"
    },
    {
      icon: Atom,
      name: "Science",
      lessons: 38,
      color: "secondary"
    },
    {
      icon: Brain,
      name: "Physics",
      lessons: 32,
      color: "success"
    }
  ];

  const stats = [
    { label: "Active Students", value: "2,500+", icon: Users },
    { label: "Lessons Completed", value: "15,000+", icon: BookOpen },
    { label: "Achievements Earned", value: "8,500+", icon: Trophy },
    { label: "Rural Schools", value: "150+", icon: Smartphone }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <Badge className="bg-white/20 text-white border-white/30">
                Government of Odisha Initiative
              </Badge>
              <Badge className="bg-success/20 text-white border-success/30">
                <Code className="mr-1 h-3 w-3" />
                Open Source
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming Rural Education
              <br />
              <span className="text-secondary-light">Through Gamification</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Empowering students in rural Odisha with interactive STEM learning experiences 
              that work offline and adapt to local languages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-button">
                <Users className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                <BarChart3 className="mr-2 h-5 w-5" />
                Teacher Portal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-card">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">
              Why Choose EduQuest?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built specifically for rural education needs with offline capabilities and local language support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-floating transition-smooth">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              STEM Subjects Available
            </h2>
            <p className="text-xl text-muted-foreground">
              Interactive lessons designed for grades 6-12
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <Card key={index} className="shadow-card hover:shadow-floating transition-smooth cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-${subject.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce`}>
                      <subject.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{subject.name}</CardTitle>
                      <p className="text-muted-foreground">{subject.lessons} Interactive Lessons</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-warning text-warning" />
                      ))}
                    </div>
                    <Badge variant="secondary">Popular</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Open Source & Community Driven</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              EduQuest is open source and built with the community. Contribute to making education accessible for all rural students.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card text-center">
              <CardHeader>
                <Github className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>View Source Code</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Explore the complete source code and understand how EduQuest works under the hood.
                </p>
                <Button variant="outline" onClick={() => window.open('https://github.com/government-odisha/eduquest', '_blank')}>
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Repository
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardHeader>
                <Code className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <CardTitle>Contribute</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Help improve EduQuest by contributing code, content, or reporting issues.
                </p>
                <Button variant="outline" onClick={() => window.open('https://github.com/government-odisha/eduquest/blob/main/CONTRIBUTING.md', '_blank')}>
                  <Heart className="mr-2 h-4 w-4" />
                  Contribute
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-success" />
                <CardTitle>Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Learn how to deploy, customize, and extend EduQuest for your region.
                </p>
                <Button variant="outline" onClick={() => window.open('https://github.com/government-odisha/eduquest/wiki', '_blank')}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read Docs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Learning?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of students and teachers already using EduQuest to make STEM education more engaging and accessible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Student Portal
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Users className="mr-2 h-5 w-5" />
              Teacher Registration
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gradient-primary">EduQuest</span>
              </div>
              <p className="text-muted-foreground mb-4">
                An open source initiative by Government of Odisha to transform rural education through gamified STEM learning.
              </p>
              <div className="flex space-x-4">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => window.open('https://github.com/government-odisha/eduquest', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">API Reference</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Contributing Guide</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Issue Tracker</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">GitHub Discussions</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Contributors</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Roadmap</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">License</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 mt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Government of Odisha. Open source under MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;