package api.classes;

import java.io.File;
import java.io.IOException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import api.classes.lancamento.CarregaJsonLegado;
import api.classes.lancamento.LancamentosCliente;

public class Api {

    private final Object json;

    public Api() {
        this.json = null;
    }

    public Object getJson() {
        
		CarregaJsonLegado jsonlegado = new CarregaJsonLegado();
		LancamentosCliente lanccli = null;
		lanccli = jsonlegado.leJsonLegado();
			
        
        return lanccli;
    }

    // public String getContent() {
    //     return "content";
    // }
}