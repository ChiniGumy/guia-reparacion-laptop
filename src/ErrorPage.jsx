import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div className=" h-screen flex-col flex items-center justify-center bg-[#2e323e]">

            <h1 className="text-6xl font-bold text-[#ececee]">Oops!</h1>
            <p className="text-xl mt-6 text-[#adb0b7]">Parece que no hay guia para solucionar esto...</p>

            <Link to='/guia-reparacion-laptop/' className="text-[#4d95de] mt-10 text-xl transition-all hover:text-[#67adf3]">
                Volver
            </Link>

        </div>
    );
}

export default ErrorPage;
