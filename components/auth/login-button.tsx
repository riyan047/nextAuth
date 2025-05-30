"use client";
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { LoginForm } from "./login-form";

interface LoginButtonProps {
    children: React.ReactNode,
    mode?: "modal" | "redirect",
    asChild?: boolean;
}

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {

    const router = useRouter();

    const onClick = () => {
        console.log("login button clicked");
        router.push("/auth/login")
    }

    if (mode === "modal") {
        return (
            <Dialog>
                <DialogTitle className="hidden"/>
                <DialogTrigger asChild={asChild}>
                    {children}
                </DialogTrigger>
                <DialogContent className="p-0 w-auto bg-transparent border-none">
                    <LoginForm />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <span className="cursor-pointer" onClick={onClick}>
            {children}
        </span>
    );
}

