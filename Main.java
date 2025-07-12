import freemarker.template.*;
import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import java.io.*;
import java.util.Map;
import java.util.HashMap;

public class Main {
  public static void main(String[] args) throws Exception {
    Configuration cfg = new Configuration(Configuration.VERSION_2_3_31);
    cfg.setDirectoryForTemplateLoading(new File("templates"));
    cfg.setDefaultEncoding("UTF-8");

    JSONParser parser = new JSONParser();
    JSONArray employees = (JSONArray) parser.parse(
      new FileReader("data/employees.json")
    );

    Map<String, Object> data = new HashMap<>();
    data.put("employees", employees);

    Writer out = new OutputStreamWriter(System.out);
    Template temp = cfg.getTemplate("dashboard.ftl");
    temp.process(data, out);
    out.flush();

    try (Writer w = new FileWriter("static/local-employees.js")) {
      w.write("localStorage.setItem('employees', '" +
              employees.toJSONString().replace("'", "\\'") +
              "');");
    }
  }
}
