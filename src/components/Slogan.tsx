export default function Slogan() {
  return (
    <div className="hidden sm:block absolute top-0 left-0 h-[110dvh] w-[60px] border-r border-[hsla(0, 0%, 49%, .4)] opacity-50 -z-10 pointer-events-none">
      <span
        className="absolute top-[25%] text-center text-white uppercase text-[12px] tracking-[6px] px-5 rotate-180"
        style={{ writingMode: 'vertical-lr' }}
      >
        We Know What We Do
      </span>
    </div>
  );
}
