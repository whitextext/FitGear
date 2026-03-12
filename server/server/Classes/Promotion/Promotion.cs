using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Classes.Promotion
{
    public class Promotion
    {
        private int i_Cod_Promotion = -1;
        private string s_Name_Promotion = string.Empty;
        private string s_UseCode_Promotion = string.Empty;
        private string s_DiscountType_Promotion = string.Empty;
        private decimal d_Value_Promotion = decimal.Zero;
        private DateTime dt_StartDate_Promotion = DateTime.UtcNow;
        private DateTime dt_EndDate_Promotion = DateTime.MaxValue;
        private bool b_IsActive_Promotion = false;

        public int Cod_Promotion
        {
            get => i_Cod_Promotion;
            set => i_Cod_Promotion = value;
        }

        public string Name_Promotion
        {
            get => s_Name_Promotion;
            set => s_Name_Promotion = value;
        }

        public string UseCode_Promotion
        {
            get => s_UseCode_Promotion;
            set => s_UseCode_Promotion = value;
        }

        public string DiscountType_Promotion
        {
            get => s_DiscountType_Promotion;
            set => s_DiscountType_Promotion = value;
        }

        public decimal Value_Promotion
        {
            get => d_Value_Promotion;
            set => d_Value_Promotion = value;
        }

        public DateTime StartDate_Promotion
        {
            get => dt_StartDate_Promotion;
            set => dt_StartDate_Promotion = value;
        }

        public DateTime EndDate_Promotion
        {
            get => dt_EndDate_Promotion;
            set => dt_EndDate_Promotion = value;
        }

        public bool IsActive_Promotion
        {
            get => b_IsActive_Promotion;
            set => b_IsActive_Promotion = value;
        }
    }
}
