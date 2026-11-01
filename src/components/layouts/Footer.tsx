
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="meta mx-auto flex max-w-[88rem] flex-wrap items-center justify-between gap-4 px-5 py-6 md:px-8">
        <p>
          © <span id="year">{currentYear}</span> Fernando
        </p>
        <span className="flex gap-6">
          <a className="hover:text-fg" href="https://github.com/FCL00">
            GitHub
          </a>
          <a className="hover:text-fg" href="https://www.linkedin.com/in/fernando-lagahit-524095292/" target="_blank">
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  );
}
