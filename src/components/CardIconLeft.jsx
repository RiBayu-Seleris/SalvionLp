export default function CardIconLeft({ icon, title, description, bgIcon }) {
  return (
    <div className="w-full h-auto flex flex-row gap-x-5">
      <div className="w-auto h-auto pt-2">
        <div
          className="w-12 h-12 flex items-center justify-center rounded-xl p-3 "
          style={{ backgroundColor: bgIcon }}
        >
          <img src={icon} alt="" srcset="" className="w-full h-full" />
        </div>
      </div>
      <div className="w-full h-auto flex flex-col gap-y-3 justify-between">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}
