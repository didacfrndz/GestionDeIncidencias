import localStorageFunction, { noResueltos, resueltos } from "./localStorage/functions";
localStorageFunction();

function Registro() {
  return (
    <>
      <main className="container mt-5">
        <h1>Registro</h1>
        <div className="mt-4">
          <form>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <input type="submit" className="mt-4 w-100 btn btn-primary" value="Registrar" id="enviar" />
          </form>
        </div>
      </main>
      </>
  );
}

export default Registro;