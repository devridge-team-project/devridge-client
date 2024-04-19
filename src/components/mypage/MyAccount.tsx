import { Link } from "react-router-dom";
import { User, OnClick } from "@/interface";
import { Button } from "@/design";

export default function MyAccount({
  logout,
  user,
}: {
  logout: OnClick<void>;
  user?: User;
}) {
  return (
    <div className="mt-[25px]">
      <div>
        <div className="flex">
          <img
            src={user?.imageUrl as string}
            className="h-25 w-25 rounded-full bg-gray-200 "
            alt="profileImage"
          />
          <div className="ml-3.5">
            <div className="text-1xl font-bold text-blue-grey">
              {user?.nickname}
            </div>
            <div className="text-1xl">{user?.occupation}</div>
          </div>
        </div>

        <Link to="update" state={{ user }}>
          <div className={`mt-[38px] bg-gray-100 h-10 w-80 font-bold`}>
            회원정보 수정
          </div>
        </Link>
        <div className="font-bold mt-[70px]">계정</div>
        <div className="mt-5 w-80">
          <Link to="changePassword">비밀번호 변경</Link>
        </div>
        <div className="mt-5 w-80">
          <Link to="delete" state={{ nickname: user?.nickname }}>
            회원탈퇴
          </Link>
        </div>
        <Button
          title="로그아웃"
          onClick={() => logout}
          options={{ size: "full" }}
        />
      </div>
    </div>
  );
}
