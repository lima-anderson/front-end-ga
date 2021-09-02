import React from 'react';
import axios from 'axios';
import './App.css';
import { useState } from "react";


export default function App() {

  const [form, setForm] = useState ({
    nome: '',
    cpf: '',
    cargoPretendido: '',
    dataNasc: '',
    logradouro: '',
    bairro: '',
    cep: '',
    email: '',
    celular: '',
    estadoCivil: '',
    sexo: '',
    cidade: '',
    phone: '',
    contato: '',
    rg: '',
    possuiVeiculo: '',
    possuiCNH: '',
  })
 
  const tratarMudanca = async () => {
   
    const user = await axios.post('https://al-back-end-ga.herokuapp.com/cadastrar', form);
    
   }
   

    return (

      <form>
        <fieldset>
            <legend>DADOS PESSOAIS</legend>
            <label>
              Nome Completo <span>*</span>:
              <input type="text" 
              name="nome" 
              value={form.nome} onChange={(e) => {
                setForm({ ...form, nome: e.target.value });
              }}></input>
            </label>

            <label>
              Cargo Pretendido:
              <input type="text" name="cargo" value={form.cargoPretendido} onChange={(e) => {
                setForm({ ...form, cargoPretendido: e.target.value });
              }}></input>
            </label>

            <label>
              Data de nascimento <span>*</span>:
              <input name="dataNasc" type="date" value={form.dataNasc} onChange={(e) => {
                setForm({ ...form, dataNasc: e.target.value });
              }} ></input>
            </label>

            <label>
              Estado Civil:
              <select name='estadoCivil'  value={form.estadoCivil} onChange={(e) => {
                setForm({ ...form, estadoCivil: e.target.value });
              }} >
                <option value="solteiro">solteiro</option>
                <option value="casado">casado</option>
                <option value="separado">separado</option>
                <option value="divorciado">divorciado</option>
                <option value="viúvo">viúvo</option>
              </select>
            </label>

            <label>
              Sexo:
              <select name='sexo' value={form.sexo} onChange={(e) => {
                setForm({ ...form, sexo: e.target.value });
              }} >
                <option value="masculino">masculino</option>
                <option value="feminino">feminino</option>
              </select>
            </label>

            <label>
              Endereço <span>*</span>:
              <input type="text" name="logradouro" placeholder='ex. Nome da Rua, 56, Bloco 2, AP 301' value={form.logradouro} onChange={(e) => {
                setForm({ ...form, logradouro: e.target.value });
              }} ></input>
            </label>

            <label>
              Bairro <span>*</span>:
              <input type="text" name="bairro" value={form.bairro} onChange={(e) => {
                setForm({ ...form, bairro: e.target.value });
              }} ></input>
            </label>

            <label>
              Cidade <span>*</span>:
              <input type="text" name="cidade" value={form.cidade} onChange={(e) => {
                setForm({ ...form, cidade: e.target.value });
              }} ></input>
            </label>

            <label>
              CEP:
              <input type="number" name="cep" value={form.cep} onChange={(e) => {
                setForm({ ...form, cep: e.target.value });
              }} ></input>
            </label>

            <label>
              Telefone Fixo:
              <input type="number" name="phone" value={form.phone} onChange={(e) => {
                setForm({ ...form, phone: e.target.value });
              }} ></input>
            </label>

            <label>
            Celular:
              <input type="number" name="cell" value={form.celular} onChange={(e) => {
                setForm({ ...form, celular: e.target.value });
              }} ></input>
            </label>

            <label>
            E-mail:
              <input type="email" name="email" placeholder='ex: myname@example.com' value={form.email} onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }} ></input>
            </label>

        </fieldset>
        <fieldset>
            <legend>DOCUMENTOS</legend>

            <label>
              Identidade <span>*</span>:
              <input type="number" name="rg" value={form.rg} onChange={(e) => {
                setForm({ ...form, rg: e.target.value });
              }} ></input>
            </label>
            <label>
              CPF <span>*</span>:
              <input type="number" name="cpf" value={form.cpf} onChange={(e) => {
                setForm({ ...form, cpf: e.target.value });
              }}></input>
            </label>

            <label>
              Possui Veículo:
              <select name='possuiVeiculo' value={form.possuiVeiculo} onChange={(e) => {
                setForm({ ...form, possuiVeiculo: e.target.value });
              }} >
                <option value="sim">sim</option>
                <option value="nao">não</option>
              </select>
            </label>

            <label>
              Habilitação:
              <select name='possuiCNH' value={form.possuiCNH} onChange={(e) => {
                setForm({ ...form, possuiCNH: e.target.value });
              }} >
                <option value="sim">sim</option>
                <option value="nao">não</option>
              </select>
            </label>

        </fieldset>
        <input type="submit" value="Enviar"  onClick={() => tratarMudanca()}/>
      </form> 
    );
    
  
}