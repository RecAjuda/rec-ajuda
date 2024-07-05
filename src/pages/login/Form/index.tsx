import { Field, Label } from "../../../components";

export const FormLogin = () => {
  return (
    <div className="font-poppies h-screen flex flex-col px-14 justify-center ">
      <form>
        <div className="flex flex-col items-center justify-center ">
          <h3 className="text-2xl text-blue-950 font-bold pb-4">
            Bem vindo de volta!
          </h3>
          <h4 className="text-zinc-950">Entre em sua conta</h4>
        </div>
        <div>
          <div className="flex">
            <Label content="CPF" />
          </div>
          <Field
            placeholder="Digite seu CPF"
            type="number"
            id="username"
            required={true}
          />
        </div>
        <div>
          <div className="flex">
            <Label content="Senha" />
          </div>
          <Field
            placeholder="Digite sua senha"
            type="password"
            id="password"
            required={true}
          />
        </div>
        <div className=" font-poppies flex justify-center items-center p-6">
          <button
            className="bg-blue-500 font-thin text-white px-20 py-1.5 rounded-full"
            type="submit"
          >
            Entrar
          </button>
        </div>
        <div className="font-poppies flex justify-center gap-1 pt-11 pb-5">
          <h3>Não tem uma conta?</h3>
          <button className="text-blue-800">Inscreva-se</button>
        </div>
        <div className="font-poppies text-xs flex justify-center gap-1">
          <p>Esqueceu a senha?</p>
          <button className="text-blue-800">Clique aqui</button>
        </div>
      </form>
    </div>
  );
};
