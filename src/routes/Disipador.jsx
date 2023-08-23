import Return from "../components/Return";

function Disipador() {
    return (
        <div className="bg-[#2e323e] flex p-24">
            <div className="flex flex-col w-[50%]">
                <div>
                    <div>
                        <div className="flex items-center">
                            {<Return />}
                            <h1 className="mb-2 ml-4 text-4xl font-bold text-[#ececee]">
                                Disipador
                            </h1>
                        </div>
                    </div>
                    <p className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                        El disipador de calor es una parte esencial de tu laptop
                        que se encarga de mantener las temperaturas internas
                        bajo control. Funciona absorbiendo el calor generado por
                        componentes como el procesador y disipándolo al aire
                        circundante para evitar el sobrecalentamiento.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Posibles problemas y causas
                    </h2>
                    <p className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                        La acumulación de polvo y pelusa en los aletines del
                        disipador puede obstruir el flujo de aire, reduciendo su
                        capacidad de enfriamiento y llevando a temperaturas más
                        altas. Esto puede provocar ralentizaciones, apagones
                        inesperados y, en casos extremos, daño permanente a los
                        componentes.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Precacuiones
                    </h2>
                    <ul className="list-disc">
                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Antes de manipular el disipador, asegúrate de que la
                            laptop esté apagada y desconectada de cualquier
                            fuente de energía.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Descarga la electricidad estática tocando una
                            superficie metálica antes de tocar cualquier
                            componente interno.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Manipula el disipador con cuidado para evitar daños
                            a las aletas y asegurarte de no doblarlas
                            accidentalmente.
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Pasos de Mantenimiento
                    </h2>
                    <ul className="list-disc">
                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Utiliza aire comprimido para eliminar suavemente el
                            polvo y la suciedad acumulados entre las aletas del
                            disipador.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Si la acumulación de polvo es persistente, considera
                            desmontar el disipador con precaución siguiendo las
                            instrucciones del fabricante.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Limpia tanto las aletas del disipador como las
                            superficies del procesador y la GPU con un paño
                            suave y sin pelusa.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col w-[50%] items-end mt-16 ">
                <iframe
                    className="rounded-[5px]"
                    width="660"
                    height="415"
                    src="https://www.youtube.com/embed/Kt2FZWAOMSY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}

export default Disipador;
