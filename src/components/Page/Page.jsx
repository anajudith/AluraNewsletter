import icone from "../../../public/images/icone.svg";
import Form from "../Form/Form";
import SvgAnimation from "../SvgAnimation/SvgAnimation";

const Page = () => {
  return (
    <>
      <main className="flex px-6 drop-shadow-2xl lg:w-4/4">
        <section className="bg-azul-escuro hidden lg:block w-1/2 rounded-l-lg">
          <img className="p-6 m-auto" src={icone} alt="icone de mergulhador" />
        </section>
        <section className="bg-white p-10 gap-6 flex flex-col rounded-lg lg:w-1/2 justify-center lg:rounded-l-none">
          <SvgAnimation />
          <div className="text-center">
            <h1 className="text-4xl mb-2">Alura Newsletter</h1>
            <p className="text-xl text-gray-700 mb-2">
              Mergulhe em uma plataforma que respira tecnologia!
            </p>
          </div>
          <Form
            textLabel="Email"
            textButton="Inscreva-se"
            placeholder={"Digite seu endereço de email"}
          />
        </section>
      </main>
    </>
  );
};

export default Page;
