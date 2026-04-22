import { useTranslations } from "next-intl";

function StarIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

const COMMON_TEXT = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.";

export function Team() {
  const t = useTranslations("team");

  return (
    <section className="bg-white py-24 px-6 relative" id="about">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Header */}
        <div className="mb-14">
          <h2
            className="text-[2.5rem] md:text-[3.25rem] font-bold bg-gradient-to-r from-[#d919a4] via-[#7526f2] to-[#1a6bf0] bg-clip-text text-transparent mb-4 leading-[1.1] w-fit font-display"
          >
            Lorem Ipsum is simply dummy text of the printing
          </h2>
          <p className="text-[#3f3f46] font-semibold text-[1.05rem] leading-[1.65] max-w-[850px]">
            {COMMON_TEXT}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 border-t-0">
          
          {/* Left Panel - Image Card */}
          <div className="relative rounded-[2.1rem] p-[5px] bg-gradient-to-br from-[#d919a4] via-[#201540] to-[#042e6f] min-h-[500px]">
            <div className="relative w-full h-full rounded-[1.85rem] overflow-hidden flex flex-col justify-end bg-black">
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Team feature"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent h-[70%]" />
              
              {/* Text Content */}
              <div className="relative z-10 px-8 pb-10">
                <p className="text-white text-[1.05rem] leading-[1.6] font-medium">
                  {COMMON_TEXT}
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel - 2x2 Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-[#b3b3b3] rounded-[1.8rem] px-8 py-10 flex flex-col items-start border border-[#b3b3b3]">
                {/* Icon Container */}
                <div className="w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-[#df59f2] to-[#3f5cf0] flex items-center justify-center mb-6">
                  <StarIcon />
                </div>
                {/* Text */}
                <p className="text-white text-[0.95rem] leading-[1.65] font-medium">
                  {COMMON_TEXT}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

