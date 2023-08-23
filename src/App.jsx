import './index.css';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="bg-[#2e323e] h-screen flex items-center justify-around p-24">
            <div className="w-[40%] h-full flex flex-col justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-[#ececee]">
                        Mantenimiento de Hardware de una Laptop
                    </h1>
                    <p className="mt-3 text-lg text-[#adb0b7] leading-[36px]">
                        En el vertiginoso mundo de la tecnología, nuestras
                        laptops se han convertido en compañeras indispensables,
                        facilitando nuestras vidas tanto en el trabajo como en
                        el entretenimiento. Sin embargo, en medio de esta
                        creciente dependencia, a menudo pasamos por alto la
                        importancia fundamental de mantener estas valiosas
                        herramientas en óptimas condiciones. Es por eso que te
                        damos la bienvenida a nuestra exhaustiva Guía de
                        Mantenimiento de Hardware para Laptops, donde te
                        sumergirás en el arte y la ciencia de mantener tu laptop
                        funcionando como el día que la sacaste de la caja.
                    </p>
                </div>
            </div>

            <div className="w-[50%] h-full flex flex-col items-center justify-center">

                <div className='flex h-[33%] w-full justify-around'>
                    <Link to='/cargador' className="bg-[#2c303b] flex items-center justify-center h-[100%] w-[30%] rounded-[5px] border border-[#5b5b61] transition-all duration-300 cursor-pointer bg-[url('/parts/charger.webp')] bg-contain hover:scale-[1.03] bg-no-repeat bg-[20px]">
                        <div className="bg-[#292d37] w-full h-full relative flex items-center rounded-[5px] justify-center transition-all duration-300 text-3xl font-bold text-[#ececee] opacity-0 hover:opacity-100">
                            Cargador
                        </div>
                    </Link>

                    <Link to='/disco-duro' className="bg-[#2c303b] flex items-center justify-center h-[100%] w-[30%] rounded-[5px] border border-[#5b5b61] transition-all duration-300 cursor-pointer bg-[url('/parts/HDD.webp')] bg-contain hover:scale-[1.03] bg-no-repeat">
                        <div className="bg-[#292d37] w-full h-full relative flex items-center rounded-[5px] justify-center transition-all duration-300 text-3xl font-bold text-[#ececee] opacity-0 hover:opacity-100">
                            Disco Duro
                        </div>
                    </Link>
                    <Link to='/memoria-ram' className="bg-[#2c303b] flex items-center justify-center h-[100%] w-[30%] rounded-[5px] border border-[#5b5b61] transition-all duration-300 cursor-pointer bg-[url('/parts/ram.jpg')] bg-contain hover:scale-[1.03] bg-no-repeat">
                        
                        <div className="bg-[#292d37] w-full h-full relative flex items-center rounded-[5px] justify-center transition-all duration-300 text-3xl font-bold text-[#ececee] opacity-0 hover:opacity-100">
                            RAM
                        </div>
                    </Link>
                </div>

                <div className='flex h-[33%] w-full justify-around my-8'>

                    <Link to='/bateria' className="bg-[#2c303b] flex items-center justify-center h-[100%] w-[30%] rounded-[5px] border border-[#5b5b61] transition-all duration-300 cursor-pointer bg-[url('/parts/battery.png')] bg-[6px] bg-contain hover:scale-[1.03] bg-no-repeat">

                        <div className="bg-[#292d37] w-full h-full relative flex items-center rounded-[5px] justify-center transition-all duration-300 text-3xl font-bold text-[#ececee] opacity-0 hover:opacity-100">
                            Bateria
                        </div>
                    </Link>
                    <Link to='/inverter' className="bg-[#2c303b] flex items-center justify-center h-[100%] w-[30%] rounded-[5px] border border-[#5b5b61] transition-all duration-300 cursor-pointer bg-[url('/parts/inverter.png')] bg-contain hover:scale-[1.03] bg-no-repeat">
                        <div className="bg-[#292d37] w-full h-full relative flex items-center rounded-[5px] justify-center transition-all duration-300 text-3xl font-bold text-[#ececee] opacity-0 hover:opacity-100">
                            Inverter
                        </div>
                    </Link>
                    <Link to='/display' className="bg-[#2c303b] flex items-center justify-center h-[100%] w-[30%] rounded-[5px] border border-[#5b5b61] transition-all duration-300 cursor-pointer bg-[url('/parts/display.png')] bg-contain hover:scale-[1.03] bg-no-repeat">
                        <div className="bg-[#292d37] w-full h-full relative flex items-center rounded-[5px] justify-center transition-all duration-300 text-3xl font-bold text-[#ececee] opacity-0 hover:opacity-100">
                            Display
                        </div>
                    </Link>
                </div>

                <div className='flex h-[33%] w-full justify-around'>
                    <Link to='/disipador' className="bg-[#2c303b] flex items-center justify-center h-[100%] w-[30%] rounded-[5px] border border-[#5b5b61] transition-all duration-300 cursor-pointer bg-[url('/parts/disipador.png')] bg-[25px] bg-no-repeat hover:scale-[1.03] bg-contain">
                        <div className="bg-[#292d37] w-full h-full relative flex items-center rounded-[5px] justify-center transition-all duration-300 text-3xl font-bold text-[#ececee] opacity-0 hover:opacity-100 bg-no-repeat">
                            Disipador
                        </div>
                    </Link>
                    <Link to='/fan' className="bg-[#2c303b] flex items-center justify-center h-[100%] w-[30%] rounded-[5px] border border-[#5b5b61] transition-all duration-300 cursor-pointer bg-[url('/parts/fan.png')] bg-scale bg-no-repeat bg-[1px] hover:scale-[1.03] bg-contain">
                        <div className="bg-[#292d37] w-full h-full relative flex items-center rounded-[5px] justify-center transition-all duration-300 text-3xl font-bold text-[#ececee] opacity-0 hover:opacity-100 bg-no-repeat">
                            Fan
                        </div>
                    </Link>
                    <Link to='/mainboard' className="bg-[#2c303b] flex items-center justify-center h-[100%] w-[30%] rounded-[5px] border border-[#5b5b61] transition-all duration-300 cursor-pointer bg-[url('/parts/mobo.png')] bg-[12px] bg-no-repeat hover:scale-[1.03] bg-contain">
                        <div className="bg-[#292d37] w-full h-full relative flex items-center rounded-[5px] justify-center transition-all duration-300 text-3xl font-bold text-[#ececee] opacity-0 hover:opacity-100">
                            Mainboard
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default App;
