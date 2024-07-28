import Image from 'next/image';
import ShineBorder from "@/components/magicui/shine-border";

const Card = ({ name, role, description, image ,linkeidn }) => {
  return (
    <ShineBorder duration={14}
      className="relative flex flex-col  items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <div className=" text-white rounded-lg p-10 px-16 flex flex-col items-center">
        <div className="w-28 h-32 mb-4">
          <Image src={image} alt={name} width={128} height={128} className="rounded-full" />
        </div>
        <h2 className="text-xl font-bold ClashDisplay-Semibold text-center">{name}</h2>
        <p className="text-sm text-gray-400 ClashDisplay-Regular">{role}</p>
        <p className="text-sm ClashDisplay-Regular tracking-wider text-center">{description}</p>
      </div>
      <a href={linkeidn} target='_blank' className="absolute top-0 left-0 p-4 hover:text-blue-400 transition-colors duration-300 cursor-pointer  rounded-br-lg">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
    </ShineBorder>
  );
};

export default Card;
