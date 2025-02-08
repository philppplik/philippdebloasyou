
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] animate-fade-in">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">Welcome to philippdebloasyou</h1>
        <p className="text-lg text-muted-foreground max-w-[600px] mb-8">
          Your all-in-one Windows optimization and customization toolkit
        </p>
        <div className="flex gap-4">
          <Button onClick={() => navigate("/software")} className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
          <Button onClick={() => navigate("/about")} variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
