"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  const handleNavigate = () => {
    router.push('/dashboard');
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the App!</h1>
      <UserButton />
      <Button onClick={handleNavigate}>Go to Dashboard</Button>
    </div>
  );
}
