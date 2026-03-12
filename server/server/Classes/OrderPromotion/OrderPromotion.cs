using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Classes.OrderItem
{
    public class OrderPromotion
    {
        private int i_Cod_OrderPromotion = -1;
        private int i_Cod_Order = -1;
        private int i_Cod_Promotion = -1;
        private string s_SnapshotPromotionName_OrderPromotion = string.Empty;
        private decimal d_DiscountApplied_OrderPromotion = decimal.Zero;

        public int Cod_OrderPromotion
        {
            get => i_Cod_OrderPromotion;
            set => i_Cod_OrderPromotion = value;
        }
        public int Cod_Order
        {
            get => i_Cod_Order;
            set => i_Cod_Order = value;
        }
        public int Cod_Promotion
        {
            get => i_Cod_Promotion;
            set => i_Cod_Promotion = value;
        }
        public string SnapshotPromotionName_OrderPromotion
        {
            get => s_SnapshotPromotionName_OrderPromotion;
            set => s_SnapshotPromotionName_OrderPromotion = value;
        }
        public decimal DiscountApplied_OrderPromotion
        {
            get => d_DiscountApplied_OrderPromotion;
            set => d_DiscountApplied_OrderPromotion = value;
        }
    }
}
