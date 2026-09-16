import java.util.Scanner;

public class Demo2 {

public static void main (String[] args){
   
   int edad;
   double habilidad;
   String nombre;
   boolean esta_lesionado;
   String equipo;
   int estatura;

   Scanner lector = new Scanner(System.in);

   nombre= lector.nextLine();
   equipo= lector.nextLine();
   edad= lector.nextInt();
   habilidad= lector.nextDouble();
   esta_lesionado= lector.nextBoolean();  // true o false
   estatura= lector.nextInt();

System.out.println("Informacion del jugador: ");
System.out.println("Nombre: " + nombre);
System.out.println("Edad: " + edad);
System.out.println("Habilidad: " + habilidad);
System.out.println("Estatura: " + estatura);
System.out.println("Esta lesionado: " + esta_lesionado);

}
}