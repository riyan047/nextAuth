"use client"

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/user-current-user";

const ClientPage = () => {

    //FOR CLIENT COMPONENT WE CAN FETCH USER DETAILS FROM useCurrentUser hook
    const user = useCurrentUser();
    return (
        <UserInfo
            user={user}
            label="📱Client component"
        />
    )
}

export default ClientPage;