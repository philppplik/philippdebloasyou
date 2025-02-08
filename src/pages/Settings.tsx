
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Settings = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Application Settings</CardTitle>
            <CardDescription>Configure philippdebloasyou</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Implementation will come in the next iteration */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
