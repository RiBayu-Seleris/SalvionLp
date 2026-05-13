export default function CardImgLeft({
  key,
  image,
  tag,
  time,
  title,
  author_logo,
  author,
  created_at,
}) {
  return (
    <div className="w-full h-auto cursor-pointer" key={key}>
      <div className="w-full h-auto flex justify-center p-[1px] bg-[conic-gradient(from_0deg_at_50%_50%,#82DCE2_0deg,#82DCE2_11.92deg,#0D6670_90.84deg,#0D6670_179.32deg,#0D6670_269.98deg,#82DCE2_348.36deg,#82DCE2_360deg)] rounded-xl">
        <div className="relative w-full h-auto bg-gradient-to-br from-[#0D2224] to-[#07383E] rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D2224] to-[#07383E] rounded-xl z-10" />
          <div className="relative z-20 w-full h-full flex flex-row gap-x-5 justify-between px-4 py-5 bg-[#0B0F1A]/70 rounded-xl">
            <div className="w-[33%] h-[150px] shrink-0 flex justify-center items-center rounded-xl">
              <img
                src={image}
                alt=""
                srcSet=""
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="w-full h-full flex flex-col justify-between items-center py-1">
              <div className="w-full h-auto flex flex-row gap-x-3">
                <div className="w-fit h-auto px-4 py-0.5 bg-[#021D21] border-[1px] border-[#096D7C] rounded-lg">
                  <p className="text-[12px] text-[#4FE4F8] font-[400]">{tag}</p>
                </div>
                <div className="w-fit h-auto flex justify-center items-center">
                  <p className="text-[#9CA3AF] font-[400] text-[12px]">
                    {time}
                  </p>
                </div>
              </div>
              <div className="w-full h-auto pr-10 line-clamp-2">
                <p className="text-[16px] text-[#FFFFFF] font-[600]">{title}</p>
              </div>
              <div className="w-full h-auto flex justify-start items-center pr-3">
                <div className="w-full h-full flex flex-row gap-x-2 justify-between items-center">
                  <div className="w-full h-auto flex flex-row gap-x-3 justify-start items-center">
                    <div className="w-7 h-7 shrink-0 flex justify-center items-start">
                      <img
                        src={author_logo}
                        alt=""
                        srcSet=""
                        className="w-full h-full"
                      />
                    </div>
                    <div className="w-full h-auto flex flex-col justify-between items-center ">
                      <div className="w-full h-auto">
                        <p className="text-[#495367] text-[14px]">{author}</p>
                      </div>
                      <div className="w-full h-auto">
                        <p className="text-[#96A2BE] text-[12px]">
                          {created_at}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-full flex justify-end items-center">
                    <p className="text-[#495367] text-[14px]">
                      Actuarial Science
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
