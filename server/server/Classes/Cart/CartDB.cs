using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
namespace server.Classes.Cart
{
    internal class CartDB 
    {
        CartDB p_obj_CartDB = new CartDB();
        
        ~CartDB() 
        {


        }

         public int Incluir(CartDB p_obj_CartDB)
        {
            int i_ID = -1;

            
            SqlConnection obj_Conn = new SqlConnection(/**/);

            string s_SQL = " INSERT INTO TB_CART " +
                " ( " +
                " I_COD_CART, " +
                " I_COD_USER, " +
                " DT_CREATEAT_CART , " +
                " S_SUSP_CONSULTA, " +
                " DT_AGEND_CONSULTA, " +
                " DT_RETOR_CONSULTA " +
                " ) " +
                " VALUES " +
                " ( " +
                " @I_COD_MEDICO, " +
                " @I_COD_PACIENTE, " +
                " @S_QUEI_CONSULTA, " +
                " @S_SUSP_CONSULTA, " +
                " @DT_AGEND_CONSULTA, " +
                " @DT_RETOR_CONSULTA " +
                " ) " +
                " SELECT IDENT_CURRENT ('TB_CART') AS 'ID' ";

            SqlCommand obj_Cmd = new SqlCommand(s_SQL, obj_Conn);
            obj_Cmd.Parameters.AddWithValue("@I_COD_MEDICO", p_obj_CartDB.Cod_Medico);
            obj_Cmd.Parameters.AddWithValue("@I_COD_PACIENTE", p_obj_CartDB.Cod_Paciente);
            obj_Cmd.Parameters.AddWithValue("@S_QUEI_CONSULTA", p_obj_CartDB.Quei_Consulta);
            obj_Cmd.Parameters.AddWithValue("@S_SUSP_CONSULTA", p_obj_CartDB.Susp_Consulta);
            obj_Cmd.Parameters.AddWithValue("@DT_AGEND_CONSULTA", p_obj_CartDB.Agend_Consulta);
            obj_Cmd.Parameters.AddWithValue("@DT_RETOR_CONSULTA", p_obj_CartDB.Retor_Consulta);

            try
            {WS
                obj_Conn.Open();
                i_ID = Convert.ToInt16(obj_Cmd.ExecuteScalar());

                for (int i = 0; i < p_obj_CartDB.Items.Count; i++) 
                {
                    p_obj_CartDB.Items[i].Cod_Consulta = i_ID;
                    p_obj_CartDB.Incluir(p_obj_CartDB.Items[i]);
                }

                obj_Conn.Close();
            }
            catch (Exception Error)
            {
                MessageBox.Show(Error.Message, "Erro no banco", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            return i_ID;
        
        
        }
    }
}