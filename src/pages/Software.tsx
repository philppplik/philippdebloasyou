
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Software = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold tracking-tight">Software & Apps</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Install Software</CardTitle>
            <CardDescription>Install and manage your applications</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Implementation will come in the next iteration */}
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Remove Windows Apps</CardTitle>
            <CardDescription>Uninstall pre-installed Windows applications</CardDescription>
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

export default Software;
