import type { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    text: string;
    onClick?: () => void;
    startIcon?: ReactElement;
}

const variantClasses = {
    primary: "bg-purple-600 text-white",
    secondary: "bg-purple-200 text-purple-600",
};

const defaultstyles = "px-4 py-2 rounded-md font-light inline-flex items-center gap-2 ";

export function Button({ variant, text, startIcon, onClick }: ButtonProps) {
    return (
        <button
            className={`${variantClasses[variant]} ${defaultstyles}`}
            onClick={onClick}
        >
            {startIcon}
            {text}
        </button>
    );
}
