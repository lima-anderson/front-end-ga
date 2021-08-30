import React from 'react';
import './App.css';


class App extends React.Component {

  constructor() {
    super()
   
   this.tratarMudanca = this.tratarMudanca.bind(this);

  };
 
  tratarMudanca (e) {
   
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

  



    fetch('http://localhost:3333/users', {
      method: 'POST',
      body: data,
    });
    
   }
   
  render () { 
    return (

      <form onSubmit={this.tratarMudanca}>
        <fieldset>
            <legend>DADOS PESSOAIS</legend>
            <label>
              Nome Completo <span>*</span>:
              <input type="text" name="nome" id="nome" ></input>
            </label>

            <label>
              Cargo Pretendido:
              <input type="text" name="cargo"></input>
            </label>

            <label>
              Data de nascimento <span>*</span>:
              <input name="data" type="date"  ></input>
            </label>

            <label>
              Estado Civil:
              <select name='estado'>
                <option value="solteiro">solteiro</option>
                <option value="casado">casado</option>
                <option value="separado">separado</option>
                <option value="divorciado">divorciado</option>
                <option value="viúvo">viúvo</option>
              </select>
            </label>

            <label>
              Sexo:
              <select name='sexo'>
                <option value="masculino">masculino</option>
                <option value="feminino">feminino</option>
              </select>
            </label>

            <label>
              Endereço <span>*</span>:
              <input type="text" name="endereco" placeholder='ex. Nome da Rua, 56, Bloco 2, AP 301' ></input>
            </label>

            <label>
              Bairro <span>*</span>:
              <input type="text" name="bairro" ></input>
            </label>

            <label>
              Cidade <span>*</span>:
              <input type="text" name="cidade" ></input>
            </label>

            <label>
              CEP:
              <input type="number" name="cep" ></input>
            </label>

            <label>
              Telefone Fixo:
              <input type="number" name="phone" ></input>
            </label>

            <label>
            Celular:
              <input type="number" name="cell" ></input>
            </label>

            <label>
            E-mail:
              <input type="email" name="email" placeholder='ex: myname@example.com' ></input>
            </label>

        </fieldset>
        <fieldset>
            <legend>DOCUMENTOS</legend>

            <label>
              Identidade <span>*</span>:
              <input type="number" name="rg" ></input>
            </label>
            <label>
              CPF <span>*</span>:
              <input type="number" name="cpf" ></input>
            </label>

            <label>
              Possui Veículo:
              <select name='carro'>
                <option value="sim">sim</option>
                <option value="nao">não</option>
              </select>
            </label>

            <label>
              Habilitação:
              <select name='habilitacao'>
                <option value="sim">sim</option>
                <option value="nao">não</option>
              </select>
            </label>

        </fieldset>
        <input type="submit" value="Enviar" />
      </form> 
    );
    
  }
}

export default App;
