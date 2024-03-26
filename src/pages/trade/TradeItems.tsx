import { useNavigate } from 'react-router-dom';


// data 객체의 타입 정의
interface TradeItemProps {
  data: {
    title: string;
    content: string;
    price: number;
    address: string;
    heart: number;
    chat: number;
    imageUrl: string;
  };
}

const TradeItem: React.FC<TradeItemProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // 클릭 시 이동할 페이지 경로 설정
    navigate('/tradeItem/${data.id}'); // 상품의 고유한 ID를 경로에 포함시킴
  };
  
  return (
    // 전체 사이즈(사용자 올린 product)
    <div className= "p-0 mx-auto" >
      <div className= "w-[220px] cursor-pointer"onClick={handleClick}>
            {/* 사진 넣은 박스 크기*/}
            <div className="border w-[220px] h-[220px] overflow-hidden rounded-xl">
              <img
                src={data.imageUrl}
                alt="users trade product image"
                className="object-cover object-center h-full w-full"
              /> 
        </div>

      {/* 상세사항 */} 
      <div className="mt-2">
        <div className="text-lg">{data.title}title</div>
        <div className="font-bold">{data.price}price</div>
        <div className="text-sm">{data.address}location</div>
        <div className="text-xs text-gray-500">관심 {data.heart} &middot; 채팅 {data.chat}</div>
      
      </div>
      </div>
    </div>
  );
};

export default TradeItem;


