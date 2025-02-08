
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Customize = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold tracking-tight">Customization</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Theme Settings</CardTitle>
            <CardDescription>Customize Windows appearance</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Implementation will come in the next iteration */}
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Taskbar Settings</CardTitle>
            <CardDescription>Personalize your taskbar</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Implementation will come in the next iteration */}
          </CardContent>
        </Card>
        {/* More cards will be added in the next iteration */}
      </div>
    </div>
  );
};

export default Customize;
