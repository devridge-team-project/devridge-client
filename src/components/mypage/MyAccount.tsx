import { Link } from "react-router-dom";
import { User } from "@/interface";
import { Button } from "@/design";
import { useNavigation } from "@/hook";

export default function MyAccount({ user }: { user?: User }) {
  const navigation = useNavigation();
  return (
    <div className="mx-8.75">
      <div>
        <div className="flex">
          <img
            src={user?.imageUrl as string}
            className="h-25 w-25 rounded-full bg-gray-200 "
            alt="profileImage"
          />
          <div className="ml-3.5">
            <div className="text-1xl font-bold text-bright-purple">
              {user?.nickname}
            </div>
            <div className="text-1xl">{user?.occupation}</div>
          </div>
        </div>

        <Link to="update" state={{ user }}>
          <div className={`mt-[38px] bg-gray-100 py-5 font-bold text-center`}>
            회원정보 수정
          </div>
        </Link>
        <div className="font-bold mt-[70px]">계정</div>
        <div className="mt-5">
          <Link to="changePassword">비밀번호 변경</Link>
        </div>
        <div className="mt-5">
          <Link to="delete" state={{ nickname: user?.nickname }}>
            회원탈퇴
          </Link>
        </div>
        <div className="mt-5">
          <Button
            title="로그아웃"
            onClick={() => navigation("/sign-out")}
            options={{ size: "full" }}
          />
        </div>
      </div>
    </div>
  );
}
