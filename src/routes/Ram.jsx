import Return from "../components/Return";

function Ram() {
    return (
        <div className="bg-[#2e323e] flex p-24">
            <div className="flex flex-col w-[50%]">
                <div>
                    <div>
                        <div className="flex items-center">
                            {<Return />}
                            <h1 className="mb-2 ml-4 text-4xl font-bold text-[#ececee]">
                                Memoria RAM
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
                        La memoria RAM (Memoria de Acceso Aleatorio) almacena
                        temporalmente datos utilizados por el sistema operativo
                        y las aplicaciones en ejecución. Cuanta más RAM tengas,
                        mejor será el rendimiento multitarea de tu laptop.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Posibles problemas y causas
                    </h2>
                    <p className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                        La RAM puede dañarse debido a descargas electrostáticas,
                        errores en la instalación o incompatibilidad con otros
                        componentes. Los problemas de rendimiento, como bloqueos
                        frecuentes o lentitud general, pueden estar relacionados
                        con problemas de RAM.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Precacuiones
                    </h2>
                    <ul className="list-disc">
                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Antes de manipular la RAM, desconecta la laptop y
                            retira la batería (si es posible) para reducir el
                            riesgo de daño por electricidad estática.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Manipula la RAM por los bordes y evita tocar los
                            contactos dorados para evitar daños.
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Pasos de Mantenimiento
                    </h2>
                    <ul className="list-disc">
                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Asegúrate de que la RAM esté correctamente instalada
                            en sus ranuras. Si tienes ranuras vacías, considera
                            agregar más RAM para mejorar el rendimiento.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Si experimentas problemas de rendimiento
                            persistentes, verifica la compatibilidad de la RAM
                            con tu laptop y considera reemplazarla si es
                            necesario.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col w-[50%] items-end mt-16">
                <iframe
                    className="rounded-[5px]"
                    width="660"
                    height="415"
                    src="https://www.youtube.com/embed/RVQSDUshBQs"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}

export default Ram;
