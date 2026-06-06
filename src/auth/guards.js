import {
    getSession
} from "@/utils";

export const authGuard = () => {
    return !!getSession();
};

export const adminGuard = () => {
    return (
        getSession()?.role === "admin"
    );
};