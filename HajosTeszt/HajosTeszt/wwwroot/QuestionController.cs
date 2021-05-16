using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.wwwroot
{
    //[Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        public int m1()
        { 
        HajosTesztContext = new hajostesztcontext();
            int kerdesdb = ContextBoundObject.questions.count();
            return kerdesdb;
        }

        public ActionResult M2(int sorszam)
        {
            HajosTesztContext = new hajostesztcontext();
            var kerdes
        }

    }
}
