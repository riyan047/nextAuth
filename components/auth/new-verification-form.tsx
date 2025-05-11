"use client"
import { useSearchParams } from "next/navigation";
import { CardWrapper } from "./card-wrapper";
import { BeatLoader } from "react-spinners";
import { useCallback, useEffect, useState } from "react";
import { newVerfication } from "@/actions/new-verification";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";


export const NewVerificationForm = () => {

    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()

    const onSubmit = useCallback(() => {
        if (success || error) {
            return;
        }
        if (!token) {
            setError("missing token");
            return;
        }
        newVerfication(token).then((data) => {
            setSuccess(data.success)
            setError(data.error)
        })
            .catch(() => {
                setError("something went wrong!")
            })
    }, [token, success, error]);

    useEffect(() => {
        onSubmit()
    }, [])
    return (
        <CardWrapper
            headerLabel="Confirming your verification"
            backButtonHref="/auth/login"
            backButtonLabel="Proceed to login"
        >
            <div className="flex flex-col gap-2 items-center w-full justify-center">
                {!success && !error && (
                    <BeatLoader />
                )}
                <FormSuccess message={success} />
                {!success && (
                    <FormError message={error} />
                )}
            </div>
        </CardWrapper>

    )
}