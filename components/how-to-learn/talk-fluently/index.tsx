import Image from "next/image";

const TalkFluently = () => {
  return (
    <>
      <div className="container mx-auto px-4 leading-loose">
        <Image
          style={{ filter: "drop-shadow(20px 4px 6px black)" }}
          alt="talk"
          width={400}
          // height={300}
          src={require("../../../public/talk.png")}
        />
        <h1 className="lg:text-2xl md:text-xl text-lg">
          Thời gian sẽ được phân bố vào các buổi tối
        </h1>
      </div>
    </>
  );
};

export default TalkFluently;
