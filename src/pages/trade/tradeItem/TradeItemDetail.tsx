import { useState, useEffect } from 'react';
import axios from 'axios';
import M_temp from './m_temp/M_temp';
import ImageSlider from './imageSlider/component';
import Navbar from '../../../components/navbar/index';

const TradeItemDetail = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [content, setContent] = useState('');
  const [heart, setHeart] = useState('');
  const [chat, setChat] = useState('');
  const [comments, setComments] = useState([]); // 댓글 목록 상태 추가
  const [showComments, setShowComments] = useState(false); // 댓글 보기 상태 추가
  const [newComment, setNewComment] = useState(''); // 새로운 댓글 상태 추가
  const [temperature, setTemperature] = useState(''); // 온도 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 실제 백엔드 API URL로 변경해주세요.
        const response = await axios.get('백엔드에서데이터를가져오는APIURL');
        const productData = response.data;

        setTemperature(productData.temperature);
        setTitle(productData.title);
        setPrice(productData.price);
        setContent(productData.content);
        setHeart(productData.heart);
        setChat(productData.chat);
        setComments(productData.comments); // 백엔드에서 댓글 데이터를 가져와 초기화
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = async () => {
    try {
      // 서버에 댓글 전송
      // 실제 백엔드 API URL로 변경해주세요.
      await axios.post('백엔드에_댓글_전송_요청', { comment: newComment });

      // 성공하면 댓글 목록 업데이트
      const newComments = [...comments, { user: '사용자', text: newComment }];
      setComments(newComments);
      setNewComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="mt-10 py-10 w-[670px] mx-auto relative">
      <div className="border w-full h-[400px] rounded-xl ">
        <ImageSlider images={['https://dnvefa72aowie.cloudfront.net/origin/article/202403/3f434f215f34a74e9503f00a842aa4a81bb0449e436411d84d80d99ea6ccf7fd.jpg?q=95&s=1440x1440&t=inside&f=webp',
        'https://dnvefa72aowie.cloudfront.net/origin/article/202403/3f434f215f34a74e9503f00a842aa4a81bb0449e436411d84d80d99ea6ccf7fd.jpg?q=95&s=1440x1440&t=inside&f=webp',
        'https://dnvefa72aowie.cloudfront.net/origin/article/202403/af42300f1cc3bc581638ace69cd6a1e93e2bcef0055262413f8e4c6f6a64b0ae.jpg?q=95&s=1440x1440&t=inside&f=webp']} />
      </div>
      {/* uploader information */}
      <div className="border-b flex justify-between items-center">
        <div className="py-5 font-bold">
          {title}username
          <div className="">
            {price}address
          </div>
        </div>

        <div className="mt-6">
          <M_temp temperature={40} />
          <div className="py-1 text-xs text-gray-500 text-right">
            {temperature}매너온도
          </div>
        </div>

      </div>

      {/* tradeItem detail */}
      <div className="border-b py-5">
        <div className="text-2xl font-bold">
          {title}title
        </div>
        <div className="text-lg font-semibold">
          {price}price
        </div>
        <div className="text-lg">
          {content}content
        </div>
        <div className="py-5 text-xs text-gray-500 flex items-center">
          {heart}관심<span className="dot mx-1" style={{ fontSize: '0.5rem' }}>&bull;</span>{chat}채팅
        </div>

        {/* 댓글 보기/쓰기 영역 */}
        <div className="border-t py-5">
          <button className="underline text-sm text-underline" onClick={() => setShowComments(!showComments)}>
            {showComments ? '댓글 숨기기' : '댓글 보기'}
          </button>
          {showComments && (
            <>
              {/* 댓글 목록 */}
              <div className="py-5">
                <p className="text-lg font-semibold mb-2">댓글</p>
                {comments.map((comment, index) => (
                  <div key={index} className="mb-2">
                    <span className="font-bold">{comment.user}:</span> {comment.text}
                  </div>
                ))}
              </div>

              {/* 댓글 쓰기 폼 */}
              <div className="py-5">
                <textarea
                  className="border w-full p-2"
                  placeholder="댓글을 입력하세요"
                  value={newComment}
                  onChange={handleCommentChange}
                ></textarea>
                <button className="bg-blue-500 text-white px-3 py-1" onClick={handleSubmitComment}>
                  댓글 작성
                </button>
              </div>
            </>
          )}
        </div>

      </div>

      {/* popularUsed */}
      <div>
        <p className="py-5 text-lg font-semibold">
          당근 인기중고
        </p>
      </div>
    </div>
    </>
  );
};

export default TradeItemDetail;
