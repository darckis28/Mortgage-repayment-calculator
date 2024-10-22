import { FaCalculator } from "react-icons/fa";
import Input from "../components/Input";
import InputRadio from "../components/InputRadio";
import { useForm } from "react-hook-form";
import {
  getHipotecaOnly,
  getHipotecaRepayment,
} from "../utils/calculatorHipoteca";
const Form = ({ setResult, register, handleSubmit, errors }) => {
  const onSubmit = (data) => {
    const { amount, years, interest } = data;
    switch (data.option) {
      case "Repayment":
        setResult(getHipotecaRepayment(amount, years, interest));
        break;
      case "Only":
        setResult(getHipotecaOnly(amount, years, interest));

        break;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full pb-5">
      <Input
        register={register}
        title={"Mortgage Amount"}
        nameOption={"amount"}
        type={"£"}
        active={true}
        errors={errors}
      />

      <div className=" md:flex gap-x-3">
        <Input
          title={"Mortgage Termt"}
          type={"years"}
          register={register}
          errors={errors}
          nameOption={"years"}
        />
        <Input
          title={"Interest Rate"}
          type={"%"}
          errors={errors}
          register={register}
          nameOption={"interest"}
        />
      </div>

      <div className="w-full mb-5">
        <h2 className="text-Slate-700 block mb-3">Mortgage Type</h2>
        <InputRadio name={"option"} value={"Repayment"} register={register} />
        <InputRadio name={"option"} value={"Only"} register={register} />
        {errors.option && (
          <p className="mt-3 text-Red text-sm">This field is required</p>
        )}
      </div>

      <button className="bg-Lime w-full py-3 rounded-3xl font-bold text-Slate-900 flex justify-center items-center gap-3 hover:contrast-125 md:w-auto md:px-8">
        <FaCalculator />
        <span>Calculate Repayments</span>
      </button>
    </form>
  );
};
export default Form;
