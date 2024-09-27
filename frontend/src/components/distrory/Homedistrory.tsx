import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Overview = () => {
  const [reportsData, setReportsData] = useState([]); // Khai báo state để lưu trữ dữ liệu báo cáo
  const [loading, setLoading] = useState(true); // State để quản lý trạng thái loading
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  // Hàm để gọi API và lấy dữ liệu báo cáo
  const fetchReports = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/takeApi/${id}`
      );

      // Lưu mảng báo cáo vào state từ thuộc tính "data"
      if (response.data && Array.isArray(response.data.data)) {
        setReportsData(response.data.data); // Lưu dữ liệu vào state
      } else {
        console.error("Dữ liệu trả về không hợp lệ:", response.data);
      }

      setLoading(false); // Tắt trạng thái loading
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu báo cáo:", error);
      setLoading(false);
    }
  };

  // Dùng useEffect để gọi API khi component được render
  useEffect(() => {
    fetchReports();
  }, []);

  // Hàm gửi dữ liệu lên để lấy id mạch chi tiết
  const fetchidMach = async (id_mach) => {
    const dataMach = {
      id: id,
      id_mach: id_mach,
    };

    try {
      const response = await axios.post(`http://localhost:3000/api/takemach`, {
        data: dataMach,
      });
      console.log("respontssss,", response.data.laydata);
      if (!response.data) {
        console.error("Không có dữ liệu trả về khi lấy mạch chi tiết");
        return 0;
      }

      navigate("/lichsuchitiet", {
        state: { dataMach: response.data.laydata },
      });
    } catch (error) {
      console.error("Lỗi khi gửi id và id mạch lên:", error);
      setLoading(false);
    }
  };

  // Hàm điều hướng tới trang chi tiết
  const handleView = (id_mach) => {
    fetchidMach(id_mach);
  };

  // Hàm điều hướng tới trang "thungrac"
  const handleBin = () => {
    navigate(`/thungrac`);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Recent Detection</h1>
        <button
          className="font-bold text-blue-500 hover:underline"
          onClick={handleBin}
        >
          Recent Delete
        </button>
      </div>

      {/* Hiển thị trạng thái loading trong khi chờ dữ liệu */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Hiển thị các báo cáo khi có dữ liệu */}
          {reportsData.map((report) => (
            <div
              key={report.id_mach}
              className="border p-4 rounded shadow-md bg-white transition-transform transform hover:scale-105"
            >
              <img
                src={report.anh_mach} // Lấy URL hình ảnh từ dữ liệu API
                alt="Report"
                className="w-full h-auto mb-2 cursor-pointer"
                onClick={() => handleView(report.id_mach)} // Điều hướng khi nhấn vào hình
              />
              <p
                className="cursor-pointer text-blue-500 hover:underline"
                onClick={() => handleView(report.id_mach)}
              >
                <h2>Số lỗi: {report.so_loi}</h2>
              </p>
              <p className="text-gray-500 text-sm">
                <i className="fas fa-calendar-alt mr-1"></i>
                {new Date(report.ngay_them).toLocaleDateString()}{" "}
                {/* Hiển thị ngày tháng */}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Overview;
