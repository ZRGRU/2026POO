class Lampada {
    private ligada: boolean = false;

    public ligar(): void {
        this.ligada = true;
    }

    public desligar(): void {
        this.ligada = false;
    }

    public verificarEstado(): string {
        if (this.ligada) {
            return "A lâmpada está ligada.";
        } else {
            return "A lâmpada está desligada.";
        }
    }
}

const lampada = new Lampada();
console.log(lampada.verificarEstado());
lampada.ligar();
console.log(lampada.verificarEstado());
lampada.desligar();
console.log(lampada.verificarEstado());