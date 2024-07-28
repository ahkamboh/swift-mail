import Image from 'next/image';
import ShineBorder from "@/components/magicui/shine-border";

const Card = ({ name, role, description, image }) => {
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
    </ShineBorder>
  );
};

export default Card;
