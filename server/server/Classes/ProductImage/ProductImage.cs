namespace server.Classes.ProductImage
{
    public class ProductImage
    {
        public int ICodProductImage
        {
            get => i_Cod_ProductImage;
            set => i_Cod_ProductImage = value;
        }

        public int ICodProductTemplate
        {
            get => i_Cod_ProductTemplate;
            set => i_Cod_ProductTemplate = value;
        }

        public int? ICodProductVariant
        {
            get => i_Cod_ProductVariant;
            set => i_Cod_ProductVariant = value;
        }

        public string SUrlProductImage
        {
            get => s_URL_ProductImage;
            set => s_URL_ProductImage = value ?? throw new ArgumentNullException(nameof(value));
        }

        public bool BIsMainProductImage
        {
            get => b_IsMain_ProductImage;
            set => b_IsMain_ProductImage = value;
        }

        public int IDisplayOrderProductImage
        {
            get => i_DisplayOrder_ProductImage;
            set => i_DisplayOrder_ProductImage = value;
        }

        private int i_Cod_ProductImage = -1;
        private int i_Cod_ProductTemplate = -1;
        private int? i_Cod_ProductVariant = -1;
        private string s_URL_ProductImage = String.Empty;
        private bool b_IsMain_ProductImage = false;
        private int i_DisplayOrder_ProductImage = -1;
    }
}
