import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layout";
import RootPage from "./page";
import { Communities, Community, CommunityPost } from "./communities";
import { Questions, Question } from "./questions";
import { Projects, Project, ProjectPost } from "./projects";
import { Studies, Study, StudyPost } from "./studies";
import { Notes, Note } from "./notes";
import { MyPage, UpdatePage, DeletePage, ChangePasswordPage } from "./mypage";
import { SignIn } from "./sign-in";
import { SignUp, Join } from "./sign-up";
import { Notices, Notice } from "./notices";
import { Chat, PrivateChatPage, SendReceiveMessagesPage } from "./chat";

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
            <Route path="join" element={<Join />} />
          </Route>
          <Route path="mypage">
            <Route index element={<MyPage />} />
            <Route path="update" element={<UpdatePage />} />
            <Route path="delete" element={<DeletePage />} />
            <Route path="changePassword" element={<ChangePasswordPage />} />
          </Route>
          <Route path="communities">
            <Route index element={<Communities />} />
            <Route path=":id" element={<Community />} />
            <Route path="post" element={<CommunityPost />} />
          </Route>
          <Route path="projects">
            <Route index element={<Projects />} />
            <Route path=":id" element={<Project />} />
            <Route path="post" element={<ProjectPost />} />
          </Route>
          <Route path="studies">
            <Route index element={<Studies />} />
            <Route path=":id" element={<Study />} />
            <Route path="post" element={<StudyPost />} />
          </Route>
          <Route path="questions">
            <Route index element={<Questions />} />
            <Route path=":id" element={<Question />} />
          </Route>
          <Route path="chat">
            <Route index element={<Chat />} />
            <Route path=":id" element={<PrivateChatPage />} />
            <Route path="receive" element={<SendReceiveMessagesPage />} />
            <Route path="send" element={<SendReceiveMessagesPage />} />
          </Route>
          <Route path="notes">
            <Route index element={<Notes />} />
            <Route path=":id" element={<Note />} />
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
