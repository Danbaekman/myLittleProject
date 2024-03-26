import TradeItem from './TradeItems';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/index'; 

export default function Trade() {
  const tradeData = [
    {
      id: 1,
      title: '',
      price: '',
      content: 'II',
      address: '',
      heart: 5,
      chat: 10,
      imageUrl: 'https://example.com/image1.jpg',
    },
  ];

  return (
    <div>
      {/* 네비게이션 바*/}
      <Navbar />

      <div className="bg-customColor-150 mt-4">
        <div className="flex justify-center">
          <div className="w-[800px]">
            <div className="flex items-center">
              <div className="">
                <h1 className="text-3xl mb-3 font-bold">믿을만한</h1>
                <h1 className="text-3xl mb-5 font-bold">이웃 간 중고거래</h1>
                <h2 className="text-lg leading-tight whitespace-nowrap">동네 주민들과 가깝고 따뜻한 거래를<br/>지금 경험해보세요.</h2>
              </div>
              
              <img
                src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/fleamarket-39d1db152a4769a6071f587fa9320b254085d726a06f61d544728b9ab3bd940a.webp"
                alt="중고거래 메인홈페이지 이미지"
                className="h-auto object-cover" 
                style={{ width:'60%' , marginLeft: '0.6rem'}}
              />
              
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <div className="mx-auto w-[800px] mt-8 text-3xl font-bold p-4 flex items-center justify-center">
          <p className="mt-4 mb-6 text-center text-3xl">중고거래 인기매물</p>
        </div>

        <div className="mx-auto max-w-[800px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
          {/* TradeItem 컴포넌트 사용 */}
          {tradeData.map((item) => (
            <TradeItem key={item.id} data={item} />
          ))}
        </div>
      </div>
      <Link to="/ppopular-items" className="font-semibold hover:underline block text-center mt-4">
        인기매물 더 보기
      </Link>
    </div>
  );
}
