const Form = ({textLabel, textButton, placeholder}) => {
  return (
    <form>
      <label className="text-sm text-gray-700 mb-2" htmlFor="email">
        {textLabel}
      </label>
      <input
        className="text-sm w-full mb-4 pl-3 rounded border py-2 shadow focus:outline-none hover:border-azul-claro hover:ring-1 hover:ring-azul-escuro focus:border-azul-escuro focus:ring-1 focus:ring-azul-escuro"
        id="email"
        type="email"
        placeholder={placeholder}
      />
      <button
        className="font-bold text-white bg-azul-escuro w-full py-2 rounded-full shadow-2xl hover:bg-azul-hover duration-150"
        type="button"
      >
        {textButton}
      </button>
    </form>
  );
};

export default Form;
