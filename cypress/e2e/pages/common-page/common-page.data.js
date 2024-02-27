export class CommonPageData {
    static get url(){
        return "https://www.demoblaze.com/index.html";
    }

    static get testSuites() {
        return {
            registroYAutenticacion: "Registro y Autenticación",
            catalogoYCompra: "Catálogo y Compras",
        };
    }
}