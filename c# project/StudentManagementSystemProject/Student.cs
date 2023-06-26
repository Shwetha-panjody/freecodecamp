using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentManagementSystemProject
{
    internal class Student
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public double Mark1 { get; set; }
        public double Mark2 { get; set; }
        public double Mark3 { get; set; }

        private static int autoIncrementRegno=100;
        public Student(String name, double mark1, double mark2, double mark3)
        {
            int reg = autoIncrementRegno++;
            Id = "EGDK" + reg;                      // 3rd101
            Name = name;                       // 3rd
            Mark1 = mark1;
            Mark2 = mark2;
            Mark3 = mark3;
        }

        public override string ToString()
        {
            return String.Format("{0}\t\t{1}\t\t{2}\t\t{3}\t\t{4}", Id,Name,Mark1,Mark2,Mark3);
        }

    }
}
