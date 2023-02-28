import Image from "next/image";
const OtherWay = () => {
  return (
    <>
      <div className="container mx-auto px-4 leading-loose">
        <Image
          style={{ filter: "drop-shadow(20px 4px 6px black)" }}
          alt="brain"
          width={300}
          height={300}
          src={require("../../../public/brain.png")}
        />
        <h1 className="lg:text-2xl md:text-xl text-lg">
          4/ Học thêm cách phương pháp ghi nhớ hiệu quả.
        </h1>
        <ul>
          <li>
            <h2 className="lg:text-xl md:text-xl text-sm indent-4">
              4.1 Phương pháp lâu đài trí nhớ ( Memory Palace )
            </h2>
          </li>
          <li>
            <h2 className="lg:text-xl md:text-xl text-sm indent-4">
              4.2 Phương pháp ghi nhớ đỉnh cao SMER ( Phan Thanh Dũng )
            </h2>
          </li>
        </ul>
      </div>
    </>
  );
};

export default OtherWay;
