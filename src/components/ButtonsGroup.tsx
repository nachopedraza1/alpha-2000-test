import React from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";

const buttons = [
    {
        text: "General",
        icon: "bi bi-diagram-2-fill",
        checked: false
    },
    {
        text: "Montos",
        icon: "bi bi-currency-dollar",
        checked: true
    },
    {
        text: "Informacion Adicional",
        icon: "bi bi-info-circle-fill",
        checked: false
    },
    {
        text: "Facturas",
        icon: "bi bi-receipt",
        checked: false
    },
    {
        text: "Cuenta de Terceros",
        icon: "bi bi-people-fill",
        checked: false
    },
];


export const ButtonsGroup: React.FC = () => {

    const { breakpoint } = useBreakpoint();

    let buttonsClass = breakpoint > 650 ? "btn-group mt-2" : "btn-group-vertical mt-2"

    return (
        <div className={buttonsClass} role="group" >
            {
                buttons.map(({ text, icon, checked }) => (
                    <React.Fragment key={text}>
                        <input type="radio" className="btn-check" name="btnradio" checked={checked} readOnly />
                        <label className="btn btn-outline-primary">
                            <i className={`${icon} me-2`}></i>
                            {text}
                        </label>
                    </React.Fragment>
                ))
            }
        </div >
    )
}
