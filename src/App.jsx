import Form from "./components/Form";
import Header from "./components/Header";
import Result from "./components/Result";
import { useState } from "react";
import { useForm } from "react-hook-form";
function App() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [result, setResult] = useState(null);

  return (
    <>
      <main className="bg-cyan-100 h-screen font-Plus-Jakarta-Sans grid place-items-center">
        <section className="flex flex-col md:flex-row max-w-4xl md:m-auto bg-white shadow-xl rounded-3xl md:overflow-hidden">
          <div className="bg-white p-6 md:flex-1">
            <Header reset={reset} setResult={setResult} />
            <Form
              setResult={setResult}
              errors={errors}
              register={register}
              handleSubmit={handleSubmit}
            />
          </div>
          <Result result={result} />
        </section>
      </main>
    </>
  );
}

export default App;
