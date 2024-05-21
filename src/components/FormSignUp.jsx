import { useState } from "react";
import Inputs from "./Inputs";

const FormSignUp = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    repetirSenha: "",
    termos: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
    setErrors({
      ...errors,
      [id]: "",
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.email === "") {
      newErrors.email = "Preencha o campo de Email";
    }
    if (formData.senha === "") {
      newErrors.senha = "Preencha o campo com a Senha";
    }
    if (formData.senha !== formData.repetirSenha) {
      newErrors.repetirSenha = "A senha precisa ser a mesma";
    }
    if (!formData.termos) {
      newErrors.termos = "Concorde com os termos";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form submitted:", formData);
      setErrors({});
    }
  };

  return (
    <section className="bg-white rounded-xl p-4 w-[30rem] bg-opacity-[0.1] border border-Verydarksblue">
      <h1 className="text-center text-3xl text-white pb-6">Crie Sua Conta</h1>
      <form
        className="flex flex-col space-y-2 w-full h-full justify-center"
        onSubmit={handleForm}>
        <Inputs
          value={formData.nome}
          className="p-2 rounded-xl bg-white"
          label="Nome"
          id="nome"
          onChange={handleChange}
        />
        {errors.nome && <p className="text-red-500">{errors.nome}</p>}

        <Inputs
          value={formData.email}
          className="p-2 rounded-xl bg-white"
          label="Email"
          id="email"
          type="email"
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <Inputs
          value={formData.senha}
          className="p-2 rounded-xl bg-white"
          label="Senha"
          id="senha"
          type="password"
          onChange={handleChange}
        />
        {errors.senha && <p className="text-red-500">{errors.senha}</p>}

        <Inputs
          value={formData.repetirSenha}
          className="p-2 rounded-xl bg-white"
          type="password"
          label="Repetir Senha"
          id="repetirSenha"
          onChange={handleChange}
        />
        {errors.repetirSenha && (
          <p className="text-red-500">{errors.repetirSenha}</p>
        )}

        <label
          htmlFor="termos"
          className="text-white flex items-center pt-3 pb-3">
          <Inputs
            checked={formData.termos}
            type="checkbox"
            className="h-5 w-5 m-1"
            id="termos"
            onChange={handleChange}
          />
          Aceito os termos
        </label>
        {errors.termos && <p className="text-red-500">{errors.termos}</p>}

        <button
          className="p-3 bg-Darkdesaturatedblue text-white hover:bg-Verydarkblue rounded-xl"
          type="submit">
          Cadastrar
        </button>
      </form>
    </section>
  );
};

export default FormSignUp;
