import Return from "../components/Return";

function Inverter() {
    return (
        <div className="bg-[#2e323e] flex p-24">
            <div className="flex flex-col w-[50%]">
                <div>
                    <div>
                        <div className="flex items-center">
                            {<Return />}
                            <h1 className="mb-2 ml-4 text-4xl font-bold text-[#ececee]">
                                Inverter
                            </h1>
                        </div>
                    </div>
                    <p className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                        El inverter es esencial para la retroiluminación de la
                        pantalla. Aquí están las precauciones y pasos de
                        mantenimiento para cuidar de él:
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Posibles problemas y causas
                    </h2>
                    <p className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                        Si la pantalla de tu laptop está oscura, atenuada o
                        parpadea, el inverter podría ser el culpable. Problemas
                        en el inverter pueden ser causados por componentes
                        dañados, fallas eléctricas o desgaste con el tiempo.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Precacuiones
                    </h2>
                    <ul className="list-disc">
                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Antes de manipular componentes internos, asegúrate
                            de que la laptop esté apagada y desconectada de la
                            corriente.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Descarga la electricidad estática tocando una
                            superficie metálica antes de realizar cualquier
                            manipulación.
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Pasos de Mantenimiento
                    </h2>
                    <ul className="list-disc">
                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Si la pantalla muestra problemas de iluminación,
                            ajusta la configuración de brillo y contraste en la
                            laptop.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Si el problema persiste, busca la ayuda de un
                            profesional para una evaluación y posible reemplazo
                            del inverter.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col w-[50%] items-end mt-16">
                <iframe
                    className="rounded-[5px]"
                    width="660"
                    height="415"
                    src="https://www.youtube.com/embed/tzzxekYQ1UA"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}

export default Inverter;
