const Footer = () => {
  return (
    <div className="flex flex-col absolute p-10 pl-48 pr-96 w-full bg-black/70 bottom-0 text-gray-400 text-sm">
      <div className="mb-4">Questions? Call 000-800-919-1694</div>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <a
          href="https://help.netflix.com/en/node/412"
          target="_blank"
          without
          rel="noreferrer"
          className="underline"
        >
          FAQ
        </a>
        <a
          href="https://help.netflix.com/en/"
          target="_blank"
          without
          rel="noreferrer"
          className="underline"
        >
          Help Center
        </a>
        <a
          href="https://help.netflix.com/legal/termsofuse"
          target="_blank"
          without
          rel="noreferrer"
          className="underline"
        >
          Terms of Use
        </a>
        <a
          href="https://help.netflix.com/legal/privacy"
          target="_blank"
          without
          rel="noreferrer"
          className="underline"
        >
          Privacy
        </a>
      </div>
      <div className="grid grid-cols-2 gap-2 w-[50%] mb-4">
        <p className="underline mr-12">Cookie Preferences</p>
        <a
          href="https://help.netflix.com/legal/corpinfo"
          target="_blank"
          without
          rel="noreferrer"
          className="underline"
        >
          Corporate Information
        </a>
      </div>
      <select className="w-[10%] p-2 bg-black/70 border border-white rounded-md mt-2">
        <option value="English">English</option>
        <option value="Hindi">हिंदी</option>
      </select>
    </div>
  );
};

export default Footer;
