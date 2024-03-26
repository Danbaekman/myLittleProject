import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  // 검색어 변경 이벤트 핸들러
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // 검색 버튼 클릭 이벤트 핸들러
  const handleSearch = () => {
    alert(`검색어: ${searchTerm}`);
  };

  return (
    <div className="bg-white p-3 flex items-center justify-between fixed top-0 w-full z-50">
      {/* 버튼 그룹 */}
      <div className="flex items-center">
        <img
          src="https://play-lh.googleusercontent.com/9gVDwlxC-KaEPZv5plf9MbKZcgk0zo5Gg1ajD_ZUfcISbJFJiSRX13axsAztSpwQYMA"
          alt="당근 이미지"
          className="object-cover w-7 h-10"
        />
        <button className="text-xl text-orange-500 font-custom">당근</button>
        {/* 중고거래 버튼에 링크 추가 */}
        <Link to="/trade">
          <button className="ml-7 text-lg text-orange-500 font-bold">중고거래</button>
        </Link>
        <button className="ml-7 text-lg text-slate-600 font-bold hover:text-gray-400">동네업체</button>
        <button className="ml-7 text-lg text-slate-600 font-bold hover:text-gray-400">알바</button>
        <button className="ml-7 text-lg text-slate-600 font-bold hover:text-gray-400">부동산 직거래</button>
        <button className="ml-7 text-lg text-slate-600 font-bold hover:text-gray-400">중고차 직거래</button>
      </div>

      {/* 검색 입력 필드와 검색 버튼 */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="물품이나 동네를 검색해보세요"
          value={searchTerm}
          onChange={handleChange}
          className="bg-gray-100 border-gray-100 p-2 mr-2 w-72 rounded-lg"
        />
        <button onClick={handleSearch} className="border border-gray-300 px-4 py-2 rounded">
          <p className="font-bold">채팅하기</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
