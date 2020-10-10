import React from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../Header/LanguageToggle";

const SignInHeader = () => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-between items-center py-4 bg-blue-900">
            <span
                className="ml-56 text-4xl text-blue-200 font-extrabold hover:text-red-500"
            >
                Favorite Movies
            </span>


                <LanguageToggle />

        </div>
    );
};

export default SignInHeader;
