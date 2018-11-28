package api.classes.lancamento;

import java.io.File;
import java.io.IOException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class CarregaJsonLegado {

    public LancamentosCliente leJsonLegado()  {
        ObjectMapper objectMapper = new ObjectMapper();
        LancamentosCliente contrlanc = null;
		try {
			contrlanc = objectMapper.readValue(new File("src/main/resources/lancamento-conta-legado.json"), LancamentosCliente.class);
		} catch (JsonParseException e) {
			throw new Error(e.getMessage());
		} catch (JsonMappingException e) {
			throw new Error(e.getMessage());
		} catch (IOException e) {
			throw new Error(e.getMessage());
		}
        return contrlanc;
    }
}
