using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentManagementSystemProject
{
    internal class Solution
    {
        public static void Main(String[] args)
        {
            Console.WriteLine("Welcome to EGDK Primary School");

            StudentManagementSystem stdm =Program.createobj();

            while(true)
            {
                Console.WriteLine("-------------------------------------------");
                Console.WriteLine("Select given option below");
                Console.WriteLine("1.Add Student\n2.Update Student data\n3.Delete Student\n4.Show All Student\n5.Search student\n6.Calculate total and average of each student\n7.Total Students Present in DB\n8.Exit");
                int ch = Convert.ToInt32(Console.ReadLine());

                switch(ch)
                {
                    case 1:
                        stdm.addStudent();
                        break;
                    case 2:
                        stdm.UpdateStudent();
                        break;
                    case 3:
                        stdm.deleteStudent();
                        break;
                    case 4:
                        stdm.showAllStudent();
                        break;
                    case 5:
                        stdm.SearchStudent();
                        break;
                    case 6:
                        stdm.TotalNAvg();
                        break;
                    case 7:
                        stdm.TotalStudentInEGDB();
                        break;
                    case 8:
                        Environment.Exit(0);
                        break;

                }
            }
        }
    }
}
