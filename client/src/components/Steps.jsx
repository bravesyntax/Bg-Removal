import { ArchiveX, Download, Upload } from "lucide-react";

const Steps = () => {
  return (
    <div>
      <div className="w-full max-w-[90%] mx-auto py-20 px-4">
        <h1 className="text-3xl md:text-5xl text-center tracking-normal">
          Steps to <span className="text-yellow-400"> Remove</span> background
          <br className="hidden md:block" /> image in seconds
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14 py-14">
          <div className="flex gap-4 px-5 md:px-7 py-8 md:py-10 bg-gray-50 shadow-sm rounded-md ">
            <div className="bg-black h-min p-2 rounded-md">
              <Upload className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="mb-2 text-lg md:text-xl font-semibold">
                Upload image
              </p>
              <p className="text-sm md:text-base">
                Choose an image from your device to begin the process.
              </p>
            </div>
          </div>
          <div className="flex gap-4 px-5 md:px-7 py-8 md:py-10 bg-gray-50 shadow-sm rounded-md ">
            <div className="bg-black h-min p-2 rounded-md">
              <ArchiveX className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="mb-2 text-lg md:text-xl font-semibold">
                Remove background
              </p>
              <p className="text-sm md:text-base">
                Automatically remove the background with precision.
              </p>
            </div>
          </div>
          <div className="flex gap-4 px-5 md:px-7 py-8 md:py-10 bg-gray-50 shadow-sm rounded-md ">
            <div className="bg-black h-min p-2 rounded-md">
              <Download className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="mb-2 text-lg md:text-xl font-semibold">
                Download image
              </p>
              <p className="text-sm md:text-base">
                Save the processed image with a transparent or custom
                background.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
