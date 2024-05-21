import { useState } from "react";
import Inputs from "./Inputs";

const FormSignUp = () => {
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    password: "",
    passwordConfrm: "",
    termo: false,
  });

  const handleChange = (e) => {
    const { id, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
    setError({
      ...error,
      [id]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};

    if (formData.nome.trim() === "") {
      newError.nome = "Preencha o seu Nome";
    }
    if (formData.email.trim() === "") {
      newError.email = "Preencha o seu Email";
    }
    if (formData.password.trim() === "") {
      newError.password = "Preencha a sua Senha";
    }
    if (formData.passwordConfrm !== formData.password) {
      newError.passwordConfrm = "Sua Senha precisa ser igual";
    }
    if (!formData.termo) {
      newError.termo = "Confirme os termos";
    }
    setError(newError);
    localStorage.setItem("FormData", JSON.stringify(formData));
    setFormData({
      nome: "",
      email: "",
      password: "",
      passwordConfrm: "",
      termo: false,
    });
  };

  const vazio =
    formData.nome === "" || formData.email === "" || formData.password === "";

  return (
    <section className="bg-white rounded-xl p-4 w-[30rem] bg-opacity-[0.1] border border-Verydarksblue">
      <h1 className="text-center text-3xl text-white pb-6">Crie Sua Conta</h1>
      <form
        className="flex flex-col space-y-2 w-full h-full justify-center"
        onSubmit={handleSubmit}>
        <Inputs
          className="p-2 rounded-xl bg-white"
          label="Nome"
          id="nome"
          value={formData.nome}
          onChange={handleChange}
        />
        {error.nome && <p className="text-red-600">{error.nome}</p>}
        <Inputs
          className="p-2 rounded-xl bg-white"
          label="Email"
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        {error.email && <p className="text-red-600">{error.email}</p>}
        <Inputs
          className="p-2 rounded-xl bg-white"
          label="Senha"
          id="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        {error.password && <p className="text-red-600">{error.password}</p>}
        <Inputs
          className="p-2 rounded-xl bg-white"
          type="password"
          label="Repetir Senha"
          id="passwordConfrm"
          value={formData.passwordConfrm}
          onChange={handleChange}
        />
        {error.passwordConfrm && (
          <p className="text-red-600">{error.passwordConfrm}</p>
        )}
        <div className="flex items-center justify-between">
          <label
            htmlFor="termo"
            className="text-white flex items-center pt-3 pb-3">
            <Inputs
              type="checkbox"
              className="h-5 w-5 m-1"
              id="termo"
              onChange={handleChange}
              checked={formData.termo}
            />
            Aceito os termos
          </label>
          {error.termo && <p className="text-red-600">{error.termo}</p>}
        </div>
        <button
          disabled={vazio}
          className={`p-3 bg-Darkdesaturatedblue text-white  rounded-xl ${
            vazio
              ? "bg-zinc-500"
              : "bg-Darkdesaturatedblue hover:bg-Verydarkblue"
          }`}
          type="submit">
          Cadastrar
        </button>
      </form>
    </section>
  );
};

export default FormSignUp;
