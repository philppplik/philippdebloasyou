
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold tracking-tight">About philippdebloasyou</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>About the Project</CardTitle>
            <CardDescription>Learn more about philippdebloasyou</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              philippdebloasyou is a powerful Windows optimization and customization toolkit designed to
              help you get the most out of your Windows experience.
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Support Information</CardTitle>
            <CardDescription>Get help and support</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              For support and more information, please visit our documentation or contact our support team.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
