import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Trophy,
  BarChart,
  PieChart,
  Wallet,
  Clock,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const quizCategories = [
  {
    name: "Investing Basics",
    icon: <BarChart className="w-4 h-4" />,
    description: "Test your knowledge on fundamental investing concepts",
    questions: [
      {
        question: "What is diversification in investing?",
        options: [
          "Investing all your money in one stock",
          "Spreading investments across various assets to reduce risk",
          "Only investing in real estate",
          "Keeping all your money in cash",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does 'bull market' refer to?",
        options: [
          "A market where prices are falling",
          "A market where prices are rising",
          "A market with no price changes",
          "A market only for agricultural products",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a stock?",
        options: [
          "A loan given to a company",
          "A type of cryptocurrency",
          "Ownership in a company",
          "A government bond",
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    name: "Personal Finance",
    icon: <Wallet className="w-4 h-4" />,
    description: "Challenge yourself on personal finance management",
    questions: [
      {
        question: "What is compound interest?",
        options: [
          "Interest calculated on the initial principal only",
          "Interest calculated on the initial principal and accumulated interest",
          "A type of bank account",
          "A government bond",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a credit score?",
        options: [
          "Your bank account balance",
          "The amount of credit card debt you have",
          "A numerical expression of your creditworthiness",
          "The interest rate on your mortgage",
        ],
        correctAnswer: 2,
      },
      {
        question: "What is a 401(k)?",
        options: [
          "A type of car loan",
          "A retirement savings plan sponsored by an employer",
          "A government stimulus check",
          "A type of health insurance",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    name: "Market Analysis",
    icon: <PieChart className="w-4 h-4" />,
    description: "Evaluate your skills in analyzing market trends",
    questions: [
      {
        question: "What is market capitalization?",
        options: [
          "The total number of shares a company has issued",
          "The price of a single share",
          "The total value of a company's outstanding shares",
          "The company's annual revenue",
        ],
        correctAnswer: 2,
      },
      {
        question: "What does P/E ratio stand for?",
        options: [
          "Profit/Earnings ratio",
          "Price/Earnings ratio",
          "Potential/Existing ratio",
          "Performance/Efficiency ratio",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a bear market?",
        options: [
          "A market where prices are rising",
          "A market where prices are falling",
          "A market for trading animal products",
          "A market with high volatility",
        ],
        correctAnswer: 1,
      },
    ],
  },
];

export default function QuizPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    let timer;
    if (quizStarted && timeLeft > 0 && !showResults) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && !showResults) {
      handleQuizEnd();
    }
    return () => clearTimeout(timer);
  }, [quizStarted, timeLeft, showResults]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    resetQuiz();
    setQuizStarted(true);
  };

  const handleAnswer = () => {
    if (
      selectedAnswer ===
      selectedCategory.questions[currentQuestion].correctAnswer
    ) {
      setScore(score + 1);
      toast({
        title: "Correct!",
        description: "Great job! You've answered correctly.",
        duration: 1500,
      });
    } else {
      toast({
        title: "Incorrect",
        description: "Don't worry, keep learning!",
        duration: 1500,
      });
    }

    if (currentQuestion < selectedCategory.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      handleQuizEnd();
    }
  };

  const handleQuizEnd = () => {
    setShowResults(true);
    setQuizStarted(false);
    // Here you would typically send the score to your backend
    console.log("Quiz ended. Score:", score);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
    setTimeLeft(60);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Financial Literacy Quizzes</h1>
      <Tabs defaultValue="categories" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="categories">Quiz Categories</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        </TabsList>
        <TabsContent value="categories">
          {!selectedCategory ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {quizCategories.map((category, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {category.icon}
                      {category.name}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      {category.questions.length} questions
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      onClick={() => handleCategorySelect(category)}
                    >
                      Start Quiz
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="w-full max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  {selectedCategory.icon}
                  {selectedCategory.name} Quiz
                </CardTitle>
                <CardDescription>
                  {selectedCategory.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!showResults ? (
                  <>
                    <div className="flex justify-between items-center mb-4">
                      <Progress
                        value={
                          ((currentQuestion + 1) /
                            selectedCategory.questions.length) *
                          100
                        }
                        className="w-2/3"
                      />
                      <Badge variant="outline" className="ml-2">
                        <Clock className="w-4 h-4 mr-1" />
                        {formatTime(timeLeft)}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {selectedCategory.questions[currentQuestion].question}
                    </h3>
                    <RadioGroup
                      onValueChange={(value) =>
                        setSelectedAnswer(parseInt(value))
                      }
                    >
                      {selectedCategory.questions[currentQuestion].options.map(
                        (option, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2 mb-2"
                          >
                            <RadioGroupItem
                              value={index.toString()}
                              id={`option-${index}`}
                            />
                            <Label htmlFor={`option-${index}`}>{option}</Label>
                          </div>
                        )
                      )}
                    </RadioGroup>
                  </>
                ) : (
                  <div className="text-center">
                    <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
                    <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
                    <p className="text-lg mb-2">
                      Your score: {score} out of{" "}
                      {selectedCategory.questions.length}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Great job! Keep learning to improve your financial
                      literacy.
                    </p>
                    <Badge variant="outline" className="text-lg py-1 px-4">
                      {Math.round(
                        (score / selectedCategory.questions.length) * 100
                      )}
                      % Correct
                    </Badge>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                {!showResults ? (
                  <Button
                    onClick={handleAnswer}
                    disabled={selectedAnswer === null}
                    className="w-full"
                  >
                    {currentQuestion === selectedCategory.questions.length - 1
                      ? "Finish Quiz"
                      : "Next Question"}
                  </Button>
                ) : (
                  <div className="w-full space-y-2">
                    <Button onClick={resetQuiz} className="w-full">
                      Retake Quiz
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedCategory(null)}
                      className="w-full"
                    >
                      Back to Categories
                    </Button>
                  </div>
                )}
              </CardFooter>
            </Card>
          )}
        </TabsContent>
        <TabsContent value="leaderboard">
          <Card>
            <CardHeader>
              <CardTitle>Top Performers</CardTitle>
              <CardDescription>
                See how you stack up against other quiz takers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] w-full rounded-md border">
                <div className="p-4">
                  {[
                    { name: "Alex Johnson", score: 280, quizzes: 10 },
                    { name: "Sam Smith", score: 265, quizzes: 9 },
                    { name: "Jordan Lee", score: 250, quizzes: 8 },
                    { name: "Casey Brown", score: 240, quizzes: 8 },
                    { name: "Taylor Wong", score: 235, quizzes: 7 },
                  ].map((user, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2"
                    >
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{index + 1}</Badge>
                        <span className="font-medium">{user.name}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {user.score} pts ({user.quizzes} quizzes)
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
