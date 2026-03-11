namespace server;

public class ProductTemplate
{
    public int ICodProductTemplate
    {
        get => i_Cod_ProductTemplate;
        set => i_Cod_ProductTemplate = value;
    }

    public int ICodCategory
    {
        get => i_Cod_Category;
        set => i_Cod_Category = value;
    }

    public string SNmProductTemplate
    {
        get => s_NM_ProductTemplate;
        set => s_NM_ProductTemplate = value ?? throw new ArgumentNullException(nameof(value));
    }

    public string SDescriptionProductTemplate
    {
        get => s_Description_ProductTemplate;
        set => s_Description_ProductTemplate = value ?? throw new ArgumentNullException(nameof(value));
    }

    public string SSlugProductTemplate
    {
        get => s_Slug_ProductTemplate;
        set => s_Slug_ProductTemplate = value ?? throw new ArgumentNullException(nameof(value));
    }

    public bool BIsActive
    {
        get => b_IsActive;
        set => b_IsActive = value;
    }

    private int i_Cod_ProductTemplate = -1;
    private int i_Cod_Category = -1;
    private string s_NM_ProductTemplate = string.Empty;
    private string s_Description_ProductTemplate = string.Empty;
    private string s_Slug_ProductTemplate = string.Empty;
    private bool b_IsActive = false;
}