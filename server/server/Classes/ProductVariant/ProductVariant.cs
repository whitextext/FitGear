namespace server;

public class ProductVariant
{
    private int i_Cod_ProductVariant = -1;
    private int i_Cod_ProductTemplate = -1;
    private string s_SKU_ProductVariant = string.Empty;
    private decimal d_Price_ProductVariant = Decimal.Zero;
    private decimal d_PriceCost_ProductVariant = Decimal.Zero;
    private int i_Stock_ProductVariant = -1;
    private string json_Atributes_ProductVariant = string.Empty;
    private Byte[] Byte_RowVersion_ProductVariant = new[] {byte.MinValue};
    
}