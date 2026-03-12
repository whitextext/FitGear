using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Classes.Payment
{
    public class Payment
    {
        private int i_Cod_Payment = -1;
        private int i_Cod_Order = -1;
        private string s_GatewayId_Payment = string.Empty;
        private string s_Method_Payment = string.Empty;
        private string s_Status_Payment = string.Empty;
        private decimal d_Amount_Payment = decimal.Zero;
        private DateTime dt_CreateAt_Payment = DateTime.UtcNow;

        public int Cod_Payment
        {
            get => i_Cod_Payment;
            set => i_Cod_Payment = value;
        }
        public int Cod_Order
        {
            get => i_Cod_Order;
            set => i_Cod_Order = value;
        }
        public string GatewayId_Payment
        {
            get => s_GatewayId_Payment;
            set => s_GatewayId_Payment = value;
        }
        public string Method_Payment
        {
            get => s_Method_Payment;
            set => s_Method_Payment = value;
        }
        public string Status_Payment
        {
            get => s_Status_Payment;
            set => s_Status_Payment = value;
        }
        public decimal Amount_Payment
        {
            get => d_Amount_Payment;
            set => d_Amount_Payment = value;
        }
        public DateTime CreateAt_Payment
        {
            get => dt_CreateAt_Payment;
            set => dt_CreateAt_Payment = value;
        }
    }
}
