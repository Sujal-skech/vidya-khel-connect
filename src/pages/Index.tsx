import { useState } from "react";
import Navigation from "@/components/Navigation";
import LandingPage from "@/components/LandingPage";
import StudentDashboard from "@/components/StudentDashboard";
import TeacherDashboard from "@/components/TeacherDashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState<"landing" | "student" | "teacher">("landing");

  const renderCurrentView = () => {
    switch (currentView) {
      case "student":
        return <StudentDashboard />;
      case "teacher":
        return <TeacherDashboard />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentView={currentView} onNavigate={setCurrentView} />
      {renderCurrentView()}
    </div>
  );
};

export default Index;
