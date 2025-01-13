import { useState } from "react";

import { Images, SquarePen } from "lucide-react";

import { IssueCategory } from "@/types/type";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const CreateBug = () => {
  const [selectedStatus, setSelectedStatus] = useState(true);
  const [uploadedImages, setUploadedImages] = useState<
    { file: File; preview: string }[]
  >([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setUploadedImages((prev) => [...prev, ...files]);
    }
  };
  const handleRemoveImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleStatusChange = () => {
    setSelectedStatus(true);
    // updateTaskStatus(task.id, value); // تحديث حالة المهمة في اللوحة الأم (KanbanBoard)
  };
  return (
    <div className="flex flex-col   ">
      <div className=" min-h-screen m-9  bg-white rounded-lg">
        <p className="text-2xl font-bold flex flex-row gap-2 pb-3 ">
          <SquarePen className="mt-2 " />
          إضافة خطأ جديد(Bug) :
        </p>
        <div className="flex flex-row gap-3 p-5  h-70">
          <form>
            <div className="flex flex-row gap-9">
              <div className="flex flex-col">
                <p className="text-md font-bold">عنوان الخطأ</p>
                <input
                  type="text"
                  placeholder="مشكلة في gis"
                  id="label"
                  name="label"
                  className=" w-[400px] border-2 border-gray-300 rounded-lg p-2"
                />
              </div>

              {/* procedure type */}
              <div className="p-3">
                <p className="text-md font-bold">تصنيف الخطأ</p>
                <Select value="Gis" onValueChange={handleStatusChange}>
                  <SelectTrigger className="w-[300px]">
                    <SelectValue placeholder="اختر التصنيف" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(IssueCategory).map(([key, value]) => (
                      <SelectItem key={key} value={key}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="p-3">
              <label htmlFor="label" className="text-md font-bold">
                السلوك المتوقع{" "}
              </label>
              <textarea
                placeholder="السلوك المتوقع"
                id="label"
                name="textarea"
                className="w-full border-2 border-gray-300 rounded-lg p-2 mt-1 h-28 "
              />
            </div>

            <div className="p-3">
              <label htmlFor="label" className="text-md font-bold">
                السلوك الفعلي{" "}
              </label>
              <textarea
                required
                placeholder="السلوك الفعلي"
                id="label"
                name="textarea"
                className="w-full border-2 border-gray-300 rounded-lg p-2 mt-1  h-28"
              />
            </div>
            <div className="p-3"></div>
            <div className="p-3">
              <label htmlFor="attachments" className="text-md font-bold ">
                إضافة مرفقات
              </label>
            </div>
            <div className="flex flex-col gap-2 mt-5 justify-center">
              {/* رفع الصور */}
              <input
                id="attachments"
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="hidden "
              />
              <label
                htmlFor="attachments"
                className="cursor-pointer flex items-center justify-center w-9 h-9  bg-secondGreen text-white rounded-full hover:bg-black"
              >
                {/* أيقونة رفع */}
                <Images />
              </label>
              {/* عرض الصور المرفوعة */}
              {uploadedImages.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {uploadedImages.map((image, index) => (
                    <div key={index} className="w-24 h-24 relative">
                      <img
                        src={image.preview}
                        alt={`attachment-${index}`}
                        className="w-full h-full object-cover rounded"
                      />
                      <button
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 text-xs"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex  justify-center rounded-lg m-5">
              <Button className="w-1/2  bg-secondGreen">إضافة</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBug;
