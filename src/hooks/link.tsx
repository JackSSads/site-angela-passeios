import { useNavigate } from "react-router-dom";

const LinkClick = ({ to, label, className, children, onClick }: { to?: string; label?: string; className?: string; children?: React.ReactNode; onClick?: () => void }) => {
    const navigate = useNavigate();

    const handleClick = (path: string) => {
        if (!path) return;

        navigate(path);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleOnClick = () => {
        if (onClick) onClick();
    };

    return (
        <button
            className={className}
            onClick={() => { handleClick(to); handleOnClick(); }}>
            {children || label}
        </button>
    );
};

export { LinkClick };