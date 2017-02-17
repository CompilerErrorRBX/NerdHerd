using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NerdHerd.Startup))]
namespace NerdHerd
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
