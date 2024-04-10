import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layout";
import RootPage from "./page";
import { Communities } from "./communities";
import { Questions, Question } from "./questions";
import { MyPage } from "./mypage";
import { SignIn } from "./sign-in";
import { SignUp } from "./sign-up";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<RootPage />} />
          <Route path="sign-in">
            <Route index element={<SignIn />} />
          </Route>
          <Route path="sign-up">
            <Route index element={<SignUp />} />
          </Route>
          <Route path="mypage">
            <Route index element={<MyPage />} />
          </Route>
          <Route path="communities">
            <Route index element={<Communities />} />
          </Route>
          <Route path="questions">
            <Route index element={<Questions />} />
            <Route path=":id" element={<Question />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
