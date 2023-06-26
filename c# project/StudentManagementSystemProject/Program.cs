namespace StudentManagementSystemProject
{
    internal class Program
    {
     /*   public static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }*/

        public static StudentManagementSystem createobj()
        {
            return new StudentManagementSystemImplimentation();
        }
    }
}