using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Classes.CartItem
{
    public class CartItem
    {
        private int i_Cod_CartItem = -1;
        private int i_Cod_Cart = -1;
        private int i_Cod_ProductVariant = -1;
        private int i_Quantity_CartItem = 0;

        public int Cod_CartItem
        {
            get => i_Cod_CartItem;
            set => i_Cod_CartItem = value;
        }
        public int Cod_Cart
        {
            get => i_Cod_Cart;
            set => i_Cod_Cart = value;
        }
        public int Cod_ProductVariant
        {
            get => i_Cod_ProductVariant;
            set => i_Cod_ProductVariant = value;
        }
        public int Quantity_CartItem
        {
            get => i_Quantity_CartItem;
            set => i_Quantity_CartItem = value;
        }
    }
}
