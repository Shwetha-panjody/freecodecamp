using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentManagementSystemProject
{
    public interface StudentManagementSystem
    {
        public void addStudent();
        public void deleteStudent();
        public void showAllStudent();
        public void TotalStudentInEGDB();
        public void UpdateStudent();
        public void SearchStudent();
        public void TotalNAvg();
    }
}
