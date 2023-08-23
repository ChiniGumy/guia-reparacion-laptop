import Return from "../components/Return";

function Mobo() {
    return (
        <div className="bg-[#2e323e] flex p-24">
            <div className="flex flex-col w-[50%]">
                <div>
                    <div className="flex items-center">
                        {<Return />}
                        <h1 className="mb-2 ml-4 text-4xl font-bold text-[#ececee]">
                            Motherboard
                        </h1>
                    </div>
                    <p className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                        La mainboard, también conocida como placa madre, es el
                        componente central que conecta y coordina todos los
                        componentes internos de la laptop, permitiendo su
                        funcionamiento.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Posibles problemas y causas
                    </h2>
                    <p className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                        La mainboard puede dañarse debido a fluctuaciones
                        eléctricas, sobrecalentamiento o componentes
                        defectuosos. Problemas como bloqueos frecuentes, errores
                        en el inicio o comportamiento inusual podrían indicar
                        problemas con la mainboard.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Precacuiones
                    </h2>
                    <ul className="list-disc">
                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Antes de manipular la mainboard, descarga la
                            electricidad estática tocando una superficie
                            metálica para evitar daños por electricidad
                            estática.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Sigue las guías de desmontaje y montaje
                            proporcionadas por el fabricante de la laptop para
                            evitar errores.
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Pasos de Mantenimiento
                    </h2>
                    <ul className="list-disc">
                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Si experimentas problemas graves relacionados con el
                            rendimiento, el arranque o el apagado, verifica
                            primero si hay actualizaciones de firmware o
                            controladores disponibles para la mainboard.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Si los problemas persisten y no están relacionados
                            con el software, podría ser necesario consultar a un
                            profesional de soporte técnico para una evaluación
                            más detallada y posibles reparaciones.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col w-[50%] items-end mt-16 ">
                <iframe
                    className="rounded-[5px]"
                    width="660"
                    height="415"
                    src="https://www.youtube.com/embed/f51KpSCRyUA"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}

export default Mobo;
