import Image from "next/image";

export default function About() {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <Image src="/lightbulb.svg" width={100} height={100} alt="lightbulb" />
      <h3>Coming Soon</h3>
    </div>
  );
}
