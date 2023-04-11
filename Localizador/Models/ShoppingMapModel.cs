namespace Localizador.Models
{
    public class ShoppingMapModel
    {
        public class ShoppingMap
        {
            public List<Route> Routes { get; set; }

            public ShoppingMap()
            {
                Routes = new List<Route>();
            }
        }

        public class Route
        {
            public string Name { get; set; }
            public List<Point> Points { get; set; }

            public Route()
            {
                Points = new List<Point>();
            }
        }

        public class Point
        {
            public int X { get; set; }
            public int Y { get; set; }
        }
    }
}
