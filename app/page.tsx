import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { LockIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md flex items-center justify-center gap-3">
          <LockIcon className="w-12 h-12 relative top-[3px]" />
          Auth
        </h1>
        <p className="text-white text-lg">
          A simple authentication service
        </p>
        <div>
          <LoginButton  asChild>
            <Button variant="secondary" size="lg">Sign in</Button>
          </LoginButton>
        </div>
      </div>

    </main>
  );
}
