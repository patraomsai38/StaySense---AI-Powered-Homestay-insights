function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-700 font-bold">
        S
      </div>

      <div>
        <h1 className="font-bold text-xl">
          StaySense AI
        </h1>
        <p className="text-xs text-green-100">
          Smart Homestay Insights
        </p>
      </div>
    </div>
  );
}

export default Logo;