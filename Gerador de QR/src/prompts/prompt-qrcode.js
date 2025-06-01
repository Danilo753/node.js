
const promptQRcode = [ 
    {
        name: "link",
        description: "Digite um link para gerar o QRcode",
    },
    {
        name: "type",
        description: "Escolha entre (1 - NORMAL ou (2 - TERMINAL",
        pattern: /^[1-2]+$/,
        message: "Escolha entre 1 ou 2",
        required: true,
    },

];

export default promptQRcode;