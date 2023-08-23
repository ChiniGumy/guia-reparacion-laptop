import Return from "../components/Return";

function Battery() {
    return (
        <div className="bg-[#2e323e] flex p-24">
            <div className="flex flex-col w-[50%]">
                <div>
                    <div>
                        <div className="flex items-center">
                            {<Return />}
                            <h1 className="mb-2 ml-4 text-4xl font-bold text-[#ececee]">
                                Bateria
                            </h1>
                        </div>
                        <p className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            El disco duro es la unidad de almacenamiento
                            principal de tu laptop, donde se guardan los datos,
                            archivos y programas. Es vital para el
                            funcionamiento y el acceso rápido a la información.
                        </p>
                    </div>
                    <p className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                        La batería proporciona energía para el funcionamiento
                        portátil de tu laptop, permitiéndote usarla sin estar
                        conectado a una fuente de alimentación.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Posibles problemas y causas
                    </h2>
                    <p className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                        Las baterías pueden degradarse con el tiempo debido a la
                        recarga constante, altas temperaturas o ciclos de carga
                        completos. Problemas como una duración reducida de la
                        batería o una carga inconsistente pueden ser signos de
                        una batería en mal estado.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Precacuiones
                    </h2>
                    <ul className="list-disc">
                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Evita dejar la laptop conectada al cargador
                            continuamente, ya que esto puede acortar la vida
                            útil de la batería al mantenerla siempre a plena
                            carga.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Almacena la batería en un lugar fresco y seco si
                            planeas almacenar la laptop por un período
                            prolongado.
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Pasos de Mantenimiento
                    </h2>
                    <ul className="list-disc">
                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Realiza ciclos completos de carga y descarga
                            ocasionalmente para calibrar la batería y mantenerla
                            en buen estado.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Si notas una disminución significativa en la
                            capacidad de la batería, considera reemplazarla con
                            una batería nueva y compatible.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Limpia los contactos de la batería con un paño suave
                            y seco para asegurar una conexión óptima con la
                            laptop.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col w-[50%] items-end mt-16 ">
                <iframe
                    className="rounded-[5px]"
                    width="660"
                    height="415"
                    src="https://www.youtube.com/embed/7JPUKX1FyH8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}

export default Battery;
