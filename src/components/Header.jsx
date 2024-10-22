const Header = ({ reset, setResult }) => {
  function clearAll() {
    reset();
    setResult(null);
  }
  return (
    <section className="flex flex-col gap-y-2 md:flex-row md:justify-between mb-6">
      <h1 className="text-2xl font-bold text-Slate-900">
        Mortgage Calculator{" "}
      </h1>
      <span
        onClick={clearAll}
        className="text-Slate-700 underline cursor-pointer hover:text-Slate-900">
        Clear All
      </span>
    </section>
  );
};
export default Header;
