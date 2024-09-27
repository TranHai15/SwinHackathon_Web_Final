import { useLocation } from "react-router-dom";

const ReportDetail = () => {
  const location = useLocation();
  const { dataMach } = location.state || {}; // Nhận dữ liệu từ state

  if (!dataMach) {
    return (
      <div className="text-center text-red-500">No report data available.</div>
    );
  }

  // Hàm để xác định tình trạng dựa vào số lỗi
  const getStatus = (soLoi) => {
    if (soLoi < 3) {
      return "Lỗi nhẹ";
    } else if (soLoi >= 3 && soLoi < 9) {
      return "Lỗi vừa";
    } else {
      return "Lỗi nặng";
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          <i className="fas fa-file-alt mr-2"></i>
          Report Details
        </h1>

        {/* Sử dụng Flexbox để bố trí hình ảnh và thông tin */}
        <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Hình ảnh */}
          <div className="w-full md:w-1/2">
            <img
              src={dataMach.anh_mach}
              alt="Mach Report"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Thông tin chi tiết */}
          <div className="w-full md:w-1/2 space-y-4 text-lg">
            <p className="flex items-center">
              <i className="fas fa-exclamation-triangle text-yellow-500 mr-2"></i>
              <span className="font-semibold text-gray-700">Số lỗi: </span>
              {dataMach.so_loi}
            </p>
            <p className="flex items-center">
              <i className="fas fa-info-circle text-blue-500 mr-2"></i>
              <span className="font-semibold text-gray-700">Tình trạng: </span>
              {getStatus(dataMach.so_loi)} {/* Hiển thị tình trạng */}
            </p>
            <p className="flex items-center">
              <i className="fas fa-calendar-alt text-green-500 mr-2"></i>
              <span className="font-semibold text-gray-700">
                Ngày kiểm tra:{" "}
              </span>
              {new Date(dataMach.ngay_them).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDetail;
