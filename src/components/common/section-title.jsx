const SectionTitle = ({ title }) => {
    return (
      <div className="my-10">
        <div className="w-auto">
          <h2 className="font-bold relative inline-block">
            {title}
            <span className="absolute left-[0px] bottom-0 w-[calc(100%+20px)] h-[1px] bg-black"></span>
          </h2>
        </div>
      </div>
    );
  };
  
  export default SectionTitle;
  