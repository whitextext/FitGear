using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Classes.Order
{
    public class Order
    {
        private int i_Cod_Order = -1;
        private int i_Cod_User = -1;
        private DateTime dt_OrderDt_Order = DateTime.UtcNow;
        private decimal d_TotalAmount_Order = 0;
        private decimal d_DiscountAmount_Order = 0;
        private decimal d_NetAmount_Order = 0;
        private string s_Status_Order = string.Empty; // Enum simulado
        private string s_ShipStreet_Order = string.Empty;
        private string s_ShipNumber_Order = string.Empty;
        private string s_ShipZipCode_Order = string.Empty;
        private string s_ShipCity_Order = string.Empty;
        private string s_ShipState_Order = string.Empty;

        public int Cod_Order
        {
            get => i_Cod_Order;
            set => i_Cod_Order = value;
        }
        public int Cod_User
        {
            get => i_Cod_User;
            set => i_Cod_User = value;
        }
        public DateTime OrderDT_Order
        {
            get => dt_OrderDt_Order;
            set => dt_OrderDt_Order = value;
        }
        public decimal TotalAmount_Order
        {
            get => d_TotalAmount_Order;
            set => d_TotalAmount_Order = value;
        }
        public decimal DiscountAmount_Order
        {
            get => d_DiscountAmount_Order;
            set => d_DiscountAmount_Order = value;
        }
        public decimal NetAmount_Order
        {
            get => d_NetAmount_Order;
            set => d_NetAmount_Order = value;
        }
        public string Status_Order
        {
            get => s_Status_Order;
            set => s_Status_Order = value;
        }
        public string ShipStreet_Order
        {
            get => s_ShipStreet_Order;
            set => s_ShipStreet_Order = value;
        }
        public string ShipNumber_Order
        {
            get => s_ShipNumber_Order;
            set => s_ShipNumber_Order = value;
        }
        public string ShipZipCode_Order
        {
            get => s_ShipZipCode_Order;
            set => s_ShipZipCode_Order = value;
        }
        public string ShipCity_Order
        {
            get => s_ShipCity_Order;
            set => s_ShipCity_Order = value;
        }
        public string ShipState_Order
        {
            get => s_ShipState_Order;
            set => s_ShipState_Order = value;
        }
    }
}
