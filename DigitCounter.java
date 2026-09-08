import java.util.Scanner;

public class DigitCounter {

    private static final long MIN_VAL = -3000000000L;
    private static final long MAX_VAL = 3000000000L;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Message for the entry
        System.out.print("Please, enter your number: ");
        if (scanner.hasNextLong()) {
            long number = scanner.nextLong();
            
            try {
                int Digits = counter(number);
                System.out.println(Digits);
            } catch (IllegalArgumentException e) {
                System.out.println("Error: " + e.getMessage());
            }
        } else {
            System.out.println("Error: You must enter a valid number");
        }
        
        scanner.close();
    }

    /**
     * This counts the number of digits in the allowed range
     * 
     * @param number is the number between -3,000,000,000 and 3,000,000,000
     * @return int help to understand the number of digits (excluding the negative sign)
     */
    public static int counter(long number) {
        // Verify that it falls within the limits specified in the allowed range
        if (number < MIN_VAL || number > MAX_VAL) {
            throw new IllegalArgumentException("The number is outside the allowed range");
        }

        // Special case for the number 0
        if (number == 0) {
            return 1;
        }

        // If the number is negative, this work with its absolute value so as not to count the sign '-'
        long numberAbsolute = Math.abs(number);
        
        // Convert to a string to count how many numeric characters it has
        return String.valueOf(numberAbsolute).length();
    }
}
