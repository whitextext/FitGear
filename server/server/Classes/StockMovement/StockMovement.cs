using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Classes.StockMovement
{
    public class StockMovement
    {
        private int i_Cod_StockMovement = -1;
        private int i_Cod_ProductVariant = -1;
        private int? i_Cod_Order = null; // Pode ser null para ajustes manuais
        private int i_Quantity_StockMovement = 0;
        private string s_MoveType_StockMovement = string.Empty; // Enum simulado: "Entrada", "Saída", "Ajuste"
        private decimal d_ValueAtTime_StockMovement = decimal.Zero;
        private DateTime dt_MoveDate_StockMovement = DateTime.UtcNow;

        public int Cod_StockMovement
        {
            get => i_Cod_StockMovement;
            set => i_Cod_StockMovement = value;
        }
        public int Cod_ProductVariant
        {
            get => i_Cod_ProductVariant;
            set => i_Cod_ProductVariant = value;
        }
        public int? Cod_Order
        {
            get => i_Cod_Order;
            set => i_Cod_Order = value;
        }
        public int Quantity_StockMovement
        {
            get => i_Quantity_StockMovement;
            set => i_Quantity_StockMovement = value;
        }
        public string MoveType_StockMovement
        {
            get => s_MoveType_StockMovement;
            set => s_MoveType_StockMovement = value;
        }
        public decimal ValueAtTime_StockMovement
        {
            get => d_ValueAtTime_StockMovement;
            set => d_ValueAtTime_StockMovement = value;
        }
        public DateTime MoveDate_StockMovement
        {
            get => dt_MoveDate_StockMovement;
            set => dt_MoveDate_StockMovement = value;
        }
    }
}
