using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Classes.User
{
    public class User
    {
        private int i_Cod_User = -1;
        private string s_Mail_User = string.Empty;
        private string s_Password_User = string.Empty;
        private string s_FirstName_User = string.Empty;
        private string s_LastName_User = string.Empty;
        private int i_Role_User = -1;
        private DateTime dt_CreateAt_User = DateTime.MinValue;
        private bool B_IsActive_User = false;

        public int CodUser
        {
            get { return i_Cod_User; }
            set { i_Cod_User = value; }
        }

        public string MailUser
        {
            get { return s_Mail_User; }
            set { s_Mail_User = value; }
        }

        public string PasswordUser
        {
            get { return s_Password_User; }
            set { s_Password_User = value; }
        }

        public string FirstNameUser
        {
            get { return s_FirstName_User; }
            set { s_FirstName_User = value; }
        }

        public string LastNameUser
        {
            get { return s_LastName_User; }
            set { s_LastName_User = value; }
        }

        public int RoleUser
        {
            get { return i_Role_User; }
            set { i_Role_User = value; }
        }

        public DateTime CreateAtUser
        {
            get { return dt_CreateAt_User; }
            set { dt_CreateAt_User = value; }
        }

        public bool IsActiveUser
        {
            get { return B_IsActive_User; }
            set { B_IsActive_User = value; }
        }
    }
}
