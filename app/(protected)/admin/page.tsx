"use client"
import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const AdminPage = () => {
    // if we want this to be a server compo we can use currentRole lib we created. 
    // if we want to get user details in client compo we can use useCurrentRole present in hooks folder;

    const onServerActionClick = () => {
        admin()
            .then((data) => {
                if (data.error) {
                    toast.error(data.error)
                }
                if (data.success) {
                    toast.success(data.success)
                }
            })
    }

    const onApiRouteClick = () => {
        fetch("/api/admin")
            .then((response) => {
                if (response.ok) {
                    toast.success("Allowed API Route!")

                } else {
                    toast.error("Forbidden API Route!")
                }
            })
    }

    return (
        <Card className="w-[500px] md:w-[700px]">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">🗝️Admin</p>
            </CardHeader>
            <CardContent className="space-y-4">
                <RoleGate allowedRole={UserRole.ADMIN}>
                    <FormSuccess message="You are allowed see this content" />
                </RoleGate>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                    <p>Admin-only API Route</p>
                    <Button
                        onClick={onApiRouteClick}
                    >
                        Click to test
                    </Button>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                    <p>Admin-only Server Action</p>
                    <Button
                    onClick={onServerActionClick}
                    >
                        Click to test
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default AdminPage;