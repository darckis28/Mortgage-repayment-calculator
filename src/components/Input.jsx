const Input = ({ title, type, active, register, nameOption, errors }) => {
  return (
    <div className="w-full mb-5">
      <label className="text-Slate-700 block mb-3">{title}</label>
      <div
        className={` ${
          errors[nameOption]
            ? "border-Red bg-Red animate-bounce"
            : "border-Slate-700 has-[:focus]:bg-Lime-light has-[:focus]:border-Lime "
        } border  rounded-md flex items-center bg-Slate-100 overflow-hidden   ${
          active && "flex-row-reverse"
        } transition-all`}>
        <input
          {...register(nameOption, { required: true })}
          type="number"
          step="any"
          className="py-2 w-full pl-3 outline-none text-xl font-bold text-Slate-900 font-Plus-Jakarta-Sans"
        />
        <span
          className={`font-bold text-lg font-mono px-3 h-full text-center  ${
            errors[nameOption] ? "text-white" : "text-Slate-700"
          }`}>
          {type}
        </span>
      </div>
      {errors[nameOption] && (
        <p className="mt-3 text-Red text-sm">This field is required</p>
      )}
    </div>
  );
};
export default Input;
