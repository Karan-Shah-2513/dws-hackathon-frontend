"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BookOpen,
  Video,
  FileText,
  Award,
  Clock,
  BarChart,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function LearningInfoPage({ params }) {
  const router = useRouter();
  const [progress, setProgress] = useState(30);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold">{params.title}</h1>
          <p className="text-muted-foreground mt-2">
            Learn the basics of stock market investing and build a strong
            foundation
          </p>
        </div>
        <Badge variant="secondary" className="text-lg py-1 px-3">
          Beginner
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Course Content</CardTitle>
            <CardDescription>
              4 modules • 12 lessons • 3 hours total
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="modules" className="w-full">
              <TabsList>
                <TabsTrigger value="modules">Modules</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>
              <TabsContent value="modules">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      1. Understanding the Stock Market
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Video className="mr-2 h-4 w-4" />
                          <span>What is a stock?</span>
                        </li>
                        <li className="flex items-center">
                          <Video className="mr-2 h-4 w-4" />
                          <span>How does the stock market work?</span>
                        </li>
                        <li className="flex items-center">
                          <FileText className="mr-2 h-4 w-4" />
                          <span>Key terms and concepts</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>2. Fundamental Analysis</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Video className="mr-2 h-4 w-4" />
                          <span>Reading financial statements</span>
                        </li>
                        <li className="flex items-center">
                          <Video className="mr-2 h-4 w-4" />
                          <span>Key financial ratios</span>
                        </li>
                        <li className="flex items-center">
                          <FileText className="mr-2 h-4 w-4" />
                          <span>Company valuation methods</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>3. Technical Analysis</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Video className="mr-2 h-4 w-4" />
                          <span>Chart patterns and indicators</span>
                        </li>
                        <li className="flex items-center">
                          <Video className="mr-2 h-4 w-4" />
                          <span>Trend analysis</span>
                        </li>
                        <li className="flex items-center">
                          <FileText className="mr-2 h-4 w-4" />
                          <span>Technical indicators in practice</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      4. Building Your Portfolio
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Video className="mr-2 h-4 w-4" />
                          <span>Diversification strategies</span>
                        </li>
                        <li className="flex items-center">
                          <Video className="mr-2 h-4 w-4" />
                          <span>Risk management techniques</span>
                        </li>
                        <li className="flex items-center">
                          <FileText className="mr-2 h-4 w-4" />
                          <span>Creating your investment plan</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              <TabsContent value="resources">
                <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <BookOpen className="mr-2 h-4 w-4" />
                      <span>
                        Beginner's Guide to Stock Market Investing (PDF)
                      </span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Glossary of Stock Market Terms</span>
                    </li>
                    <li className="flex items-center">
                      <Video className="mr-2 h-4 w-4" />
                      <span>Video: How to Read a Stock Chart</span>
                    </li>
                    <li className="flex items-center">
                      <BarChart className="mr-2 h-4 w-4" />
                      <span>Interactive Stock Market Simulator</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Case Study: Analyzing a Real Company</span>
                    </li>
                  </ul>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Continue Learning</Button>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold mb-2">{progress}%</div>
                <Progress value={progress} className="w-full" />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setProgress(Math.min(progress + 10, 100))}
              >
                Mark Next Lesson Complete
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course Details</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>3 hours of content</span>
                </li>
                <li className="flex items-center">
                  <BookOpen className="mr-2 h-4 w-4" />
                  <span>12 lessons</span>
                </li>
                <li className="flex items-center">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>5 quizzes</span>
                </li>
                <li className="flex items-center">
                  <Award className="mr-2 h-4 w-4" />
                  <span>Certificate of completion</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Instructor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Instructor" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">Jane Doe</h3>
                  <p className="text-sm text-muted-foreground">
                    Financial Analyst & Educator
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm">
                Jane has over 15 years of experience in the stock market and has
                been teaching investing for the past 5 years.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
