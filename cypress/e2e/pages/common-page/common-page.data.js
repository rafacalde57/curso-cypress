export class CommonPageData {
    static get url(){
        return "https://www.demoblaze.com/index.html";
    }

    static get testSuites() {
        return {
            registro: "Registro",
            autenticacion: "Autenticación",
            catalogoYCompra: "Catálogo y Compras",
        };
    }
}