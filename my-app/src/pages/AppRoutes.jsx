import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Clicker from "./Clicker/Clicker";

import CarCreateForm from "./CarCreateForm/CarCreateForm";
import CarList from "./CarList/CarList";
import CarUpdateForm from "./CarUpdateForm/CarUpdateForm";
import CarView from "./CarView/CarView";
import CreatedCar from "./CarCreateForm/CreatedCar";

import NewsCreateForm from "./NewsCreateForm/NewsCreateForm";
import NewsList from "./NewsList/NewsList";
import NewsUpdateForm from "./NewsUpdateForm/NewsUpdateForm";
import NewsView from "./NewsView/NewsView";
import CreatedNews from "./NewsCreateForm/CreatedNews";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/createcar" element={<CarCreateForm />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/updatecar/:id" element={<CarUpdateForm />} />
        <Route path="/cars/:id" element={<CarView />} />
        <Route path="/createdcar/:id" element={<CreatedCar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/createnews" element={<NewsCreateForm />} />
        <Route path="/allnews" element={<NewsList />} />
        <Route path="/updatenews/:id" element={<NewsUpdateForm />} />
        <Route path="/news/:id" element={<NewsView />} />
        <Route path="/creatednews/:id" element={<CreatedNews />} />
      </Routes>
    </BrowserRouter>
  );
}
