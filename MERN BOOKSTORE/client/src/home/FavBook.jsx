import React from "react";
import FAVBookImg from "/banner-img/FavBook.jpg";
import { Link } from "react-router-dom";

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div>
        <img src={FAVBookImg} alt="" className="rounded md:w-10/22" />
      </div>

      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-2 md:w-3/4 leading-snug">
          Tìm sách yêu thích{" "}
          <span className="text-blue-700">của bạn tại đây!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6 text-justify">
          Hãy khám phá thế giới của tri thức và niềm đam mê đọc sách tại đây!
          "Sách Điện Tử Việt" tự hào mang đến cho bạn bộ sưu tập đa dạng, đáp
          ứng mọi sở thích và mang đến những trải nghiệm thú vị.
        </p>
        {/* stats */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">800+</h3>
            <p className="text-base">Số đầu sách</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1000+</h3>
            <p className="text-base">Tài khoản</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">10000+</h3>
            <p className="text-base">Lượt truy cập</p>
          </div>
        </div>

        <Link to="/shop" className="mt-12 block">
          <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
            Tìm hiểu thêm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavBook;
