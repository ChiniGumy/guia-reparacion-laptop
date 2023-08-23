import Return from "../components/Return";

function Display() {
    return (
        <div className="bg-[#2e323e] flex p-24">
            <div className="flex flex-col w-[50%]">
                <div>
                    <div className="flex items-center">
                        {<Return />}
                        <h1 className="mb-2 ml-4 text-4xl font-bold text-[#ececee]">
                            Inverter
                        </h1>
                    </div>
                    <p className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                        La pantalla de tu laptop es esencial para la interacción
                        visual con tu dispositivo y el contenido que manejas.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Posibles problemas y causas
                    </h2>
                    <p className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                        Sin embargo, pueden surgir problemas en la pantalla,
                        como píxeles muertos, líneas horizontales o cambios en
                        el color. Estos problemas pueden ser resultado de daños
                        físicos en el panel LCD, defectos de fabricación,
                        interferencias en el cableado interno o incluso
                        problemas de software. Si la pantalla se ha golpeado o
                        sometido a un estrés mecánico, es posible que surjan
                        problemas visuales.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Precacuiones
                    </h2>
                    <ul className="list-disc">
                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Trabaja en un entorno bien iluminado para
                            identificar cualquier problema visual con precisión.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Manipula la pantalla con suavidad para evitar dañar
                            el panel LCD o el vidrio.
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Pasos de Mantenimiento
                    </h2>
                    <ul className="list-disc">
                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Limpia la pantalla regularmente con un paño suave y
                            sin pelusa para evitar la acumulación de polvo y
                            huellas dactilares.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Utiliza soluciones de limpieza específicas para
                            pantallas LCD si es necesario, aplicándolas primero
                            en el paño y luego en la pantalla.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Evita presionar con fuerza sobre la pantalla, ya que
                            esto podría dañar el panel o causar píxeles muertos.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col w-[50%] items-end mt-16 ">
                <iframe
                    className="rounded-[5px]"
                    width="660"
                    height="415"
                    src="https://www.youtube.com/embed/1ouUZ8K3Znk"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}

export default Display;
