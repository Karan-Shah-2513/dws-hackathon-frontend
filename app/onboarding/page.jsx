"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PersonalDetailsForm from "./PersonalDetailsForm";
import OnboardingComplete from "./OnboardingComplete";

const steps = [
  { title: "Personal Details", description: "Tell us about yourself" },
  { title: "Complete", description: "You're all set!" },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personalDetails: {},
  });

  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep((prev) => prev + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalDetailsForm onNext={handleNext} />;
      case 1:
        return <OnboardingComplete formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Welcome to Beta Investors</CardTitle>
          <CardDescription>Let's get your account set up</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-8 h-8 rounded-full mb-2 mx-auto flex items-center justify-center ${
                      index <= currentStep
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="text-sm font-medium">{step.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {step.description}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute top-4 left-0 w-full">
                <div
                  className={`h-1 bg-primary transition-all duration-300 ease-in-out`}
                  style={{
                    width: `${(currentStep / (steps.length - 1)) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          {renderStep()}
        </CardContent>
      </Card>
    </div>
  );
}
