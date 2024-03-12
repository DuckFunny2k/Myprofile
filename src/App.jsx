import "../public/assets/css/gird.css";
import "../public/assets/css/main.css";
import "../public/assets/css/responsive.css";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import "../public/assets/font/fontawesome-free-5.15.4-web/css/all.min.css";

import { useEffect } from "react";

// define "lord-icon" custom element with default properties
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

defineElement(lottie.loadAnimation);

function App() {
  useEffect(() => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const dots = $$(".tab-item");
    const slides = $$(".slide-users");
    const prevBtn = $(".prev");
    const nextBtn = $(".next");
    const numberOfSilides = slides.length;
    var slideNumber = 0;
    var slideIndex = 0;
    var taskbar = $(".options");
    const skillsSection = $(".skills-section");
    const progressBars = $$(".container-skills-progress-bar");

    const optionElements = $$(".option-item");
    const extendElements = $$(".extend");
    console.error("Lâm Văn Đức");

    optionElements.forEach((option, index) => {
      const extendElement = extendElements[index];
      option.onclick = function () {
        clickTop();

        $(".option-item.active").classList.remove("active");
        $(".extend.active").classList.remove("active");

        this.classList.add("active");
        extendElement.classList.add("active");
      };
    });

    function clickTop() {
      document.documentElement.scrollTop = 0;
    }

    // Skill
    function showProgress() {
      progressBars.forEach((progressBar) => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
        progressBar.style.transition = "all 0.4s linear";
      });
    }

    function hideProgress() {
      progressBars.forEach((p) => {
        p.style.opacity = 0;
        p.style.width = 0;
        p.style.transition = "all 0.2s linear";
      });
    }

    window.addEventListener("scroll", () => {
      const sectionPositon = skillsSection.getBoundingClientRect().top;
      const screenPositon = window.innerHeight;

      if (sectionPositon < screenPositon) {
        showProgress();
      } else {
        hideProgress();
      }
    });

    window.onscroll = function () {
      if (
        document.documentElement.scrollTop > 300 ||
        document.body.scrollTop > 300
      ) {
        taskbar.style.position = "fixed";
        taskbar.style.top = 0;
        taskbar.style.width = "163.32px";
        taskbar.style.marginTop = "30px";
        taskbar.style.transition = "all 0.2s linear";
      } else {
        taskbar.style.position = "static";
        taskbar.style.marginTop = 0;
        taskbar.style.transition = "all 0.2s linear";
      }
    };

    //Ấn vào nút để thay đổi đối tượng slide
    dots.forEach((dot, index) => {
      const slide = slides[index];

      dot.onclick = function () {
        $(".tab-item.active").classList.remove("active");
        $(".slide-users.active").classList.remove("active");

        this.classList.add("active");
        slide.classList.add("active");
      };
    });

    //Next slide
    nextBtn.addEventListener("click", () => {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      dots.forEach((dot) => {
        dot.classList.remove("active");
      });

      slideNumber++;

      if (slideNumber > numberOfSilides - 1) {
        slideNumber = 0;
      }

      slides[slideNumber].classList.add("active");
      dots[slideNumber].classList.add("active");
    });

    //Lùi slide
    prevBtn.addEventListener("click", () => {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      dots.forEach((dot) => {
        dot.classList.remove("active");
      });

      slideNumber--;

      if (slideNumber < 0) {
        slideNumber = numberOfSilides - 1;
      }

      slides[slideNumber].classList.add("active");
      dots[slideNumber].classList.add("active");
    });

    //Slide autoplay
    var playSlide;

    var repeater = () => {
      playSlide = setInterval(() => {
        slides.forEach((slide) => {
          slide.classList.remove("active");
        });
        dots.forEach((dot) => {
          dot.classList.remove("active");
        });

        slideNumber++;

        if (slideNumber > numberOfSilides - 1) {
          slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        dots[slideNumber].classList.add("active");
      }, 5000);
    };

    repeater();

    // Add your existing JavaScript logic here...

    // Ensure to clean up any event listeners or intervals in a cleanup function
    return () => {
      // Cleanup logic
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <div className="main">
        <div className="grid wide wide-low">
          <div className="row">
            <div className="col l-12 m-12">
              {/* gi oi thieu */}
              <div className="intro">
                {/* avatar va name */}
                <div className="intro-user">
                  <div className="intro-user-left">
                    <img
                      src="./assets/img/avatar.jpg"
                      alt=""
                      className="intro-user-avt"
                    />
                  </div>
                  <div className="intro-user-right">
                    <h1 className="intro-user-right__name">Lâm Văn Đức</h1>
                    <div className="intro-user-right__job">Sinh Viên</div>
                    <ul className="intro-user-right__social">
                      <li className="intro-user-right__social-icon facebook">
                        <div className="tooltip">Facebook</div>
                        <a href="https://www.facebook.com/profile.php?id=100012225582086">
                          <span id="tooltip-icon" className="facebook">
                            <i
                              className="fab fa-facebook-f"
                              id="tooltip-icon--icon"
                            ></i>
                          </span>
                        </a>
                      </li>
                      <li className="intro-user-right__social-icon tiktok">
                        <div className="tooltip">TikTok</div>
                        <a href="https://vt.tiktok.com/">
                          <span id="tooltip-icon" className="tiktok">
                            <i
                              className="fab fa-tiktok"
                              id="tooltip-icon--icon"
                            ></i>
                          </span>
                        </a>
                      </li>
                      <li className="intro-user-right__social-icon instagram">
                        <div className="tooltip">Instagram</div>
                        <a href="https://www.instagram.com/">
                          <span id="tooltip-icon" className="instagram">
                            <i
                              className="fab fa-instagram"
                              id="tooltip-icon--icon"
                            ></i>
                          </span>
                        </a>
                      </li>
                      <li className="intro-user-right__social-icon github">
                        <div className="tooltip">GitHub</div>
                        <a href="https://github.com/DuckFunny2k/">
                          <span id="tooltip-icon" className="github">
                            <i
                              className="fab fa-github"
                              id="tooltip-icon--icon"
                            ></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* lien he */}
                <ContactInfo />

              </div>
            </div>
          </div>
          <div className="row container">
            {/* navication */}
            <div className="col l-2 c-12">
              <div className="options">
                <ul className="option">
                  <li className="option-item active">
                    <div className="option-item-icon">
                      <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
                      <lord-icon
                        src="https://cdn.lordicon.com/eszyyflr.json"
                        trigger="morph"
                        colors="primary:#263da3,secondary:#4e2099"
                        style={{ width: "65px", height: "65px" }}
                      ></lord-icon>
                      Bản Thân
                    </div>
                  </li>
                  <li className="option-item">
                    <div className="option-item-icon">
                      <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
                      <lord-icon
                        src="https://cdn.lordicon.com/wxnxiano.json"
                        trigger="morph"
                        colors="primary:#263da3,secondary:#4e2099"
                        style={{ width: "65px", height: "65px" }}
                      ></lord-icon>
                      Học Vấn
                    </div>
                  </li>
                  <li className="option-item">
                    <div className="option-item-icon">
                      <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
                      <lord-icon
                        src="https://cdn.lordicon.com/iltqorsz.json"
                        trigger="morph"
                        colors="primary:#263da3,secondary:#4e2099"
                        style={{ width: "65px", height: "65px" }}
                      ></lord-icon>
                      Mục Tiêu
                    </div>
                  </li>
                  <li className="option-item">
                    <div className="option-item-icon">
                      <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
                      <lord-icon
                        src="https://cdn.lordicon.com/rjzlnunf.json"
                        trigger="morph"
                        colors="primary:#263da3,secondary:#4e2099"
                        style={{ width: "65px", height: "65px" }}
                      ></lord-icon>
                      Sở Thích
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col l-10">
              <div className="extends">
                {/* me */}
                <ul className="extend active">
                  <li className="extend-item">
                    <div className="extend-item--title-header">
                      <h1 className="extend-item--title-h1">Giới thiệu</h1>
                    </div>
                    <p className="extend-item-para">
                      Mình là một sinh viên của trường Cao Đẳng FPT Tây Nguyên.
                      Mình đang học tập, theo đuổi ngành Công Nghệ Thông Tin.
                    </p>
                    <p className="extend-item-para">
                      Hiện tại mình đang theo học tại trường và đã được gần 2
                      năm theo đuổi lập trình Web mình cảm thấy rất thích, cảm
                      ơn thầy cô tại FPT đã luôn nhiệt tình giản dạy và hướng
                      dẫn.
                    </p>
                  </li>
                  <li className="extend-item">
                    <div className="extend-item--title-body">
                      <h3 className="extend-item--h3">Mình đã làm được</h3>
                    </div>
                    <div className="row">
                      <div className="col l-6 m-6">
                        <a href="" className="case">
                          <div id="zoom">
                            <div className="case-item">
                              <img
                                src="./assets/img/Viecdalam/trangbanhang.png"
                                alt=""
                                className="case-item--img"
                              />
                            </div>
                            <h3 className="case-item--h3">Web Bán Hàng</h3>
                          </div>
                        </a>
                      </div>
                      <div className="col l-6 m-6">
                        <a href="" className="case">
                          <div id="zoom">
                            <div className="case-item">
                              <img
                                src="./assets/img/Viecdalam/lofi.png"
                                alt=""
                                className="case-item--img"
                              />
                            </div>
                            <h3 className="case-item--h3">Lofi</h3>
                          </div>
                        </a>
                      </div>
                      <div className="col l-6 m-6">
                        <a href="" className="case">
                          <div id="zoom">
                            <div className="case-item">
                              <img
                                src="./assets/img/Viecdalam/music.png"
                                alt=""
                                className="case-item--img"
                              />
                            </div>
                            <h3 className="case-item--h3">Play Music</h3>
                          </div>
                        </a>
                      </div>
                      <div className="col l-6 m-6">
                        <a href="" className="case">
                          <div id="zoom">
                            <div className="case-item">
                              <img
                                src="./assets/img/Viecdalam/lambieng.png"
                                alt=""
                                className="case-item--img"
                              />
                            </div>
                            <h3 className="case-item--h3">Làm biếng</h3>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="extend-item">
                    <div className="extend-item--title-body">
                      <h3 className="extend-item--h3">
                        Những câu nói cho mình cảm hứng
                      </h3>
                    </div>
                    <div className="slide">
                      <div className="slide-users active fade">
                        <div className="slide-avatar">
                          <img
                            src="./assets/img/caunoi/elon-musk.jpg"
                            alt=""
                            className="slide-avatar--img"
                          />
                        </div>
                        <div className="slide-text fade">
                          <h4 className="slide-text--title">Elon Musk</h4>
                          <p className="slide-text--para">
                            "Công nghệ là thứ gần gũi nhất với ma thuật còn tồn
                            tại trên thế giới này"
                          </p>
                        </div>
                      </div>
                      <div className="slide-users fade">
                        <div className="slide-avatar">
                          <img
                            src="./assets/img/caunoi/Satya.jpg"
                            alt=""
                            className="slide-avatar--img"
                          />
                        </div>
                        <div className="slide-text">
                          <h4 className="slide-text--title">Satya Nadella</h4>
                          <p className="slide-text--para">
                            "Ngành công nghiệp của chúng ta không tôn trọng
                            truyền thống - nó chỉ tôn trọng sự đổi mới"
                          </p>
                        </div>
                      </div>
                      <div className="slide-users fade">
                        <div className="slide-avatar">
                          <img
                            src="./assets/img/caunoi/reed.jpg"
                            alt=""
                            className="slide-avatar--img"
                          />
                        </div>
                        <div className="slide-text">
                          <h4 className="slide-text--title">Reed Hastings</h4>
                          <p className="slide-text--para">
                            Thời đại đồ đá. Thời đại đồ đông. Thời đại đồ sắt.
                            Chúng ta xác định toàn bộ sử thi của nhân loại bằng
                            công nghệ mà họ sử dụng.
                          </p>
                        </div>
                      </div>
                      <div className="slide-users fade">
                        <div className="slide-avatar">
                          <img
                            src="./assets/img/caunoi/mark.jpg"
                            alt=""
                            className="slide-avatar--img"
                          />
                        </div>
                        <div className="slide-text">
                          <h4 className="slide-text--title">Mark Zuckerberg</h4>
                          <p className="slide-text--para">
                            Rủi ro lớn nhất là khi bạn không chấp nhận bất kỳ
                            rủi ro nào. Trong một thế giới thay đổi thực sự
                            nhanh chóng, chiến lược duy nhất được đảm bảo thất
                            bại là không chấp nhận rủi ro.
                          </p>
                        </div>
                      </div>
                      <div className="slide-users fade">
                        <div className="slide-avatar">
                          <img
                            src="./assets/img/caunoi/timcook.jpg"
                            alt=""
                            className="slide-avatar--img"
                          />
                        </div>
                        <div className="slide-text">
                          <h4 className="slide-text--title">Tim Cook</h4>
                          <p className="slide-text--para">
                            Công việc mang ý nghĩa mới khi bạn cảm thấy đang đi
                            đúng hướng. Nếu không, nó chỉ là một công việc và
                            cuộc sống dường như quá ngắn ngủi cho điều đó.
                          </p>
                        </div>
                      </div>
                      <div className="slide-users fade">
                        <div className="slide-avatar">
                          <img
                            src="./assets/img/caunoi/michael.jpg"
                            alt=""
                            className="slide-avatar--img"
                          />
                        </div>
                        <div className="slide-text">
                          <h4 className="slide-text--title">Michael Dell</h4>
                          <p className="slide-text--para">
                            Bạn không cần phải là một thiên tài, hay một người
                            có tầm nhìn, hay thậm chí tốt nghiệp đại học để
                            thành công. Bạn chỉ cần có nền tảng và ước mơ.
                          </p>
                        </div>
                      </div>
                      <div className="slide-users fade">
                        <div className="slide-avatar">
                          <img
                            src="./assets/img/caunoi/biil.jpg"
                            alt=""
                            className="slide-avatar--img"
                          />
                        </div>
                        <div className="slide-text">
                          <h4 className="slide-text--title">Elon Musk</h4>
                          <p className="slide-text--para">
                            Giá trị của sự cần mẫn nằm ở chỗ nó tích tụ mầm mống
                            cho những điều may mắn. Càng chăm chỉ bao nhiêu, tôi
                            càng được may mắn bấy nhiêu.
                          </p>
                        </div>
                      </div>
                      <a className="prev">
                        <i className="fas fa-chevron-left"></i>
                      </a>
                      <a className="next">
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>

                    {/* Tab */}
                    <div className="tab">
                      <span className="tab-item active fade"></span>
                      <span className="tab-item fade"></span>
                      <span className="tab-item fade"></span>
                      <span className="tab-item fade"></span>
                      <span className="tab-item fade"></span>
                      <span className="tab-item fade"></span>
                      <span className="tab-item fade"></span>
                    </div>
                  </li>
                </ul>
                {/* hoc van */}
                <ul className="extend">
                  <div className="extend-item--title-header">
                    <h1 className="extend-item--title-h1">Học vấn</h1>
                  </div>

                  <li className="extend-item">
                    <div className="extend-item-text-title">
                      <h2 className="extend-item-text-title--h2">
                        <img
                          src="./assets/img/Svg/icon-education.svg"
                          alt=""
                          className="extend-item-text-title--img"
                        />
                        Giáo dục
                      </h2>

                      <div className="extend-item--bodys">
                        <div className="extend-item--body active-line">
                          <h4 className="extend-item-text-title--h4">
                            Trường Đại Học Công Thương TP.Hồ Chí Minh
                          </h4>
                          <p className="extend-item-para-title">2019 - 2021</p>
                          <p className="extend-item-para-text">
                            Vào học từ 2019 đến nay những năm đầu của sinh viên,
                            Ảnh hưởng của covid 19 nên học Online tại thời điểm
                            này học tập chưa rõ ràng định hướng sẽ làm gì trong
                            ngành nghề này..., đưa ra quyết định nghĩ học.
                          </p>
                        </div>
                        <div className="extend-item--body">
                          <h4 className="extend-item-text-title--h4">Nhà</h4>
                          <p className="extend-item-para-title">2021 - 2022</p>
                          <p className="extend-item-para-text">
                            Ở nhà phụ giúp gia đình và tìm hiểu kiến thức và cảm
                            thấy bản thân có niềm đam mê với Web Developer
                          </p>
                        </div>
                        <div className="extend-item--body">
                          <h4 className="extend-item-text-title--h4">
                            Cao đẳng FPT Tây Nguyên
                          </h4>
                          <p className="extend-item-para-title">2022 - nay</p>
                          <p className="extend-item-para-text">
                            Vì niềm đam mê nên đã xin gia đình theo học tại
                            trường từ đó đến này luôn cố gắng.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="extend-item">
                    <div className="extend-item-text-title">
                      <h2 className="extend-item-text-title--h2">
                        <img
                          src="./assets/img/Svg/bag.svg"
                          alt=""
                          className="extend-item-text-title--img"
                        />
                        Kinh nghiệm
                      </h2>

                      <div className="extend-item--bodys">
                        <div className="extend-item--body active-line">
                          <h4 className="extend-item-text-title--h4">
                            Bán gói mè
                          </h4>
                          <p className="extend-item-para-title">2019 - nay</p>
                          <p className="extend-item-para-text">
                            Từ 2019 đến nay em là CEO của bên bán mè bán được
                            500 triệu gói mè rồi ...
                          </p>
                        </div>
                        <div className="extend-item--body active-line">
                          <h4 className="extend-item-text-title--h4">
                            Đặc vụ bảo vệ
                          </h4>
                          <p className="extend-item-para-title">2019 - nay</p>
                          <p className="extend-item-para-text">
                            Được biết đến với biệt danh Đặc vụ bảo vệ tại BMT,
                            tôi chuyên nhận công việc bảo vệ cho các cơ sở kinh
                            doanh và tổ chức lớn. Bên cạnh đó, tôi còn có khả
                            năng tham gia vào việc giám sát an ninh và xử lý
                            tình huống khi có sự cố xảy ra.
                          </p>
                        </div>
                        <div className="extend-item--body">
                          <h4 className="extend-item-text-title--h4">
                            Học Web
                          </h4>
                          <p className="extend-item-para-title">2022 - nay</p>
                          <p className="extend-item-para-text">
                            Em đã nắm được sơ sơ các kiến thức nền tảng của
                            HTML, CSS và Javascrpit. (◕‿◕)
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="extend-item">
                    <div className="extend-item-text-title">
                      <h2 className="extend-item-text-title--h2">
                        Kỹ năng của tôi
                      </h2>
                      <div className="skills-section">
                        <div className="container-skills">
                          <div className="container-skills-progress">
                            <div
                              className="container-skills-progress-bar"
                              data-progress="65"
                            >
                              <p>HTML</p>
                              <span>65%</span>
                            </div>
                          </div>

                          <div className="container-skills-progress">
                            <div
                              className="container-skills-progress-bar"
                              data-progress="20"
                            >
                              <p>Javascript</p>
                              <span>20%</span>
                            </div>
                          </div>

                          <div className="container-skills-progress">
                            <div
                              className="container-skills-progress-bar"
                              data-progress="1"
                            >
                              <p>PHP</p>
                              <span>1%</span>
                            </div>
                          </div>

                          <div className="container-skills-progress">
                            <div
                              className="container-skills-progress-bar"
                              data-progress="56"
                            >
                              <p>CSS</p>
                              <span>56%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* muc tieu */}
                <ul className="extend">
                  <div className="extend-item--title-header">
                    <h1 className="extend-item--title-h1">Mục tiêu</h1>
                  </div>
                  <li className="extend-item">
                    <div className="extend-item-text-title">
                      <div className="extend-item--title-body">
                        <h3 className="extend-item--h3">Ngắn hạn</h3>
                      </div>

                      <div className="extend-item--bodys">
                        <div className="extend-item--body active-line">
                          <h4 className="extend-item-text-title--h4">
                            Học và rèn luyện HTMl
                          </h4>
                          <p className="extend-item-para-title">2022</p>
                          <p className="extend-item-para-text">
                            Là một ngôn ngữ đánh dấu siêu văn bản nên HTML sẽ có
                            vai trò xây dựng cấu trúc siêu văn bản trên một
                            website, hoặc khai báo các tập tin kỹ thuật số như
                            hình ảnh, video, nhạc. Học lập trình web với HTML sẽ
                            định hướng cho mình muốn theo đuổi lập trình web.
                          </p>
                        </div>
                        <div className="extend-item--body active-line">
                          <h4 className="extend-item-text-title--h4">
                            Học và rèn luyện CSS
                          </h4>
                          <p className="extend-item-para-title">2022</p>
                          <p className="extend-item-para-text">
                            CSS tạo phong cách và định kiểu cho các yếu tố được
                            viết dưới dạng ngôn ngữ đánh dấu HTML. Nó giúp người
                            dùng tiết kiệm thời gian và công sức viết web nhờ
                            khả năng điều khiển định dạng của nhiều trang web
                            cùng lúc.
                          </p>
                        </div>
                        <div className="extend-item--body active-line">
                          <h4 className="extend-item-text-title--h4">
                            Viết được một giao diện Web
                          </h4>
                          <p className="extend-item-para-title">
                            Sau khi đã nắm được HTML và CSS
                          </p>
                          <p className="extend-item-para-text">
                            Kết hợp giữa HTML và CSS đã học được mình thực hành
                            và viết lại một số trang web như: TheBand của
                            w3school, Shopee,... Từ đó rút ra các thiếu sót và
                            bổ sung.
                          </p>
                        </div>
                        <div className="extend-item--body active-line">
                          <h4 className="extend-item-text-title--h4">
                            Học và rèn luyện Javascript
                          </h4>
                          <p className="extend-item-para-title">
                            Khi đã học được HTML và CSS
                          </p>
                          <p className="extend-item-para-text">
                            JavaScript là ngôn ngữ lập trình phổ biến nhất,
                            JavaScript có lương viện đảm bảo và có cơ hội việc
                            làm nhiều hơn nên mình chọn JavaScript để học.
                          </p>
                        </div>
                        <div className="extend-item--body active-line">
                          <h4 className="extend-item-text-title--h4">
                            Viết một Web dùng HTML, CSS và Javascript
                          </h4>
                          <p className="extend-item-para-title">2022</p>
                          <p className="extend-item-para-text">
                            Kết hợp giữa HTML, CSS và JavaScript đã học được
                            mình thực hành và viết ra trang web này. Từ đó rút
                            ra các thiếu sót và bổ sung.
                          </p>
                        </div>
                        <div className="extend-item--body">
                          <h4 className="extend-item-text-title--h4">
                            Học và rèn luyện React Js
                          </h4>
                          <p className="extend-item-para-title">Sau này</p>
                          <p className="extend-item-para-text">
                            ReactJS giúp các doanh nghiệp tạo ra ứng dụng với
                            cấu trúc UI tốt hơn nhằm nâng cao và tối ưu hóa UX.
                            Với công nghệ này, họ có thể dễ dàng tăng tương tác
                            của người dùng, đồng thời tỉ lệ click và chuyển đổi
                            conversion cũng sẽ cao hơn.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Dài hạn */}
                  <li className="extend-item">
                    <div className="extend-item-text-title">
                      <div className="extend-item--title-body">
                        <h3 className="extend-item--h3">
                          Khi ổn định kiến thức
                        </h3>
                      </div>

                      <div className="extend-item--bodys">
                        <div className="extend-item--body active-line">
                          <h4 className="extend-item-text-title--h4">
                            Đi xin thực tập
                          </h4>
                          <p className="extend-item-para-title">2024</p>
                          <p className="extend-item-para-text">
                            Thực tập là một cơ hội để mình học hỏi, áp dụng
                            những lý thuyết được học vào thực tế và làm quen với
                            môi trường làm việc quy củ và có được thành công cao
                            hơn khi đi làm thực sự.
                          </p>
                        </div>

                        <div className="extend-item--body">
                          <h4 className="extend-item-text-title--h4">
                            Thực tập xong
                          </h4>
                          <p className="extend-item-para-title">2024</p>
                          <p className="extend-item-para-text">
                            Tập trung bổ sung các vấn đề còn thiếu sót mình nhận
                            ra được sau khi thực tập, nếu ổn định sẽ xin ở lại
                            thử việc.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* so thich */}
                <ul className="extend">
                  <div className="extend-item--title-header">
                    <h1 className="extend-item--title-h1">Sở thích</h1>
                  </div>
                  <li className="extend-item">
                    <div className="extend-item-text-title">
                      <div className="extend-item-text-title--contain">
                        <h2 className="extend-item-text-title--h2">
                          <img src="./assets/img/Svg/game.png" alt="" />
                          Chơi game
                        </h2>
                        <div
                          className="ententain"
                          onClick={() =>
                            (window.location.href =
                              "https://www.leagueoflegends.com/vi-vn/")
                          }
                        >
                          <div className="ententain-avatar">
                            <a href="https://www.leagueoflegends.com/vi-vn/">
                              <img
                                src="./assets/img/lol.jpg"
                                alt=""
                                className="ententain-avatar--avt"
                              />
                            </a>
                          </div>
                          <div className="ententain-text">
                            <a href="https://www.leagueoflegends.com/vi-vn/">
                              <h3 className="ententain-text--h3">
                                Liên Minh Huyền Thoại
                              </h3>
                            </a>
                            <span className="ententain-text-span">
                              Giải trí sau giờ học mệt mỏi *Bí mật: lúc nào cũng
                              mệt mỏi*(≧◡≦)
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="extend-item-text-title--contain">
                        <h2 className="extend-item-text-title--h2">
                          <img src="./assets/img/Svg/phim.png" alt="" />
                          Xem phim
                        </h2>

                        <div
                          className="ententain"
                          onClick={() =>
                            (window.location.href =
                              "https://www.netflix.com/vn/title/81153694")
                          }
                        >
                          <div className="ententain-avatar">
                            <a href="https://www.netflix.com/vn/title/81153694">
                              <img
                                src="./assets/img/wishdragon.jpg"
                                alt=""
                                className="ententain-avatar--avt"
                              />
                            </a>
                          </div>
                          <div className="ententain-text">
                            <a href="https://www.netflix.com/vn/title/81153694">
                              <h3 className="ententain-text--h3">
                                Wish Dragon
                              </h3>
                            </a>
                            <span className="ententain-text-span">
                              Phim này rất là cảm động ... (｡♥‿♥｡)
                            </span>
                          </div>
                        </div>
                        {/* Other movies */}
                        {/* Add other movies here */}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handlePrint}>In trang</button>
      <div className="circle1"></div>
      <div className="circle2 hide-on-tablet hide-on-mobile"></div>
      <div className="circle3 hide-on-low-pc"></div>
    </>
  );
}

export default App;
