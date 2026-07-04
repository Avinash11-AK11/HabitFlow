export default function DeviceFrame({ children }) {
  return (
    <div className="relative mx-auto w-[285px] h-[580px] sm:w-[310px] sm:h-[630px] rounded-[3.2rem] p-3 bg-[#111827] shadow-[20px_20px_40px_rgba(163,155,143,0.25),-10px_-10px_30px_rgba(255,255,255,0.9)] border-4 border-[#2D3748]">
      {/* Speaker and Camera Punch Hole (Notch) */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#111827] rounded-full z-20 flex items-center justify-center">
        {/* Speaker line */}
        <div className="w-8 h-1 bg-[#4A5568] rounded-full mr-3" />
        {/* Camera circle */}
        <div className="w-2 h-2 bg-[#2D3748] rounded-full border border-gray-700" />
      </div>
      
      {/* Screen Container */}
      <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-[#FAF8F5] relative select-none">
        {children}
      </div>
      
      {/* Gloss Reflection Overlay */}
      <div className="absolute inset-3 rounded-[2.5rem] bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10" />
    </div>
  );
}

