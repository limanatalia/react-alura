import React, { Component } from 'react';

class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Escreva sua Nota.." />
        <button>Criar Nota</button>
      </form>
    );
  }
}
export default FormularioCadastro;