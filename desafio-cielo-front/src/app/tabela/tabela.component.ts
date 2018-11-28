import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material";
import axios from "axios";


export interface camposTabela {
  "DataDoLancamento": string,
  "Descricao": string,
  "Numero": string,
  "Situacao": string,
  "DataDeConfirmacao": string,
  "DadosBancarios": string,
  "ValorFinal": string
}


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {
  displayedColumns: string[] =
    [
      "DataDoLancamento",
      "Descricao",
      "Numero",
      "Situacao",
      "DataDeConfirmacao",
      "DadosBancarios",
      "ValorFinal"
    ];
  dataSource = new MatTableDataSource<camposTabela>();

  constructor() { }

  ngOnInit() {
    this.BuscaApi()
  }

  Atualiza() {
    this.BuscaApi()
  }

  BuscaApi() {
    let arrDados = [];
    axios.get('http://localhost:8080/extrato')
      .then(rs => {
        let aux = rs.data.json.listaControleLancamento;
        aux.forEach(element => {
          let ag = element.lancamentoContaCorrenteCliente.dadosDomicilioBancario.numeroAgencia;
          let cc = element.lancamentoContaCorrenteCliente.dadosDomicilioBancario.numeroContaCorrente;
          let obj = {
            "DataDoLancamento": `${element.dataEfetivaLancamento}`,
            "Descricao": `${element.lancamentoContaCorrenteCliente.nomeTipoOperacao}`,
            "Numero": `${element.lancamentoContaCorrenteCliente.numeroRemessaBanco}`,
            "Situacao": `${element.lancamentoContaCorrenteCliente.nomeSituacaoRemessa}`,
            "DataDeConfirmacao": `${element.dataLancamentoContaCorrenteCliente}`,
            "DadosBancarios": `${element.nomeBanco} Ag ${ag} CC ${cc}`,
            "ValorFinal": `${element.valorLancamentoRemessaFormatado}`
          }
          arrDados.push(obj)
        });
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        this.dataSource = new MatTableDataSource<camposTabela>(arrDados)
      })
  }

}
