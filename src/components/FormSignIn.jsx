import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Inputs from "./Inputs";

const FormSignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    termo: false,
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email && formData.password) navigate("/home");
  };

  return (
    <section className="bg-white rounded-xl p-4 w-[30rem] bg-opacity-[0.1] border border-Verydarksblue">
      <h1 className="text-center text-3xl text-white pb-6">
        Entre na Sua Conta
      </h1>
      <form
        className="flex flex-col space-y-2 w-full h-full justify-center"
        onSubmit={handleSubmit}>
        <Inputs
          className="p-2 rounded-xl bg-white"
          label="Email"
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Inputs
          className="p-2 rounded-xl bg-white"
          label="Senha"
          id="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />

        {error && <p className="text-red-500">{error}</p>}

        <button
          className="p-3 bg-Darkdesaturatedblue text-white rounded-xl"
          type="submit">
          Entrar
        </button>
      </form>
    </section>
  );
};

export default FormSignIn;
