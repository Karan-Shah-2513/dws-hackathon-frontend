import { Button } from "@/components/ui/button";
import Link from "next/link";

// type OnboardingCompleteProps = {
//   formData: {
//     personalDetails: {
//       name: string
//       email: string
//       phone: string
//       age: string
//       country: string
//       occupation: string
//       bio: string
//     }
//   }
// }

export default function OnboardingComplete({ formData }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">
        Welcome aboard, {formData.personalDetails.name}!
      </h2>
      <p className="mb-6">
        Your account has been successfully set up. Here's a summary of your
        information:
      </p>
      <div className="text-left mb-6">
        <h3 className="font-semibold mb-2">Personal Details:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Email: {formData.personalDetails.email}</li>
          <li>Phone: {formData.personalDetails.phone}</li>
          <li>Age: {formData.personalDetails.age}</li>
          <li>Country: {formData.personalDetails.country}</li>
          <li>Occupation: {formData.personalDetails.occupation}</li>
        </ul>
        <h3 className="font-semibold mt-4 mb-2">Bio:</h3>
        <p className="italic">{formData.personalDetails.bio}</p>
      </div>
      <p className="mb-6">
        You're all set to start your investment journey with Beta Investors!
      </p>
      <Link href="/dashboard">
        <Button>Go to Dashboard</Button>
      </Link>
    </div>
  );
}
