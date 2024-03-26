import { Link, Outlet } from "react-router-dom";
import Button from "../../components/Button";

function MyPageLayout() {
  return (
    <main className="h-screen max-w-6xl w-full m-auto">
      <section className="flex w-full justify-between items-center py-5">
        <div className="flex items-center gap-10">
          <div className="bg-gray-300 rounded-full w-32 h-32" />
          <div className="text-2xl font-bold">닉네임</div>
        </div>
        <Button value="프로필수정" onClick={() => {}} />
      </section>
      <section className="w-full flex gap-10 py-4 bg-crYellow p-2">
        <Link to="like" className="text-xl font-bold">
          관심 목록
        </Link>
        <Link to="sell" className="text-xl font-bold">
          판매 내역
        </Link>
        <Link to="buy" className="text-xl font-bold">
          구매 내역
        </Link>
        <Link to="area" className="text-xl font-bold">
          내 동네 설정
        </Link>
      </section>
      <Outlet />
    </main>
  );
}

export default MyPageLayout;
