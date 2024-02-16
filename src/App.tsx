import { useForm } from "./hooks/useForm";
import { ButtonsGroup } from "./components/ButtonsGroup";

const App = () => {

  const { onFormSubmit, onInputChange } = useForm();

  return (
    <form onSubmit={onFormSubmit} className="custom-container fw-semibold text-primary-emphasis m-4">

      <div className="d-flex flex-column justify-content-center align-items-center mb-3">
        <h3 className="text-center text-primary-emphasis fw-bold">Enviar declaración</h3>
        <div className="bg-primary" style={{ width: '80px', height: '3px' }}></div>
      </div>

      <div className="d-flex flex-column gap-2">

        <div className="d-flex gap-2">
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-building"></i>
            </span>
            <select className="form-select" disabled defaultValue={1}>
              <option value={1} >Organismo</option>
            </select>
          </div>
        </div>

        <div className="d-flex gap-2">
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-send"></i>
            </span>
            <select className="form-select" disabled defaultValue={1}>
              <option value={1} >Destinación</option>
            </select>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2 mt-3">
          <div className="col-12 col-md-2 col-sm-6">
            <label className="form-label">Declaración</label>
            <input
              type="number"
              className="form-control"
              placeholder="2301234819@"
              onChange={onInputChange}
              name="declaracion"
            />
          </div>
          <div className="col-12 col-md-2 col-sm">
            <label className="form-label">Procedimiento</label>
            <div className="d-flex gap-2">
              <div className="input-group">
                <span className="input-group-text">
                  Nº
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="7173614"
                  onChange={onInputChange}
                  name="procedimiento"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 col-sm-6">
            <label className="form-label">Despachante</label>
            <input
              type="number"
              className="form-control"
              placeholder="2013348128419"
              onChange={onInputChange}
              name="despachante"
            />
          </div>
          <div className="col-12 col-md col-sm">
            <label className="form-label">Nombre</label>
            <div className="d-flex gap-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre completo"
                  onChange={onInputChange}
                  name="nombre"
                />
                <span className="input-group-text">
                  <i className="bi bi-person-vcard"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2 mt-1 align-items-end">
          <div className="col-5 col-sm-4 col-md-2">
            <label className="form-label">Import / Export</label>
            <input
              type="number"
              className="form-control"
              placeholder="3061234125"
              onChange={onInputChange}
              name="import/export"
            />
          </div>
          <div className="col col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="FALABELLA SA"
              onChange={onInputChange}
              name="shopName"
            />
          </div>
          <div className="col-12 col-sm-3 col-md">
            <label className="form-label">IVA Inscripto</label>
            <input
              type="number"
              className="form-control"
              placeholder="5"
              onChange={onInputChange}
              name="iva"
            />
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2 mt-1 align-items-end">
          <div className="col-12 col-md-6">
            <label className="form-label">Compr / Vend</label>
            <input
              type="text"
              className="form-control"
              placeholder="HOMY CASA LIMITED"
              onChange={onInputChange}
              name="compr/vend"
            />
          </div>
          <div className="col col-md">
            <label className="form-label">Pais Proc / Dest</label>
            <input
              type="text"
              className="form-control"
              placeholder="País"
              onChange={onInputChange}
              name="paisProc/Dest"
            />
          </div>
          <div className="col col-md">
            <label className="form-label">Aduana Dest / Sal</label>
            <input
              type="text"
              className="form-control"
              placeholder="Aduana"
              onChange={onInputChange}
              name="aduanaDest/Sal"
            />
          </div>
        </div>

        <ButtonsGroup />

        <div className="d-flex flex-wrap  gap-2 mt-3">
          <div className="d-flex flex-column gap-2 col-6 col-md-3">
            <div className="d-flex gap-2">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-currency-exchange"></i>
                </span>
                <select className="form-select" disabled defaultValue={1}>
                  <option value={1} >DOL</option>
                </select>
              </div>
            </div>

            <div className="d-flex gap-2">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-bus-front-fill"></i>
                </span>
                <select className="form-select" disabled defaultValue={1}>
                  <option value={1} >Flete total</option>
                </select>
              </div>
            </div>

            <div className="d-flex gap-2">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-shield-fill-check"></i>
                </span>
                <select className="form-select" disabled defaultValue={1}>
                  <option value={1} >Seguro total</option>
                </select>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column col col-md-2 gap-2">
            <input type="text" className="form-control text-end" placeholder="14.577,50" onChange={onInputChange} name="total" />
            <input type="text" className="form-control" placeholder="" disabled />
            <input type="text" className="form-control" placeholder="" disabled />
            <input type="text" className="form-control" placeholder="Porcentaje seguro" disabled />
          </div>

          <div className="vr mx-3 d-none d-lg-block"></div>

          <div className="d-flex flex-column gap-2 col-12 col-md-4">
            <div className="d-flex gap-2">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-currency-exchange"></i>
                </span>
                <select className="form-select" disabled defaultValue={1}>
                  <option value={1}>Facilidad de pago</option>
                </select>
              </div>
            </div>

            <input
              type="text"
              className="form-control"
              placeholder="Ajuste a incluir"
              onChange={onInputChange}
              name="ajusteIncluir"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Ajuste a deducir"
              onChange={onInputChange}
              name="ajusteDeduc"
            />

            <select className="form-select" disabled defaultValue={1}>
              <option value={1} >Condic. Venta</option>
            </select>
          </div>

          <div className="vr mx-3 d-none d-lg-block"></div>

          <div className="d-flex flex-md-column justify-content-end justify-content-md-center gap-2 col col-md">
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-floppy2-fill me-2"></i>
              Guardar
            </button>
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-send me-2"></i>
              Enviar
            </button>
            <button type="reset" className="btn btn-danger">
              <i className="bi bi-x-octagon me-2"></i>
              Cancelar
            </button>
          </div>
        </div>

      </div>
    </form >
  )
}

export default App;