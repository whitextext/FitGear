using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Classes.Categorie
{
    class Category
    {
        private int i_Cod_Category = -1;
        private string s_NM_Categorie = string.Empty;
        private string s_Slug_Categorie = string.Empty;
        private bool b_IsActive_Categorie = false;

        public int ICodCategorie
        {
            get => i_Cod_Category;
            set => i_Cod_Category = value;
        }

        public string SNmCategorie
        {
            get => s_NM_Categorie;
            set => s_NM_Categorie = value ?? throw new ArgumentNullException(nameof(value));
        }

        public string SSlugCategorie
        {
            get => s_Slug_Categorie;
            set => s_Slug_Categorie = value ?? throw new ArgumentNullException(nameof(value));
        }

        public bool BIsActiveCategorie
        {
            get => b_IsActive_Categorie;
            set => b_IsActive_Categorie = value;
        }
    }
}
