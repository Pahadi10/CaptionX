import SparkleIcon from "./SparkleIcon";
export default function DemoSection() {
  return (
    <section className="flex mt-8 sm:mt-12 justify-around items-center">
      {/* Media query for small screens */}
      <style>
        {`
          @media (max-width: 640px) {
            .hidden-on-small {
              display: none;
            }
            .visible-on-small {
              display: block;
            }
          }
        `}
      </style>
      {/* Left block and Sparkle icon hidden on small screens */}
      <div className=" bg-gray-800/50 w-[240px] h-[420px] rounded-xl hidden-on-small overflow-hidden">
      <video src="https://dawid-epic-captions.s3.us-east-1.amazonaws.com/without-captions.mp4" preload='auto' muted autoPlay loop></video>
      </div>
      <div className="hidden-on-small">
        <SparkleIcon />
      </div>
      {/* Right block visible on small screens */}
      <div className="bg-gray-800/50 w-[240px] h-[420px] rounded-xl visible-on-small overflow-hidden">
      <video src="https://dawid-epic-captions.s3.us-east-1.amazonaws.com/with-captions.mp4" preload='auto' muted autoPlay loop></video>
      </div>
    </section>
  );
}
