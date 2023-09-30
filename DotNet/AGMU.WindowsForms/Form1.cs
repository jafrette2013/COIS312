using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace AGMU1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'aGMUDataSet.Programs' table. You can move, or remove it, as needed.
            this.programsTableAdapter.Fill(this.aGMUDataSet.Programs);
            // TODO: This line of code loads data into the 'aGMUDataSet.Students' table. You can move, or remove it, as needed.
            this.studentsTableAdapter.Fill(this.aGMUDataSet.Students);
            // TODO: This line of code loads data into the 'aGMUDataSet.Classes' table. You can move, or remove it, as needed.
            this.classesTableAdapter.Fill(this.aGMUDataSet.Classes);
           

        }

        private void tabPage1_Click(object sender, EventArgs e)
        {

        }

        private void btnSaveStudents_Click(object sender, EventArgs e)
        {
            this.studentsTableAdapter.Update(this.aGMUDataSet);
        }

        private void btnSavePrograms_Click(object sender, EventArgs e)
        {
            this.programsTableAdapter.Update(this.aGMUDataSet);
        }
    }
}
