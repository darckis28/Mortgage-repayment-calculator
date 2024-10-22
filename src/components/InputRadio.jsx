const InputRadio = ({ name, value, register }) => {
  return (
    <label className="mb-4 border border-Slate-700  rounded-md flex items-center  overflow-hidden px-4 py-2 gap-6   has-[:checked]:bg-Lime-light  has-[:checked]:border-Lime transition-all">
      <input
        {...register(name, { required: true })}
        type="radio"
        name={name}
        value={value}
        className="checked:border-Lime appearance-none w-5 h-5 rounded-full border-2  border-Slate-700 cursor-pointer text-Slate-900 checked:bg-Lime    checked:-outline-offset-4 checked:outline checked:outline-white"
      />
      <span className="text-Slate-900 font-bold text-lg ">{value}</span>
    </label>
  );
};
export default InputRadio;
