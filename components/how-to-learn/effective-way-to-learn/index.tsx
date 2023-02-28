import Image from "next/image";

const EffectiveWay = () => {
  return (
    <>
      <div className="container mx-auto px-4 leading-loose">
        <Image
          style={{ filter: "drop-shadow(20px 4px 6px black)" }}
          alt="brain"
          width={300}
          height={300}
          src={require("../../../public/study.png")}
        />
        <h1 className="lg:text-2xl md:text-xl text-lg">
          3/ Giữ cho đầu óc thoải mái và học hiệu quả
        </h1>
        <ul>
          <li>
            <h2 className="lg:text-xl md:text-xl text-sm indent-4">
              2.1 Nghe nhiều
            </h2>
          </li>
          <li>
            <h2 className="lg:text-xl md:text-xl text-sm indent-4">
              3.1 Học theo block 25 phút rồi nghỉ 5 phút
            </h2>
          </li>
          <li>
            <h2 className="lg:text-xl md:text-xl text-sm indent-4">
              3.2 Học hiệu quả lúc sáng sớm, tối trước khi đi ngủ, trước lúc ăn
              cơm.
            </h2>
          </li>
          <li>
            <h2 className="lg:text-xl md:text-xl text-sm indent-4">
              3.3 Ngủ đủ, uống đủ nước
            </h2>
          </li>
        </ul>
      </div>
    </>
  );
};

export default EffectiveWay;
