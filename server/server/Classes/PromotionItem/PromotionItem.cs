using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Classes.PromotionItem
{
    public class PromotionItem
    {
        private int i_Cod_PromotionsItem = -1;
        private int i_Cod_Promotion = -1;
        private int i_Cod_ProductVariant = -1;
        private int i_Cod_Categorie = -1;

        public int Cod_PromotionsItem
        {
            get => i_Cod_PromotionsItem;
            set => i_Cod_PromotionsItem = value;
        }

        public int Cod_Promotion
        {
            get => i_Cod_Promotion;
            set => i_Cod_Promotion = value;
        }

        public int Cod_ProductVariant
        {
            get => i_Cod_ProductVariant;
            set => i_Cod_ProductVariant = value;
        }

        public int Cod_Categorie
        {
            get => i_Cod_Categorie;
            set => i_Cod_Categorie = value;
        }
    }
}
