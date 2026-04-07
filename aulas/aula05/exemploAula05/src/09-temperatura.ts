class Temperatura {
    private _celcius: number = 0;

    public get celcius(): number {
        return this._celcius;
    }

    public set celcius(valor: number) {
        if (valor >= -273.15) {
            this._celcius = valor;
        }
    }

}

const t = new Temperatura();

t.celcius = 25;
console.log('Temperatura atual: ', t.celcius);

t.celcius = -300;
console.log('Após tentar definir -300: ', t.celcius);

t.celcius = 100;
console.log('Após definir para 100: ', t.celcius);