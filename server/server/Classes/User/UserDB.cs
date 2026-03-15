using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;


namespace server.Classes.User
{
    public class UserDB 
    {
        ~UserDB() 
        {

        }

        public int Incluir(User p_obj_User)
        {
            int i_Id = -1;

            SqlConnection sql_Conn = new SqlConnection(/* path */);

            string s_Sql = "INSERT INTO Users (MailUser, PasswordUser, FirstNameUser, LastNameUser, RoleUser, CreateAtUser, IsActiveUser) " +
                           "VALUES (@MailUser, @PasswordUser, @FirstNameUser, @LastNameUser, @RoleUser, @CreateAtUser, @IsActiveUser); " +
                           "SELECT SCOPE_IDENTITY();";

            SqlCommand sql_Cmd = new SqlCommand( s_Sql, sql_Conn);
            sql_Cmd.Parameters.Add("@MailUser", p_obj_User.MailUser);
            sql_Cmd.Parameters.Add("@PasswordUser", p_obj_User.PasswordUser);
            sql_Cmd.Parameters.Add("@FirstNameUser", p_obj_User.FirstNameUser);
            sql_Cmd.Parameters.Add("@LastNameUser", p_obj_User.LastNameUser);
            sql_Cmd.Parameters.Add("@RoleUser", p_obj_User.RoleUser);
            sql_Cmd.Parameters.Add("@CreateAtUser", p_obj_User.CreateAtUser);
            sql_Cmd.Parameters.Add("@IsActiveUser", p_obj_User.IsActiveUser);

            try
            {
                sql_Conn.Open();
                i_Id = Convert.ToInt16(sql_Cmd.ExecuteScalar());
                sql_Conn.Close();
            }
            catch (Exception Error)
            {
                throw new Exception("Falha crítica na persistência de dados.", Error);
            }
            return i_Id;
        }



    }
}
