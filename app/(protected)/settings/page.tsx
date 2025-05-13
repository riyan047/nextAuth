"use client"

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/user-current-user";

const SettingsPage = () => {

    const user = useCurrentUser()
    const onClick = () => {
        logout();
    }
    return (
        <div className="bg-white p-10 rounded-xl">
            {/* {JSON.stringify(user)} */}
            <button
                onClick={onClick}
            >
                Sign out
            </button>

        </div>
    )
}

export default SettingsPage;