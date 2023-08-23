import Return from "../components/Return";

function Fan() {
    return (
        <div className="bg-[#2e323e] flex p-24">
            <div className="flex flex-col w-[50%]">
                <div>
                    <div className="flex items-center">
                        {<Return />}
                        <h1 className="mb-2 ml-4 text-4xl font-bold text-[#ececee]">
                            Fan
                        </h1>
                    </div>
                    <p className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                        El ventilador es esencial para mantener una temperatura
                        adecuada en tu laptop. Aquí están las precauciones y
                        pasos de mantenimiento para cuidar de él:
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Posibles problemas y causas
                    </h2>
                    <p className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                        El ventilador puede enfrentar problemas como la
                        acumulación de polvo y pelusa en sus aspas, lo que
                        disminuye su eficacia y provoca un flujo de aire
                        insuficiente. Esto puede resultar en un aumento en la
                        temperatura interna, lo que podría ocasionar
                        ralentización, bloqueos y, en casos extremos, daño en
                        los componentes. Además, el ventilador puede dejar de
                        funcionar debido a un fallo en el motor o a conexiones
                        sueltas.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Precacuiones
                    </h2>
                    <ul className="list-disc">
                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Antes de trabajar en el ventilador, asegúrate de que
                            la laptop esté apagada y desconectada de cualquier
                            fuente de energía.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Descarga la electricidad estática tocando una
                            superficie metálica antes de manipular componentes
                            internos.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Manipula las aspas del ventilador con suavidad para
                            evitar dañar su equilibrio y funcionamiento.
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Pasos de Mantenimiento
                    </h2>
                    <ul className="list-disc">
                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Utiliza aire comprimido para eliminar cuidadosamente
                            el polvo y la suciedad de las aspas del ventilador.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Si la acumulación de polvo es extensa, considera
                            desmontar el ventilador con precaución siguiendo las
                            indicaciones del fabricante.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Al volver a ensamblar, asegúrate de que las aspas
                            del ventilador giren libremente y no estén
                            obstruidas.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col w-[50%] items-end mt-16 ">
                <iframe
                    className="rounded-[5px]"
                    width="660"
                    height="415"
                    src="https://www.youtube.com/embed/8xYlndDy-G8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}

export default Fan;
