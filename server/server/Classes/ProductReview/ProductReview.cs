using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Classes.ProductReview
{
    public class ProductReview
    {
        private int i_Cod_ProductReview = -1;
        private int i_Cod_ProductTemplate = -1;
        private int i_Cod_User = -1;
        private int i_Cod_Order = -1;
        private int i_Rating_ProductReview = 0;
        private string s_Title_ProductReview = string.Empty;
        private string s_Comment_ProductReview = string.Empty;
        private DateTime dt_CreatedAt_ProductReview = DateTime.UtcNow;

        public int Cod_ProductReview
        {
            get => i_Cod_ProductReview;
            set => i_Cod_ProductReview = value;
        }
        public int Cod_ProductTemplate
        {
            get => i_Cod_ProductTemplate;
            set => i_Cod_ProductTemplate = value;
        }
        public int Cod_User
        {
            get => i_Cod_User;
            set => i_Cod_User = value;
        }
        public int Cod_Order
        {
            get => i_Cod_Order;
            set => i_Cod_Order = value;
        }
        public int Rating_ProductReview
        {
            get => i_Rating_ProductReview;
            set => i_Rating_ProductReview = value;
        }
        public string Title_ProductReview
        {
            get => s_Title_ProductReview;
            set => s_Title_ProductReview = value;
        }
        public string Comment_ProductReview
        {
            get => s_Comment_ProductReview;
            set => s_Comment_ProductReview = value;
        }
        public DateTime CreatedAt_ProductReview
        {
            get => dt_CreatedAt_ProductReview;
            set => dt_CreatedAt_ProductReview = value;
        }
    }
}
