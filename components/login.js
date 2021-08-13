import Button from "@material-tailwind/react/Button";
import Image from 'next/image';
import { signIn } from 'next-auth/client';

function Login() {
    return (
        <div>
            <div className="flex justify-between ">
                <h1 className=" ml-5 mt-5 text-2xl">PORTRAY</h1>
                <div className="flex items-start m-4">
                    <Button
                        className=" mr-2 bg-blue-login hover:bg-indigo-700"
                        color=""
                        buttonType="filled"
                        size="md"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="light"
                    >
                        log in
                    </Button>
                    <Button
                        className=" bg-blue-login hover:bg-indigo-700"
                        color=""
                        buttonType="filled"
                        size="md"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="light"
                        onClick={signIn}
                    >
                        sign up
                    </Button>
                </div>
            </div>
            <div className=" mt-4 justify-center text-center items-center">
                <p className="text-5xl">The best place to manage your life.</p>
                <Image
                    src="/img/login.webp"
                    height="600"
                    width="750"
                    objectFit="contain"
                />
            </div>
        </div>
    )
}

export default Login
