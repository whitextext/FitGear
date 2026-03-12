using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Classes.PriceHistory
{
    public class PriceHistory
    {
        private int i_Cod_PriceHistory = -1;
        private int i_Cod_ProductVariant = -1;
        private int i_Cod_User = -1;
        private decimal d_OldPrice_PriceHistory = decimal.Zero;
        private decimal d_NewPrice_PriceHistory = decimal.Zero;
        private decimal d_OldCost_PriceHistory = decimal.Zero;
        private decimal d_NewCost_PriceHistory = decimal.Zero;
        private DateTime Dt_ChangeDate_PriceHistory = DateTime.UtcNow;

        public int Cod_PriceHistory
        {
            get => i_Cod_PriceHistory;
            set => i_Cod_PriceHistory = value;
        }
        public int Cod_ProductVariant
        {
            get => i_Cod_ProductVariant;
            set => i_Cod_ProductVariant = value;
        }
        public int Cod_User
        {
            get => i_Cod_User;
            set => i_Cod_User = value;
        }
        public decimal OldPrice_PriceHistory
        {
            get => d_OldPrice_PriceHistory;
            set => d_OldPrice_PriceHistory = value;
        }
        public decimal NewPrice_PriceHistory
        {
            get => d_NewPrice_PriceHistory;
            set => d_NewPrice_PriceHistory = value;
        }
        public decimal OldCost_PriceHistory
        {
            get => d_OldCost_PriceHistory;
            set => d_OldCost_PriceHistory = value;
        }
        public decimal NewCost_PriceHistory
        {
            get => d_NewCost_PriceHistory;
            set => d_NewCost_PriceHistory = value;
        }
        public DateTime ChangeDate_PriceHistory
        {
            get => Dt_ChangeDate_PriceHistory;
            set => Dt_ChangeDate_PriceHistory = value;
        }
    }
}
