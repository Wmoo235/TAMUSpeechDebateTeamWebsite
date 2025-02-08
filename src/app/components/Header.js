import Image from "next/image";

export default function Header(){
    return(
        <header className="bg-tamuMaroon text-white py-4 flex justify-center items-center shadow-md">
            <Image src="/images/debate_logo_removed.png" alt="TAMU Speech and Debate Team Logo" width={80} height={80} className="mr-4" priority />
            <h1 className="text-3xl font-bold">Texas A&M University Speech and Debate Team</h1>
        </header>
    );
}