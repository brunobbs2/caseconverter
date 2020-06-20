class ConverterModel {

    constructor(value, isBinary) {
        this._value = value;
        this._isBinary = isBinary;
    }

    getValue() {
        if(this._isBinary) {
            return parseInt(this._value, 2).toString();
        } else {

        }
    }

    getIsBinary() {
        return this._isBinary;
    }
}