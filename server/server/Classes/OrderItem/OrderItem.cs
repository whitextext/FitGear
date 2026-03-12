using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Classes.OrderItem
{
    public class OrderItem
    {
        private int i_Cod_OrderItem = -1;
        private int i_Cod_Order = -1;
        private int i_Cod_ProductVariant = -1;
        private string s_SnapshotName_OrderItem = string.Empty;
        private int i_Quantity_OrderItem = 0;
        private decimal d_UnitPrice_OrderItem = decimal.Zero;
        private decimal d_UnitCost_OrderItem = decimal.Zero;

        public int Cod_OrderItem
        {
            get => i_Cod_OrderItem;
            set => i_Cod_OrderItem = value;
        }
        public int Cod_Order
        {
            get => i_Cod_Order;
            set => i_Cod_Order = value;
        }
        public int Cod_ProductVariant
        {
            get => i_Cod_ProductVariant;
            set => i_Cod_ProductVariant = value;
        }
        public string SnapshotName_OrderItem
        {
            get => s_SnapshotName_OrderItem;
            set => s_SnapshotName_OrderItem = value;
        }
        public int Quantity_OrderItem
        {
            get => i_Quantity_OrderItem;
            set => i_Quantity_OrderItem = value;
        }
        public decimal UnitPrice_OrderItem
        {
            get => d_UnitPrice_OrderItem;
            set => d_UnitPrice_OrderItem = value;
        }
        public decimal UnitCost_OrderItem
        {
            get => d_UnitCost_OrderItem;
            set => d_UnitCost_OrderItem = value;
        }
    }
}
