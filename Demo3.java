import java.util.Scanner;

public class Demo3 {

public static void main (String[] args) {

Scanner lector = new Scanner(System.in);
// Programa que calcula el cobro de un parqueadero
// El costo es igual a un valor fijo ($5000) + $100 * minutos
// Aplica un descuento de 10%
String placa = lector.nextLine();
int minutos = lector.nextInt();
int cobro = 5000 + 100 * minutos;
cobro = cobro - (cobro*10/100);

System.out.println("La placa es:" + placa);
System.out.println("Valor a pagar: " + cobro);
}
}