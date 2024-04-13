import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layout";
import RootPage from "./page";
import { Communities, Community } from "./communities";
import { Questions, Question } from "./questions";
import { Projects, Project } from "./projects";
import { MyPage } from "./mypage";
import { SignIn } from "./sign-in";
import { SignUp } from "./sign-up";
import { Notices, Notice } from "./notices";

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
            <Route path=":id" element={<Community />} />
          </Route>
          <Route path="projects">
            <Route index element={<Projects />} />
            <Route path=":id" element={<Project />} />
          </Route>
          <Route path="questions">
            <Route index element={<Questions />} />
            <Route path=":id" element={<Question />} />
          </Route>
          <Route path="notices">
            <Route index element={<Notices />} />
            <Route path=":id" element={<Notice />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
