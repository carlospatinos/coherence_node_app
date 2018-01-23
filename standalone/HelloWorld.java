import com.tangosol.net.CacheFactory;
import com.tangosol.net.NamedCache;
 
public class HelloWorld {
 
   public static void main(String[] args) {
 
      String key = "k1";
      String value = "Hello World!";
 
      System.out.println("-------------------->> Starting  ");
      CacheFactory.ensureCluster();
      NamedCache<Object, Object> cache = CacheFactory.getCache("hello-example");
      System.out.println("-------------------->> addinggg  ");
      cache.put(key, value);
      System.out.println((String)cache.get(key));
      System.out.println("-------------------->> finishing  ");
      CacheFactory.shutdown();
   }
}