import Return from "../components/Return";

function Hdd() {
    return (
        <div className="bg-[#2e323e] h-max p-24 flex">
            <div className="flex flex-col w-[50%]">
                <div>
                    <div className="flex items-center">
                        {<Return />}
                        <h1 className="mb-2 ml-4 text-4xl font-bold text-[#ececee]">
                            Disco Duro
                        </h1>
                    </div>
                    <p className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                        El disco duro es la unidad de almacenamiento principal
                        de tu laptop, donde se guardan los datos, archivos y
                        programas. Es vital para el funcionamiento y el acceso
                        rápido a la información.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Posibles problemas y causas
                    </h2>
                    <p className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                        Los discos duros pueden dañarse debido a golpes fuertes,
                        vibraciones constantes, errores de software o desgaste
                        natural a lo largo del tiempo. Problemas como
                        ralentización, errores al acceder a archivos o ruidos
                        inusuales podrían indicar problemas con el disco duro.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Precacuiones
                    </h2>
                    <ul className="list-disc">
                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Realiza copias de seguridad periódicas de tus datos
                            importantes en una ubicación externa, como un disco
                            duro externo o una nube.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Evita movimientos bruscos mientras la laptop esté
                            encendida, especialmente cuando el disco duro esté
                            en uso, ya que esto podría dañar los componentes
                            internos.
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Pasos de Mantenimiento
                    </h2>
                    <ul className="list-disc">
                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Utiliza software de análisis de disco para verificar
                            la salud y el rendimiento del disco duro.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Elimina archivos y programas innecesarios para
                            liberar espacio en el disco y mejorar el rendimiento
                            general.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Si experimentas problemas graves, como errores
                            constantes o ruidos inusuales, considera consultar a
                            un profesional para realizar una evaluación más
                            detallada.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col w-[50%] items-end mt-16">
                <iframe
                    className=" rounded-[5px]"
                    width="660"
                    height="415"
                    src="https://www.youtube.com/embed/KKSWEOhPyEM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>

                <iframe
                    className="mt-12 rounded-[5px]"
                    width="660"
                    height="415"
                    src="https://www.youtube.com/embed/F7udttVqN8w"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}

export default Hdd;