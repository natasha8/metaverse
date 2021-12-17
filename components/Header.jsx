import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
    const { user } = useMoralis();

    return (
        <div>
            <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700 rounded-2xl">
                <div className="flex justify-between w-full">
                    <div className=" w-1/2 mx-auto hidden lg:inline-grid">
                        <h1 className="text-3xl">NATYVERSE</h1>
                    </div>
                    <div className="w-1/2">
                        <ChangeUsername />
                    </div>
                </div>
                <div className="text-left lg:text-center w-full place-self-center space-y-4">
                    <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
                        <Avatar logoutOnPress />
                    </div>

                    <h1 className="text-3xl">Welcome</h1>

                    <h2 className="text-5xl font-bold truncate">
                        {user.getUsername()}
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Header;
