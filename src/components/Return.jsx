import { Link } from 'react-router-dom';

function Return() {
    
    return (
        <Link to="/">
            <svg
                className="h-12 w-12 rounded-[100%] transition-all duration-300 hover:scale-[1.1]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#adb0b7"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        </Link>
    );
}

export default Return;