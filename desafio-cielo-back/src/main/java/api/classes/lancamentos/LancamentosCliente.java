package api.classes.lancamento;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class LancamentosCliente {
	
	private List<ListaControleLancamento> listaControleLancamento;

	public List<ListaControleLancamento> getListaControleLancamento() {
		return listaControleLancamento;
	}

	public void setListaControleLancamento(List<ListaControleLancamento> listaControleLancamento) {
		this.listaControleLancamento = listaControleLancamento;
	}

}
