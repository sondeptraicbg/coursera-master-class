import styles from "./_.module.scss";
import Image from "next/image";
import { useRouter } from 'next/router'
import Head from "next/head";

const AboutMe = () => {
  const router = useRouter();
  const goToHomePage = () => {
    router.push('/');
  };
  return (
    <div className={styles.book}>
      <Head>
        <title>Thông tin tác giả</title>
      </Head>
      <div className={styles.bookCover}>
        <div className={styles.curl} onClick={goToHomePage} ></div>
        <Image
          src="/reading.png"
          alt="Picture of the author"
          width={200}
          height={200}
          className={styles.image}
        />
      </div>
      <div className={styles.bookContent}>
        <div className={styles.header}>
          <h1>Giới thiệu về tôi</h1>
          <Image
            src="/pen2.png"
            alt="book icon"
            width={64}
            height={64}
          />
        </div>
        {/* <h2 className={styles.bookTitle}>Giới thiệu về tôi</h2>
        <p className={styles.bookAuthor}>Tôi là Hải</p> */}
        <div className={styles.bookSummary}>
          <p>Bạn lo lắng con của mình không thể học tốt tiếng anh?</p>
          <p>
            Bạn nghĩ mình phải mất rất nhiều thời gian và tiền bạc mới có thể
            giỏi tiếng anh?
          </p>
          <p>
            Bạn cũng đã tự học hay học ở nhiều trung tâm nhưng tiếng anh vẫn
            chưa thể nói tốt?
          </p>
          <p>
            Bạn đang làm nhân viên bình thường và tự biết phải học tiếng anh để
            thăng tiến, nâng lương nhưng bản thân thì mãi không bắt tay vào học,
            hoặc học mãi mà vẫn không nghe nói được?
          </p>
          <p>
            Bạn đã quá mệt mỏi, nhiều lần bỏ cuộc với việc học tiếng anh của
            mình?
          </p>
          <p>
            Hãy để tôi giúp bạn! Cuốn sách này được thiết kế giành riêng cho
            bạn.
          </p>
          <p>
            Sách dành cho các bạn muốn nghe nói tốt tiếng anh trong 6 tháng.
          </p>
        </div>
        <div className={styles.bookSummary}>
          <p>
            Tôi là Hải Nguyễn, một nhà quản lý trong lĩnh vực công nghệ thông
            tin. Tôi có thể nghe nói tốt tiếng Anh, tiếng Nhật, tiếng Trung. Tôi
            học ngoại ngữ ban đầu là vì tiền, vì muốn bản thân được thăng tiến,
            có thể đảm nhiệm vị trí cao hơn trong công ty.
          </p>
          <p>
            Kinh nghiệm bản thân học tiếng Nhật trong 9 tháng từ con số 0 tới
            trình độ N2, học tiếng anh trong 3 tháng từ trình độ sơ cấp lên trên
            trung cấp. Và thời điểm tôi bắt đầu viết cuốn sách này tôi bắt đầu
            học tiếng Trung và tôi tự tin sau khi cuốn sách này được xuất bản
            tôi có thể nói tốt tiếng Trung.
          </p>
        </div>
        <div className={styles.bookSummary}>
          <p>
            Qua quá trình làm việc, gặp gỡ bạn bè người thân tôi đã thấy các bạn
            trẻ vật lộn trong việc học tiếng anh, các ông bố bà mẹ trăn trở cho
            con học ở trung tâm nào, học ngữ pháp hay nghe nói trước...
          </p>
          <p>
            Đặc biệt là chi phí học tiếng anh còn quá đắt ở VIệt Nam trong khi
            nó phải là ngôn ngữ phổ cập của học sinh sinh viên thì chúng ta mới
            hi vọng con đường sự nghiệp sau này dễ dàng, thuận lợi.
          </p>
          <p>Đó chính là lý do tôi hạ quyết tâm viết cuốn sách này.</p>
          <p>
            Cuốn sách này dành cho các bạn muốn đạt được nghe, nói tự tin trước
            người bản xứ trong thời gian ngắn.( 6 tháng ) với chi phí bằng 1 cốc
            Cafe.
          </p>
          <p>
            Cuốn sách không dành cho các bạn muốn dùng 1 ngôn ngữ tiếng anh đúng
            ngữ pháp, từ vựng hay, khó, và không dành cho các bạn muốn thi chứng
            chỉ tiếng anh trong thời gian ngắn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
