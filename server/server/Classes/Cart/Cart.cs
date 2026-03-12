using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Classes.Cart
{
    public class Cart
    {
        private int i_Cod_Cart = -1;
        private int i_Cod_User = -1;
        private DateTime dt_CreateAt_Cart = DateTime.UtcNow;
        private DateTime dt_ExpireAt_Cart = DateTime.UtcNow.AddDays(30); // Exemplo: carrinho expira em 30 dias

        public int Cod_Cart
        {
            get => i_Cod_Cart;
            set => i_Cod_Cart = value;
        }
        public int Cod_User
        {
            get => i_Cod_User;
            set => i_Cod_User = value;
        }
        public DateTime CreateAt_Cart
        {
            get => dt_CreateAt_Cart;
            set => dt_CreateAt_Cart = value;
        }
        public DateTime ExpireAt_Cart
        {
            get => dt_ExpireAt_Cart;
            set => dt_ExpireAt_Cart = value;
        }
    }
}
