import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Video, PieChart, TrendingUp } from "lucide-react";

export default function Learn() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Financial Learning Hub
        </CardTitle>
        <CardDescription>
          Boost your financial knowledge with our curated content
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basics">Basics</TabsTrigger>
            <TabsTrigger value="investing">Investing</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
            <TabsTrigger value="personal">Personal Finance</TabsTrigger>
          </TabsList>
          <TabsContent value="basics">
            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
              <LearningItem
                icon={<BookOpen className="h-6 w-6" />}
                title="Understanding Money"
                description="Learn the fundamentals of money and its role in the economy."
              />
              <LearningItem
                icon={<Video className="h-6 w-6" />}
                title="Budgeting 101"
                description="Master the art of budgeting with our video tutorial."
              />
              <LearningItem
                icon={<PieChart className="h-6 w-6" />}
                title="Saving Strategies"
                description="Discover effective ways to save money and build your financial cushion."
              />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="investing">
            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
              <LearningItem
                icon={<TrendingUp className="h-6 w-6" />}
                title="Stock Market Basics"
                description="Get started with stock market investing and understand key concepts."
              />
              <LearningItem
                icon={<PieChart className="h-6 w-6" />}
                title="Diversification Strategies"
                description="Learn how to spread your investments to minimize risk."
              />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="crypto">
            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
              <LearningItem
                icon={<BookOpen className="h-6 w-6" />}
                title="Blockchain 101"
                description="Understand the technology behind cryptocurrencies."
              />
              <LearningItem
                icon={<TrendingUp className="h-6 w-6" />}
                title="Crypto Trading Basics"
                description="Learn the fundamentals of trading cryptocurrencies."
              />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="personal">
            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
              <LearningItem
                icon={<PieChart className="h-6 w-6" />}
                title="Debt Management"
                description="Strategies for effectively managing and reducing your debt."
              />
              <LearningItem
                icon={<TrendingUp className="h-6 w-6" />}
                title="Building Credit"
                description="Learn how to build and maintain a good credit score."
              />
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        {/* <Button className="w-full">Explore More Topics</Button> */}
      </CardFooter>
    </Card>
  );
}

function LearningItem({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-4 mb-4">
      <div className="bg-primary/10 p-2 rounded-full">{icon}</div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
