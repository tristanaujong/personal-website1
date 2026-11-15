const BentoBackButton = () => {
  return (
    <a
      href="#/fun"
      className="mb-5 inline-flex w-fit shrink-0 items-center gap-4 font-sf-pro text-sm font-normal text-[#080808] no-underline hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#080808]"
    >
      Back to Fun Stuff <span className="text-[22px]" aria-hidden="true">↗</span>
    </a>
  );
};

export default BentoBackButton;
