import React from "react";
import { useLocation } from "react-router-dom";

export default function Trangmoi() {
  const location = useLocation();
  const { statusData } = location.state || {}; 

  return (
    <div className="container mx-auto p-4"> {/* Use container for centering */}
      <h1 className="text-3xl font-bold mb-6 text-center">PCB Checking Results</h1> {/* Title */}
      <div className="flex flex-col md:flex-row gap-8"> {/* Flexible layout for different screen sizes */}
        <div className="md:w-1/2"> {/* Image container */}
          {statusData && typeof statusData === 'string' ? (
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <img
                src={statusData} 
                alt="PCB Scan"
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
          ) : (
            <p className="text-gray-600">No image data available.</p>
          )}
        </div>

        <div className="md:w-1/2"> {/* Results container */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
            <p>
              <span className="font-semibold">Number of Errors: </span> 
              {/* Replace with actual error count from statusData */}
              {statusData?.errors || "N/A"} 
            </p>
            <p>
              <span className="font-semibold">PCB Status: </span>
              {/* Replace with actual status from statusData */}
              {statusData?.status || "N/A"} 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
