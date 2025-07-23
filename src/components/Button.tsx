import type { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    text: string;
    onClick?: () => void;
    startIcon?: ReactElement;
    wfull?:boolean;
    loading?: boolean;
}

const variantClasses = {
    primary: "bg-purple-600 text-white",
    secondary: "bg-purple-200 text-purple-600",
};

const defaultstyles = "px-4 py-2 rounded-md font-light inline-flex items-center gap-2 ";

export function Button({ variant, text, startIcon, onClick ,wfull, loading}: ButtonProps) {
    return (
        <button
            className={`${variantClasses[variant]} ${defaultstyles} ${wfull ? " w-full flex justify-center items-center " : ""} ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={onClick}
            disabled={loading}
        >
            {startIcon}
            {text}
        </button>
    );
}
