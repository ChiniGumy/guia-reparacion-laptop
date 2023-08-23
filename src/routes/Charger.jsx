import Return from '../components/Return';
import check1 from '/checking/charger/charger-check.jpg';
import check3 from '/checking/charger/charger-check3.jpg';

function Charger() {
    return (
        <div className="h-fit bg-[#2e323e] flex p-24 ">
            <div className="flex flex-col w-[50%]">
                <div>
                    <div className="flex items-center">
                        {<Return />}
                        <h1 className="mb-2 ml-4 text-4xl font-bold text-[#ececee]">
                            Cargador
                        </h1>
                    </div>

                    <p className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                        El cargador, también conocido como adaptador de
                        corriente, es esencial para mantener tu laptop
                        alimentada y cargada. Este dispositivo transforma la
                        corriente eléctrica de la toma de corriente en un
                        voltaje adecuado para tu laptop. Sin él, tu laptop no
                        podría funcionar de manera autónoma y no podrías cargar
                        su batería.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Posibles problemas y causas
                    </h2>
                    <p className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                        El cargador puede presentar problemas debido a cables
                        enredados, conexiones sueltas o dañadas, voltaje
                        inestable o sobrecalentamiento. Si notas que tu laptop
                        no se carga correctamente o el cargador se calienta en
                        exceso, estos podrían ser signos de problemas con el
                        cargador.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Precacuiones
                    </h2>
                    <ul className="list-disc">
                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Asegúrate de que el enchufe del cargador esté
                            correctamente conectado tanto a la toma de corriente
                            como a la laptop.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Evita enrollar el cable del cargador de manera
                            excesivamente apretada, ya que esto puede dañar los
                            cables internos y reducir la vida útil del cargador.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Utiliza un regulador de voltaje para proteger el
                            cargador y la laptop de variaciones en la corriente
                            eléctrica.
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#9b9bcb]">
                        Pasos de Mantenimiento
                    </h2>
                    <ul className="list-disc">
                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Inspecciona visualmente el cable del cargador en
                            busca de signos de desgaste, cortes o daños.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Limpia suavemente los conectores para asegurarte de
                            que no haya acumulación de suciedad que pueda
                            afectar la conexión.
                        </li>

                        <li className="text-xl text-[#adb0b7] leading-8 text-justify mt-2">
                            Si experimentas problemas de carga persistentes,
                            considera probar con otro cargador compatible para
                            descartar si el problema radica en el cargador o en
                            la laptop misma.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col w-[50%] items-end mt-16 ">
                <div className="flex">
                    <img
                        className="h-72 w-auto mr-10 rounded-[5px]"
                        src={check3}
                        alt=""
                    />
                    <img
                        className="h-72 w-auto  rounded-[5px]"
                        src={check1}
                        alt=""
                    />
                </div>
                <div className="mt-12 flex ">
                    <iframe
                        className='rounded-[5px]'
                        width="640"
                        height="415"
                        src="https://www.youtube.com/embed/ffmO1_bYLfs"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Charger;
