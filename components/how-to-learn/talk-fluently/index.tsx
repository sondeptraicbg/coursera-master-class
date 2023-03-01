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
          2/ Cách nói tự tin, trôi chảy
        </h1>
        <ul>
          <li>
            <h2 className="lg:text-xl md:text-xl text-sm indent-4">
              2.1 Nghe nhiều
            </h2>
          </li>
          <li>
            <h2 className="lg:text-xl md:text-xl text-sm indent-4">
              2.2 Nói từ đơn giản, rõ nghĩa trước
            </h2>
          </li>
          <li>
            <h2 className="lg:text-xl md:text-xl text-sm indent-4">
              2.3 Shadowing : phương pháp bắt chước, lặp lại lời của người bản
              xứ.
            </h2>
          </li>
          <li>
            <h2 className="lg:text-xl md:text-xl text-sm indent-4">
              2.4 Tránh các từ ngữ à, uh, không có ý nghĩa.
            </h2>
          </li>
          <li>
            <h2 className="lg:text-xl md:text-xl text-sm indent-4">
              2.5 Thu video mình nói và xem lại và cải thiện
            </h2>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TalkFluently;
