import java.util.Scanner;

public class Demo {

public static void main (String[] args){
   
   int edad =25;
   double habilidad;
   String nombre;
   boolean esta_lesionado;
   String equipo;
   int estatura;

   // edad=21; se puede dar el valor aqui o arriba
   habilidad=8.5;
   nombre= "Brian Martinez";
   esta_lesionado= false;  // true o false
   equipo= "Madrid";
   estatura=178;

System.out.println("Informacion del jugador: ");
System.out.println("Nombre: " + nombre);
System.out.println("Edad: " + edad);
System.out.println("Habilidad: " + habilidad);
System.out.println("Estatura: " + estatura);
System.out.println("Esta lesionado: " + esta_lesionado);

}
}