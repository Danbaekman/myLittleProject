import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';

// 우측 화살표 버튼 컨테이너
const RightArrowContainer = ({ children, onClick, style }) => (
  <div
    className="rightslick-arrow"
    style={{ position: 'absolute', top: '50%',  transform: 'translateY(-50%) translateX(100%)',  cursor: 'pointer', ...style }}
    onClick={onClick}
  >{children}
  </div>
);

// 좌측 화살표 버튼 컨테이너
const LeftArrowContainer = ({ children, onClick, style }) => (
  <div
    className="leftslick-arrow"
    style={{ position: 'absolute', top: '50%',  transform: 'translateY(-50%) translateX(-100%)', cursor: 'pointer', ...style, zIndex: 1  }}
    onClick={onClick}
  >{children}
  </div>
);

const ImageSlider = ({ images }) => {
  
  // 우측 화살표버튼
  const NextArrow = ({ onClick }) => (
    <RightArrowContainer onClick={onClick} style={{ right: '0' }}>
      <GoChevronRight className="text-4xl color text-gray-500"/>
    </RightArrowContainer>
  );
  // 좌측 화살표버튼
  const PrevArrow = ({ onClick }) => (
    <LeftArrowContainer onClick={onClick} style={{ left: '0' }}>
      <GoChevronLeft className="text-4xl text-gray-500"/>
    </LeftArrowContainer>
  );

  // NextArrow 및 PrevArrow를 우선 정의 후에 settings 정의
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {images.map((imageUrl, index) => (
        <div key={index} className="w-full h-[400px] rounded-xl overflow-hidden">
          <img
            src={imageUrl}
            alt={`이미지 ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
