/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bZJKjvULCK7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import SearchWidget from "@/widgets/gen-ai-search/SearchWidget";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="py-6 px-4 md:px-6 border-b">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <BarChartIcon className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Beta Investors</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <SearchWidget />
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <div className="flex flex-1">
        <div className="bg-muted border-r p-4 md:p-6 hidden md:block">
          <nav className="flex flex-col gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Investments
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Transactions
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Reports
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Settings
            </Link>
            <div className="border-t pt-4">
              <Link
                href="#"
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                Learning
              </Link>
            </div>
            <div className="border-t pt-4">
              <Link
                href="quiz"
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                Quiz
              </Link>
            </div>
          </nav>
        </div>
        <main className="flex-1 py-12 px-4 md:px-6">
          <div className="container mx-auto grid md:grid-cols-2 gap-8">
            <section>
              <h1 className="text-3xl font-bold mb-4">
                Assess Your Risk Tolerance
              </h1>
              <p className="text-muted-foreground mb-8">
                Answer a few questions to understand your investment risk
                profile and get personalized recommendations.
              </p>
              <Button className="mb-8">Get Started</Button>
              <div className="bg-muted rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">How it Works</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                    Answer a series of questions about your financial goals and
                    risk preferences
                  </li>
                  <li>
                    <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                    Receive your personalized risk tolerance level
                  </li>
                  <li>
                    <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                    Get investment recommendations tailored to your profile
                  </li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Risk Questionnaire</h2>
              <div className="bg-muted rounded-lg p-6">
                <div className="mb-6">
                  <Label htmlFor="goal">What are your financial goals?</Label>
                  <Select id="goal" defaultValue="retirement">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retirement">Retirement</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="homeownership">
                        Homeownership
                      </SelectItem>
                      <SelectItem value="growth">Growth</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mb-6">
                  <Label htmlFor="horizon">
                    What is your investment horizon?
                  </Label>
                  <Select id="horizon" defaultValue="long-term">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a horizon" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short-term">
                        Short-term (1-3 years)
                      </SelectItem>
                      <SelectItem value="medium-term">
                        Medium-term (3-7 years)
                      </SelectItem>
                      <SelectItem value="long-term">
                        Long-term (7+ years)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mb-6">
                  <Label htmlFor="risk">What is your risk tolerance?</Label>
                  <RadioGroup aria-label="risk-tolerance">
                    <div className="flex items-center gap-4">
                      <RadioGroupItem
                        value="conservative"
                        id="conservative"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="conservative"
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <div className="w-5 h-5 rounded-full border border-muted-foreground flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
                          <div className="w-3 h-3 rounded-full bg-background" />
                        </div>
                        <span>Conservative</span>
                      </Label>
                      <RadioGroupItem
                        value="moderate"
                        id="moderate"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="moderate"
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <div className="w-5 h-5 rounded-full border border-muted-foreground flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
                          <div className="w-3 h-3 rounded-full bg-background" />
                        </div>
                        <span>Moderate</span>
                      </Label>
                      <RadioGroupItem
                        value="aggressive"
                        id="aggressive"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="aggressive"
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <div className="w-5 h-5 rounded-full border border-muted-foreground flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
                          <div className="w-3 h-3 rounded-full bg-background" />
                        </div>
                        <span>Aggressive</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button>Submit</Button>
              </div>
            </section>
          </div>
          <div className="container mx-auto mt-12">
            <h2 className="text-2xl font-bold mb-4">Your Risk Profile</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Risk Tolerance</h3>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary" />
                  <span className="text-lg font-bold">Moderate</span>
                </div>
                <p className="text-muted-foreground mt-2">
                  Based on your responses, your risk tolerance is considered
                  moderate. This means you are willing to take on a moderate
                  amount of risk in exchange for potentially higher returns.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">
                  Recommended Investments
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                    Balanced mutual funds
                  </li>
                  <li>
                    <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                    Index funds
                  </li>
                  <li>
                    <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                    Dividend-paying stocks
                  </li>
                  <li>
                    <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                    Real estate investment trusts (REITs)
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Your Risk Profile</h3>
              <BarChart className="w-full aspect-[4/3]" />
            </div>
          </div>
        </main>
      </div>
      <footer className="py-6 px-4 md:px-6 border-t">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Beta Investors. All rights reserved.
          </p>
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Disclaimer
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
