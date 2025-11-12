import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Heading from "./Heading";
import CardCertificate from "./CardCertificate";
import itemCertificate from "../../utils/itemCertificate";
export default function CertificateSection() {
  return (
    <div className="space-y-5 py-10" id="certificate">
      <Heading
        title="Certifications"
        description="Professional credentials and achievements"
      />
      <div className="">
        {/* {itemCertificate.map((item,index)=>(
                    <CardCertificate image={item.image} key={index}/>
                ))} */}
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}
          className="mx-20 max-sm:mx-10"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          {itemCertificate.map((certificate, index) => (
            <CardCertificate
                image={certificate.image} key={index}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
