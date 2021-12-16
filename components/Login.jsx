import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate } = useMoralis();

    return (
        <div className="bg-black relative">
            <h1>welcome to the NatyVerse</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                <Image
                    src="https://i.ibb.co/ZgX0Xtk/pngegg.png"
                    width={200}
                    height={170}
                    className="opacity-90 object-cover rounded-r-full"
                />

                <button
                    className="bg-pink-500 border border-black rounded-lg p-5 font-bold animate-pulse"
                    onClick={authenticate}
                >
                    Login To The NatyVerse
                </button>
            </div>
            <div className="w-full h-screen">
                <Image
                    src="https://links.papareact.com/55n"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Login;
