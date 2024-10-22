import Calculador from "../assets/images/illustration-empty.svg";
import { formatoLibras } from "../utils/formaterNum";
const Result = ({ result }) => {
  return (
    <section className="bg-Slate-900 px-4 py-6 text-white flex-1 md:rounded-bl-[3rem]">
      {result === null ? (
        <div className="text-center md:h-full grid place-items-center place-content-center">
          <img src={Calculador} className="mx-auto" alt="calculador" />
          <h2 className="text-xl">Results shown here</h2>
          <p className="text-sm text-Slate-300">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="font-medium text-lg mb-3 md:text-2xl">Your results</h2>
          <p className="text-Slate-300 text-sm mb-5">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
          <div className="bg-Slate-xl border-t-2 border-Lime rounded-md p-4">
            <div className="w-full mb-2 border-b border-Slate-900 pb-2 md:pb-6 md:mb-8">
              <h3 className="text-Slate-300 text-sm mb-2">
                Your monthly repayments{" "}
              </h3>
              <span className="text-Lime text-3xl md:text-5xl  font-semibold ">
                {formatoLibras(result.month)}
              </span>
            </div>

            <div>
              <p className="text-Slate-300 text-sm mb-1">{`Total you'll repay over the term`}</p>
              <span className="text-Slate-100 text-2xl font-semibold ">
                {formatoLibras(result.total)}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Result;
