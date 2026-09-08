import java.util.Scanner;

public class YearID {

    /**Extrae el año (los dos primeros dígitos) de un número de documento de 11 dígitos. 
     * @param ID Número entero positivo de 11 dígitos (long para evitar desbordamiento).
     * @return int Número entero que representa el año.
     */
    public static int Year (long ID) {
        // Convertimos el número a cadena de texto para manipular sus posiciones
        String textnumber = Long.toString(ID);
        
        // Extraemos los primeros dos caracteres correspondientes al año (YY) y los convertimos a entero
        String subAno = textnumber.substring(0, 2);
        
        return Integer.parseInt(subAno);
    }

    // Método principal para pruebas y ejemplo
    public static void main(String[] args) {
        long entrance = 86021912345L;
        int exit = Year(entrance);
        
        System.out.println("Entrance: " + entrance);
        System.out.println("exit:  " + exit);
    }
}