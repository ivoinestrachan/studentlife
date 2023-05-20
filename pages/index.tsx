const index = () => {
  return (
    <>
      <div className="mt-[20vh] justify-center">
        <div className="text-center text-[32px] font-bold ">StudentLife</div>
        <div className="text-center font-semibold text-[20px]">
          Introducing StudentLife: Empower Your Learning Community!
        </div>

        <div className="text-center mt-4 text-[20px]">
          With just a few clicks, you can easily record and share your
          expertise,<br></br> learn from your classmates, and grow together
          through engaging videos.
        </div>

        <div className="flex items-center gap-3 justify-center mt-8">
          <div>
            <button className="border-2 border-black pr-5 pl-5 py-1 text-[22px] rounded-md">Share Knowledge</button>
          </div>

          <div>
            <button className="border-2 border-black pr-5 pl-5 py-1 text-[22px] rounded-md">Explore Videos</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
