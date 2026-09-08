import java.util.Scanner;
import java.util.regex.Pattern;

public class Main {

    // This is a expression that validates exactly 11 digits and ensures the first one is not 0
    private static final String ID_REGEX = "^[1-9][0-9]{10}$";
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Please enter your ID number: ");
        String input = scanner.nextLine().trim();

        scanner.close();

        try {
            int year = extractYear(input);
            System.out.println("This is your year: " + year);
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public static int extractYear(String ID) {
        validateIdNumber(ID);

        // This part convert to a long integer to perform mathematical operations
        long numberComplete = Long.parseLong(ID);

        // This part divide by 10^9 the ID number, since it is an 11 digit number
        // Also, keep only the first two whole number digits or the year
        long anoLong = numberComplete / 1_000_000_000L;

        return (int) anoLong;
    }

    private static void validateIdNumber(String ID) {
        // Clean and straightforward validation using regular expressions
        if (ID == null || !Pattern.matches(ID_REGEX, ID)) {
            throw new IllegalArgumentException(
                "Your ID must be positive, have exactly 11 digits, and the first digit cannot be 0."
            );
        }
    }
}