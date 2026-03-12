namespace server
{
    public class ProductVariant
    {
        private int i_Cod_ProductVariant = -1;
        private int i_Cod_ProductTemplate = -1;
        private string s_SKU_ProductVariant = string.Empty;
        private decimal d_Price_ProductVariant = Decimal.Zero;
        private decimal d_PriceCost_ProductVariant = Decimal.Zero;
        private int i_Stock_ProductVariant = -1;
        private string json_Atributes_ProductVariant = string.Empty;
        private Byte[] Byte_RowVersion_ProductVariant = new[] { byte.MinValue };

        public int Cod_ProductVariant
        {
            get => i_Cod_ProductVariant;
            set => i_Cod_ProductVariant = value;
        }
        public int Cod_ProductTemplate
        {
            get => i_Cod_ProductTemplate;
            set => i_Cod_ProductTemplate = value;
        }
        public string SKU_ProductVariant
        {
            get => s_SKU_ProductVariant;
            set => s_SKU_ProductVariant = value;
        }
        public decimal Price_ProductVariant
        {
            get => d_Price_ProductVariant;
            set => d_Price_ProductVariant = value;
        }
        public decimal PriceCost_ProductVariant
        {
            get => d_PriceCost_ProductVariant;
            set => d_PriceCost_ProductVariant = value;
        }
        public int Stock_ProductVariant
        {
            get => i_Stock_ProductVariant;
            set => i_Stock_ProductVariant = value;
        }
        public string Atributes_ProductVariant
        {
            get => json_Atributes_ProductVariant;
            set => json_Atributes_ProductVariant = value;
        }
        public Byte[] RowVersion_ProductVariant
        {
            get => Byte_RowVersion_ProductVariant;
            set => Byte_RowVersion_ProductVariant = value;
        }
    }
}
