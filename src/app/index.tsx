import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layout";
import RootPage from "./page";
import { Questions } from "./questions";
import { Communities } from "./communities";

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
