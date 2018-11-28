package api.classes.lancamento;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class LancamentoContaCorrenteCliente {

	private long numeroRemessaBanco;
	private String nomeSituacaoRemessa;
	private DadosDomicilioBancario dadosDomicilioBancario;
	private String nomeTipoOperacao;
	
	public long getNumeroRemessaBanco() {
		return numeroRemessaBanco;
	}
	public void setNumeroRemessaBanco(long numeroRemessaBanco) {
		this.numeroRemessaBanco = numeroRemessaBanco;
	}
	public String getNomeSituacaoRemessa() {
		return nomeSituacaoRemessa;
	}
	public void setNomeSituacaoRemessa(String nomeSituacaoRemessa) {
		this.nomeSituacaoRemessa = nomeSituacaoRemessa;
	}
	public DadosDomicilioBancario getDadosDomicilioBancario() {
		return dadosDomicilioBancario;
	}
	public void setDadosDomicilioBancario(DadosDomicilioBancario dadosDomicilioBancario) {
		this.dadosDomicilioBancario = dadosDomicilioBancario;
	}
	public String getNomeTipoOperacao() {
		return nomeTipoOperacao;
	}
	public void setNomeTipoOperacao(String nomeTipoOperacao) {
		this.nomeTipoOperacao = nomeTipoOperacao;
	}
	
}
