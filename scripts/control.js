import postFixSolver from './PosfixSolver.js';

class Control {
    constructor() {
        this.postfix = new postFixSolver();
        this.setupInfixInput();
    }

    setupInfixInput() {
        let posfix = this.postfix;
        $('#infija').on('input propertychange paste', (event) => {
            let infijaVal = $(event.currentTarget).val();
            let validExpresion = posfix.validateInfix(infijaVal);

            this.invalidateInfix(validExpresion);

            if(infijaVal.length>0 && validExpresion){
                let posfixExp = posfix.infixToPostfix(infijaVal);
                this.setPosfix(posfixExp);
                if(posfixExp){
                    this.setResultado(posfix.solvePosfix(posfixExp));
                }
            }
        });
    }

    invalidateInfix(valid) {
        let infijaForm = $('#form-infija');
        if(valid){
            infijaForm.removeClass('has-error');
        }
        else{
            infijaForm.addClass('has-error');
        }
        this.setPosfix('');
        this.setResultado('');
    }

    setPosfix(posfix) {
        $('#posfija').val(posfix);
    }

    setResultado(resultado){
        $('#resultado').val(resultado);
    }
}

export default Control

