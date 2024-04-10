import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layout";
import RootPage from "./page";
import { Communities } from "./communities";
import { Questions } from "./questions";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<RootPage />} />
          <Route path="questions" element={<Questions />} />
          <Route path="communities">
            <Route index element={<Communities />} />{" "}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
