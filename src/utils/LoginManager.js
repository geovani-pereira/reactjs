let AUTENTICADO = false; //substituir JWT


export const isAutenticado = () => {
    return  AUTENTICADO;
}


export const setAutenticado = aut => {
    AUTENTICADO = aut;
}