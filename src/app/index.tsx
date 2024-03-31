import { BrowserRouter, Route, Routes } from "react-router-dom";

import RootLayout from "./layout";
import RootPage from "./page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<RootPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
