import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, Users, BarChart3, Globe, Github } from "lucide-react";

interface NavigationProps {
  currentView: "landing" | "student" | "teacher";
  onNavigate: (view: "landing" | "student" | "teacher") => void;
}

const Navigation = ({ currentView, onNavigate }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "landing", label: "Home", icon: BookOpen },
    { id: "student", label: "Student Portal", icon: Users },
    { id: "teacher", label: "Teacher Dashboard", icon: BarChart3 },
  ];

  return (
    <nav className="bg-card shadow-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient-primary">EduQuest</h1>
              <p className="text-xs text-muted-foreground">Odisha Rural Learning</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentView === item.id ? "default" : "ghost"}
                onClick={() => onNavigate(item.id as any)}
                className="flex items-center space-x-2 transition-smooth"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Button>
            ))}
            <Button variant="secondary" className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>English</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center space-x-2"
              onClick={() => window.open('https://github.com/government-odisha/eduquest', '_blank')}
            >
              <Github className="h-4 w-4" />
              <span className="hidden lg:inline">GitHub</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentView === item.id ? "default" : "ghost"}
                  onClick={() => {
                    onNavigate(item.id as any);
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-2 justify-start"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Button>
              ))}
              <Button variant="secondary" className="flex items-center space-x-2 justify-start">
                <Globe className="h-4 w-4" />
                <span>Language: English</span>
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center space-x-2 justify-start"
                onClick={() => window.open('https://github.com/government-odisha/eduquest', '_blank')}
              >
                <Github className="h-4 w-4" />
                <span>View on GitHub</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;