import React from 'react'
import { useState } from 'react';

function App() {
  const [classificacao, setClassificacao] = useState('');

  function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    if (altura <= 0 || peso <= 0 || isNaN(peso) || isNaN(altura)) {
      setClassificacao('Insira valores válidos.');
      resultado.style.color = "black";
      return;
    }

    const imc = peso / (altura * altura);

    if (imc < 18.5) {
      setClassificacao('Abaixo do peso');
      resultado.style.color = "yellow";
    } else if (imc >= 18.5 && imc < 24.9) {
      setClassificacao('Peso ideal');
      resultado.style.color = "green";
    } else if (imc >= 25 && imc <= 29.9) {
      setClassificacao('Acima do peso');
      resultado.style.color = "orangered";
    } else {
      setClassificacao('Obesidade');
      resultado.style.color = "red";
    }
  }


  return (
    <>
      <section>
        <div className='shadow rounded-4 p-4 text-center'>
          <h1 className='mb-4'>Calculadora de IMC</h1>
          <div className='form-floating'>
            <input type="number" id='peso' className='form-control m-2 mb-2' />
            <label htmlFor="peso">Peso</label>
          </div>
          <div className='form-floating'>
            <input type="number" id='altura' className='form-control m-2 ' />
            <label htmlFor="altura">Altura</label>
          </div>
          <button onClick={calcularIMC} className='btn btn-primary mt-4'>Enviar</button>

          <div className='mt-4' id='resultado'>{classificacao}</div>
        </div>
      </section>
    </>
  )
}

export default App
