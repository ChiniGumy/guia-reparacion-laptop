import { Link } from 'react-router-dom';

function Return() {
    return (
        <Link to="/">
            <img
                src="/check.svg"
                className="h-12 w-12 rounded-[100%] transition-all duration-300 hover:scale-[1.1]"
            />
        </Link>
    );
}

export default Return;
